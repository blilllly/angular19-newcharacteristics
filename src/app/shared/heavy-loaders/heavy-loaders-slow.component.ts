import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  template: `
    <section class="w-full h-[600px]" [class]="cssClass()">
      Heavy Loader Slow
    </section>
  `,
})
export class HeavyLoadersSlowComponent {
  cssClass = input.required<string>();

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('cargado');
  }
}
