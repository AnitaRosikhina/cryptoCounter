import { NgModule }                from '@angular/core'
import { BrowserModule }           from '@angular/platform-browser'
import { AppComponent }            from './app.component'
import { HttpClientModule }        from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule }      from '@angular/material/form-field'
import { MatSelectModule }         from '@angular/material/select'
import { CommonModule }            from '@angular/common'
import { CoinGeckoService }        from './services/coin-gecko.service'
import { MatInputModule }          from '@angular/material/input'
import { MatListModule }           from '@angular/material/list'
import { ReactiveFormsModule }     from '@angular/forms'

@NgModule({
  declarations: [AppComponent],
  imports: [
    // TODO refactor to arrays
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [CoinGeckoService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
