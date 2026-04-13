/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Cards } from "./components/Cards";

// TODO 1: React hook-уудыг импортлох

// TODO 2: Product төрөл зарлах
// API: https://dummyjson.com/products
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
};

// TODO 3: API хариуны төрөл зарлах
type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const PRODUCTS_PER_PAGE = 10;

export default function Home() {
  // TODO 4: State хувьсагчдыг зарлах (products, loading, error)
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // TODO 5: Хайлтын state зарлах
  // search - хайлтын текст, эхлэх утга: ""
  const [search, setSearch] = useState("");
  // TODO 6: Pagination state зарлах
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  // total - нийт бүтээгдэхүүний тоо, эхлэх утга: 0
  // skip  - алгассан тоо, эхлэх утга: 0

  // TODO 7: useEffect-ээр өгөгдөл татах
  // URL: search утгатай бол
  //   `https://dummyjson.com/products/search?q=${search}&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
  // Үгүй бол
  //   `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`
  // dependency array: [search, skip]
  // data.total-г total state-д хадгалах
  useEffect(() => {
    setLoading(true);
    setError(null);
    let url = `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProducts(data.products);
        setTotal(data.total);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [search, skip]);
  // TODO 8: Хайлт хийх handler
  // function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
  //   setSearch(e.target.value);
  //   setSkip(0);
  // }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSkip(0);
  };
  // TODO 9: Pagination handler-ууд
  // function handlePrev() { setSkip((s) => Math.max(0, s - PRODUCTS_PER_PAGE)); }
  // function handleNext() { setSkip((s) => s + PRODUCTS_PER_PAGE); }
  const handlePrev = () => {
    setSkip((s) => Math.max(0, s - PRODUCTS_PER_PAGE));
  };
  const handleNext = () => {
    setSkip((s) => s + PRODUCTS_PER_PAGE);
  };
  // TODO 10: Ачааллын төлөв (loading state) - Already declared above
  // TODO 11: Алдааны төлөв (error state) - Already declared above
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <Header /> {/* Category Navigation */}
      {/* TODO 15: Идэвхтэй категорийг тодруулах, дарахад тухайн категорийн бүтээгдэхүүн шүүх */}
      <Nav />
      {/* Main Content */}{" "}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Search */}
        <div className="mb-8">
          {/* TODO: value={search} onChange={handleSearch} холбох */}
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Бүтээгдэхүүн хайх..."
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition-colors focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800 sm:max-w-md"
          />
        </div>

        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          {/* TODO 12: Бүтээгдэхүүний тоо харуулах */}0 products found
        </p>

        {/* TODO 13: Доорх hardcode-г products.map() ашиглан солих */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Cards Product={products} />
          {products.slice(1).map((product) => (
            <Cards key={product.id} Product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {/* TODO: onClick={handlePrev} disabled={skip === 0} холбох */}
          <button
            onClick={handlePrev}
            disabled={skip === 0}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Өмнөх
          </button>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {Math.floor(skip / PRODUCTS_PER_PAGE) + 1} /{" "}
            {Math.ceil(total / PRODUCTS_PER_PAGE)}
            {/* TODO 14: Хуудасны дугаар харуулах */}
            {/* Хуудас {Math.floor(skip / PRODUCTS_PER_PAGE) + 1} / {Math.ceil(total / PRODUCTS_PER_PAGE)} */}
          </span>
          {/* TODO: onClick={handleNext} disabled={skip + PRODUCTS_PER_PAGE >= total} холбох */}
          <button
            onClick={handleNext}
            disabled={skip + PRODUCTS_PER_PAGE >= total}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Дараах &rarr;
          </button>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

// БОНУС TODO 14: Компонент болгон задлах
//   - app/types/product.ts
//   - app/components/ProductCard.tsx
//   - app/components/SearchBar.tsx
//   - app/components/Pagination.tsx
//   - app/components/ProductList.tsx
//   - app/page.tsx
