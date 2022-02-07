import { Injectable } from '@nestjs/common'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const CoinGecko = require('coingecko-api')

@Injectable()
export class AppService {
  CoinGeckoClient = new CoinGecko()

  getMarketData(): any {
    return this.CoinGeckoClient.coins.markets({ per_page: 250 })
  }
}
