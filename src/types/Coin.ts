export interface Coin {
  id:string
  name: string
  symbol:string
  image: {
    thumb: string
  }
  market_data: {
    current_price: {
      usd:number
    }
    market_cap: {
      usd:number
    }
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_30d: number
  }
}