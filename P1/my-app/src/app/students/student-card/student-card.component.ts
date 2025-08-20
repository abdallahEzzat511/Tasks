import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  template: `
    <div style="border:1px solid #aaa; margin:10px; padding:10px;">
      <p><b>{{ student.name }}</b> ({{ student.age }}) - {{ student.major }}</p>
      <ng-content></ng-content>
    </div>
  `,
})
export class StudentCardComponent {
  @Input() student: any;
}
