import {
  Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  template: `
    <h2>Student Details</h2>
    <p>ID: {{ student?.id }}</p>
    <p>Name: {{ student?.name }}</p>
    <p>Age: {{ student?.age }}</p>
    <p>Major: {{ student?.major }}</p>
    <button (click)="changeName()">Change Name</button>
  `,
})
export class StudentDetailsComponent implements OnInit, OnChanges, AfterViewInit {
  student: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('ngOnInit');
    const id = this.route.snapshot.paramMap.get('id');
    this.student = { id, name: 'Demo Student', age: 20, major: 'CS' };
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  changeName() {
    this.student.name = 'Changed Name';
  }
}
