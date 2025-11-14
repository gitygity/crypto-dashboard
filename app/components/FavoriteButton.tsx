"use client";

import { useState, useEffect } from "react";
import { useTransition } from "react";

export default function FavoriteButton({ id }: { id: string }) {
  const [isPending, start] = useTransition();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function checkFav() {
      const saved = localStorage.getItem("favorites");
      if (saved) {
        const favs: string[] = JSON.parse(saved);
        setIsFavorite(favs.includes(id));
      }
    }
    checkFav();
  }, [id]);

  const handleClick = () => {
    start(() => {
      setIsFavorite((prev) => {
        const newVal = !prev;

        const saved = localStorage.getItem("favorites");
        let favs: string[] = saved ? JSON.parse(saved) : [];

        if (newVal) {
          favs.push(id);
        } else {
          favs = favs.filter((f) => f !== id);
        }

        localStorage.setItem("favorites", JSON.stringify(favs));

        return newVal;
      });
    });
  };

  return (
    <button
      className={`px-3 py-1 rounded ${
        isFavorite ? "bg-yellow-500" : "bg-blue-600"
      } text-white`}
      onClick={handleClick}>
      {isPending ? "..." : isFavorite ? "Favorited" : "Favorite"}
    </button>
  );
}
