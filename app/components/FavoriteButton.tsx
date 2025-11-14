"use client";
import { toggleFavorite } from "@/actions";
import { useTransition } from "react";

export default function FavoriteButton({ id }: {id:string}) {
  const [isPending, start] = useTransition();

  return (
    <button
      className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={() => start(() => toggleFavorite(id))}
    >
      {isPending ? "..." : "Favorite"}
    </button>
  );
}