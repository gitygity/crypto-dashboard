export interface CoinList {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  market_data: {
    current_price: {
      usd: number;
    };
  };
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  market_data: {
    current_price: {
      usd: number;
    };
  };
}

export type paramsType = {
  params: {
    id: string;
  };
};
