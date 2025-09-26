import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  @Input() items: string[] = [];
  
  get helloMessage() {
    console.error('helloMessage getter called');
    return 'hello';
  }

  clicker() {
    console.error('clicked');
  }
}
