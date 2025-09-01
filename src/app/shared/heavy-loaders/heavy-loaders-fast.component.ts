import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [],
  template: `
    <section class="w-full" [class]="cssClass()">
      <ng-content />
    </section>
  `,
})
export class HeavyLoadersFastComponent {
  cssClass = input.required<string>();

  constructor() {
    console.log('Heavy Loader Fast created');
  }
}
