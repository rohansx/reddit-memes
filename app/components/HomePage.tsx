// homepage.tsx
import React from "react";
import { AppBar } from "./ui/AppBar";
import Memes from "./Memes";
export const HomePage = () => {
  return (
    <div>
      <AppBar />
      <Memes />
    </div>
  );
};
