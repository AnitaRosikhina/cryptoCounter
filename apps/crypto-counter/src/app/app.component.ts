import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoinGeckoService } from './services/coin-gecko.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'crypto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  cryptoCurrencies$: Observable<any[]> | undefined

  constructor(private cgs: CoinGeckoService) {}

  ngOnInit() {
    this.cryptoCurrencies$ = this.cgs.getListOfCryptoCurrencies().pipe(map(res => res.data))
  }
}
