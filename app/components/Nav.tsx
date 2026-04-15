import React from "react";

const CATEGORIES = [
  { label: "All", value: "" },
  { label: "Beauty", value: "beauty" },
  { label: "Fragrances", value: "fragrances" },
  { label: "Furniture", value: "furniture" },
  { label: "Groceries", value: "groceries" },
  { label: "Home Decoration", value: "home-decoration" },
  { label: "Kitchen Accessories", value: "kitchen-accessories" },
  { label: "Laptops", value: "laptops" },
  { label: "Smartphones", value: "smartphones" },
  { label: "Sports Accessories", value: "sports-accessories" },
  { label: "Vehicle", value: "vehicle" },
];

interface NavProps {
  activeCategory: string;
  setSkip: (n: number) => void;
  setActiveCategory: (cat: string) => void;
}

export const Nav = ({
  activeCategory,
  setSkip,
  setActiveCategory,
}: NavProps) => {
  return (
    <nav className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
          {CATEGORIES.map(({ label, value }) => (
            <li key={value}>
              <button
                onClick={() => {
                  setActiveCategory(value);
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === value
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
