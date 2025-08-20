import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { StudentCardComponent } from '../student-card/student-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [NgFor, StudentCardComponent, RouterLink],
  template: `
    <h2>Students List</h2>
    <app-student-card *ngFor="let s of students" [student]="s">
      <button [routerLink]="['/students/details', s.id]">View Details</button>
      <button [routerLink]="['/students', s.id, 'courses']">View Courses</button>
    </app-student-card>
  `,
})
export class StudentsListComponent {
  students = [
    { id: 1, name: 'Abdallah', age: 20, major: 'CS' },
    { id: 2, name: 'Sara', age: 22, major: 'IT' },
  ];
}
