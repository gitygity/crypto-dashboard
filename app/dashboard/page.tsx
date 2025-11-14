import { getCoins } from "@/lib/crypto"
import {  CoinList } from "@/types/models"
import Image from "next/image"

export default async function DashboardPage(){
    const coins=await getCoins()
    console.log("🚀 ~ DashboardPage ~ coins:", coins)

    return  <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Crypto Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {coins.map((coin: CoinList) => (
          <a
            key={coin.id}
            href={`/dashboard/${coin.id}`}
            className="bg-white p-4 rounded-xl shadow"
          >
            <Image width={40} height={40} src={coin.image||''} className="w-10 h-10" alt={coin.id}  />
            <p className="font-medium">{coin.name}</p>
            <p>${coin.current_price}</p>
          </a>
        ))}
      </div>
    </div>
}