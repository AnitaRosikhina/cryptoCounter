import { ChangeDetectionStrategy, Component, OnInit }    from '@angular/core'
import { CoinGeckoService }                              from './services/coin-gecko.service'
import { filter, map, merge }                            from 'rxjs'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'crypto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  // TODO create an interface
  cryptoCurrencies
  form: FormGroup

  constructor(
    private cgs: CoinGeckoService,
    private fb: FormBuilder,
  ) {
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray
  }

  get itemsControls(): FormGroup[] {
    return this.items.controls as FormGroup[]
  }

  get sum(): number {
    return this.itemsControls.reduce((acc, fg) => {
      return acc + fg.value.sum
    }, 0)
  }

  ngOnInit(): void {
    // TODO refactor to a new function
    this.cgs.getListOfCryptoCurrencies().pipe(map(res => res.data)).subscribe(res => {
      this.cryptoCurrencies = res
    })

    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      items: this.fb.array([]),
    })

    this.addItem()
  }

  addItem(): void {
    const formItem = this.fb.group({
      cryptoCurrency: [null, Validators.required],
      quantity: [null, Validators.required],
      sum: [null],
    })

    this.items.push(formItem)

    // TODO: move to... when update???
    merge(
      ...this.itemsControls.map((fg: FormGroup) => fg.valueChanges.pipe(
        filter(({ cryptoCurrency, quantity }) => cryptoCurrency && quantity),
        map(() => fg),
      )),
    )
      // TODO: DestroyService
      .pipe()
      .subscribe((fg: FormGroup) => {
        const { cryptoCurrency, quantity } = fg.value
        fg.get('sum').patchValue(cryptoCurrency * quantity, { emitEvent: false })
      })
  }

  removeItem(index: number) {
    this.items.removeAt(index)
  }
}
