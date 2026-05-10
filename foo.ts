import { Component, Input } from '@angular/core';

@Component({...})
export class CounterComponent {
  @Input()
  maximum: number = 9000;

  @Input()
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
