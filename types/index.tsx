export interface ICMSToken {
  id: string
  slug: string
  name: string
  price: number
  symbol: string
}

export interface IAPIToken {
  name: string
  market_data: {
    current_price: {
      usd: number
    }
  }
}
