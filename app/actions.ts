
'use server'

import { revalidatePath } from 'next/cache'

let watchlist: string[] = []

export async function toggleWatchlist(id: string) {
  if (watchlist.includes(id)) {
    watchlist = watchlist.filter((coin) => coin !== id)
  } else {
    watchlist.push(id)
  }

  // فقط مسیر داشبورد رو ریولیدیت می‌کنیم تا UI آپدیت بشه
  revalidatePath('/dashboard')
}

export async function getWatchlist() {
  return watchlist
}

