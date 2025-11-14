import LivePrice from "@/components/LivePrice";
import { getCoin } from "@/lib/crypto";
import { Coin, paramsType } from "@/types/models";
import Image from "next/image";


export async function generateMetadata({params}: paramsType) {
    const {id}=params

    return{
        title: id,
        description: `Market data for ${id}`,
    }
    
}
export default async function CoinPage({ params }: paramsType) {
  const { id } =await params;
  const coin = (await getCoin(id)) as Coin;
  console.log("🚀 ~ CoinPage ~ coin:", coin.id)

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Image alt={coin.id} src={coin.image.large} width={50} height={50} />
        <h1 className="text-2xl font-bold">{coin.name}</h1>
      </div>

      <p className="text-lg">${coin.market_data.current_price.usd}</p>

      <LivePrice symbol={coin.symbol} />
    </div>
  );
}