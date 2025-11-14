import { getWatchlist } from "@/actions";
import WatchlistButton from "@/components/WatchlistButton";
import { getCoins } from "@/lib/crypto";
import { CoinList } from "@/types/models";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardPage() {
  const coins = await getCoins();
  const watchlist = await getWatchlist();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Crypto Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-2 grid gap-4">
          {coins.map((coin: CoinList) => (
            <div
              key={coin.id}
              className=" bg-white p-4 rounded-xl shadow flex items-center justify-between">
              <Link key={coin.id} className="flex flex-1" href={`/dashboard/${coin.id}`}>
                <div className="flex flex-1 w-full items-center gap-3 ">
                  <Image
                    width={40}
                    height={40}
                    src={coin.image || ""}
                    className="w-10 h-10"
                    alt={coin.id}
                  />
                  <div>
                    <p className="font-medium">{coin.name}</p>
                    <p>${coin.current_price}</p>
                  </div>
                </div>
              </Link>
              <WatchlistButton id={coin.id} />
            </div>
          ))}
        </div>

        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-4">My Watchlist</h2>
          <ul className="space-y-2">
            {watchlist.map((id) => (
              <li key={id} className="bg-white p-3 rounded shadow">
                {id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
