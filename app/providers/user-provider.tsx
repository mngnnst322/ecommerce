"use client";

import React, { createContext, useState } from "react";
import { User } from "../types";

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
export const UserContext = createContext({} as UserContextType);
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
