import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const CoinGecko = require('coingecko-api');

@Injectable()
export class AppService {
  CoinGeckoClient = new CoinGecko();
  getData(): any {
    return this.CoinGeckoClient.coins.all();
  }
}
