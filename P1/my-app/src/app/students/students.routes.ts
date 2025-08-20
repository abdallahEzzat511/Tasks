import { Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

export const STUDENT_ROUTES: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: StudentsListComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
];
