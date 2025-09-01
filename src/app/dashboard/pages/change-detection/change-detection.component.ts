import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  ChangeDetectionStrategy,
  computed,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  imports: [TitleComponent, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />

    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2025',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2025',
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsSignal.set({ name: 'React', releaseDate: '2024' });
      this.frameworkAsSignal.update((value) => ({ ...value, name: 'React' }));
      // this.frameworkAsProperty.name = 'React';

      console.log('hecho');
    }, 3000);
  }
}
