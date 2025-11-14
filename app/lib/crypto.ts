import { Coin, CoinList } from "@/types/models";

export async function getCoins(): Promise<CoinList[]> {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    {
      headers: {
        "x-cg-pro-api-key": process.env.COINGECKO_API_KEY!,
      },
      next: { revalidate: 60 },
    }
  );
  
  return res.json();
}

export async function getCoin(id: string): Promise<Coin> {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
    headers: {
      "x-cg-pro-api-key": process.env.COINGECKO_API_KEY!,
    },
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch coins");
  }

  return res.json();

}
