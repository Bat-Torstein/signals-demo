import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'signals-demo';

  items = ['one', 'two', 'three'];

  ngOnInit() {
    setTimeout(() => {
      this.items.push('four');
      this.items.push('five');
      this.items.push('six');
      this.items.push('seven');

    }, 5000);
  }
}
