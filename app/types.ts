export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

export type Review = {
  rating: number;
  comment: string;
  date: string; // or Date if you parse it
  reviewerName: string;
  reviewerEmail: string;
};

type Meta = {
  createdAt: string; // or Date
  updatedAt: string; // or Date
  barcode: string;
  qrCode: string;
};
// TODO 3: API хариуны төрөл зарлах
export type ProductApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzYzOTU5NDMsImV4cCI6MTc3NjM5OTU0M30.361N-IulD0QMg9O248KmWwF3cH6JMGyiwHep2E8ypzU";
email: "emily.johnson@x.dummyjson.com";
firstName: "Emily";
gender: "female";
id: 1;
image: "https://dummyjson.com/icon/emilys/128";
lastName: "Johnson";
refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzYzOTU5NDMsImV4cCI6MTc3ODk4Nzk0M30.q_5AUzQYbJC1myWTKWBTW6EcSTGRixuZv_wFyUHnNX8";
username: "emilys";
