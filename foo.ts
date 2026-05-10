import { Component, Input } from '@angular/core';

@Component({...})
export class CounterComponent {
  @Input()
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
