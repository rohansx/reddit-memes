"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Card = {
  id: string | number;
  thumbnail: string;
};

interface LayoutGridProps {
  items: Card[];
}

const BlurImage = ({
  card,
  isSelected,
}: {
  card: Card;
  isSelected: boolean;
}) => {
  return (
    <Image
      src={card.thumbnail}
      alt="Meme"
      layout="fill"
      objectFit=""
      className={`${isSelected ? "" : "grayscale"}`}
    />
  );
};

export const LayoutGrid: React.FC<LayoutGridProps> = ({ items }) => {
  const [selectedId, setSelectedId] = useState<null | string | number>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-16">
      {items.map((card) => (
        <motion.div
          key={card.id}
          layout
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative bg-white p-2 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all m-2 overflow-hidden`}
          style={{
            aspectRatio: 8 / 8,
            scale: selectedId === card.id ? 1.1 : 1,
            zIndex: selectedId === card.id ? 1 : 0,
            filter: selectedId === card.id ? "none" : "blur(4px)",
          }}
          onClick={() => setSelectedId(selectedId === card.id ? null : card.id)}
        >
          <BlurImage card={card} isSelected={selectedId === card.id} />
        </motion.div>
      ))}
    </div>
  );
};
