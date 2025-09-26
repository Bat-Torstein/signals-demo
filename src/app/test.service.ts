import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  mySubject = new Subject<string[]>();
  myOservable: Observable<string[]>;

  constructor() {
    this.myOservable = this.mySubject.asObservable();
  }

  start() {
    setTimeout(() => {
      this.mySubject.next(['hello', 'hello']);
    }, 5000);
  }
}
