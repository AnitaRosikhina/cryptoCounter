import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@crypto/api-interfaces';

@Component({
  selector: 'crypto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/getData')
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.hello$.subscribe()
  }
}
