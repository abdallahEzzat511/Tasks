import { Component } from '@angular/core';
import { ItemFormComponent } from './item-form/item-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemFormComponent],
  template: `<app-item-form></app-item-form>`
})
export class AppComponent {}
