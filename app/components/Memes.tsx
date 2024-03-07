"use client";
import React, { useEffect, useState } from "react";
import { getMeme } from "../api/meme";
import { LayoutGrid } from "./ui/LayoutGrid";
import { Meme as MemeComponent } from "./Meme";

interface Meme {
  id: string;
  name: string;
  imageUrl: string;
}

const Memes: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMeme();
        setMemes(data);
      } catch (error) {
        console.error("Failed to fetch memes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <LayoutGrid
        items={memes.map((meme) => ({
          id: meme.id,
          content: <MemeComponent key={meme.id} meme={meme} />,
          className: "a-class-name-for-styling",
          thumbnail: meme.imageUrl,
        }))}
      />
    </div>
  );
};

export default Memes;
