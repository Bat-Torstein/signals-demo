import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent implements OnInit, OnDestroy {
  @Input() items: string[] = [];

  counter = 0;
  subscription: Subscription | undefined;
  
  get helloMessage() {
    console.error('helloMessage getter called');
    return 'hello';
  }

  clicker() {
    console.error('clicked');
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(() => this.counter++)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
