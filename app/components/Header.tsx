import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../providers/user-provider";

export const Header = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 ">
      <div className="flex justify-between items-center px-50">
        <div className="max-w-7xl px-6 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Product Store
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Browse our collection of products
          </p>
        </div>
        {!user ? (
          <div>
            <Link
              href="/login"
              className=" w-full rounded-xl flex bg-white text-black p-2"
            >
              Нэвтрэх
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
};
