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
        src={meme.imageUrl}
        alt={meme.name}
        width={200}
        height={200}
        layout="responsive"
      />
    </div>
  );
};
