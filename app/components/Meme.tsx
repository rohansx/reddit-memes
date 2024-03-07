// Meme.tsx
import React from "react";
import Image from "next/image";

interface MemeProps {
  meme: {
    imageUrl: string;
    name: string;
  };
}

export const Meme: React.FC<MemeProps> = ({ meme }) => {
  return (
    <div>
      <Image
        src={meme.imageUrl || "/reddit-logo.svg"}
        alt={meme.name || "Meme"}
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );
};
