"use client"

import { useState, useEffect, useTransition } from "react"
import { toggleWatchlist, getWatchlist } from "@/actions"

export default function WatchlistButton({ id }: { id: string }) {
  const [inWatchlist, setInWatchlist] = useState(false)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    async function fetchStatus() {
      const list = await getWatchlist()
      setInWatchlist(list.includes(id))
    }
    fetchStatus()
  }, [id])

  const handleClick = (event:React.MouseEvent) => {
    startTransition(async () => {
      await toggleWatchlist(id)
      setInWatchlist((prev) => !prev)
    })
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`px-3 py-1 rounded ${
        inWatchlist ? "bg-red-600 text-white" : "bg-green-600 text-white"
      }`}
    >
      {isPending
        ? "..."
        : inWatchlist
        ? "Remove from Watchlist"
        : "Add to Watchlist"}
    </button>
  )
}
