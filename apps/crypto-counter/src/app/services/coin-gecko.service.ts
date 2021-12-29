import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CoinGeckoService {

  constructor(private http: HttpClient) {}

  getListOfCryptoCurrencies(): Observable<{ data: any[] }> {
    // TODO: create type for instead of any
    return this.http.get<{ data: any[] }>('/api/getMarketData')
  }

}
