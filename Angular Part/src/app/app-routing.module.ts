import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { StudentsSubjectsComponent } from './students-subjects/students-subjects.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { ErrorComponent } from './error/error.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:"addGrades",component:StudentGradesComponent},
  {path:"assign",component:StudentsSubjectsComponent},
  {path:"subjects",component:SubjectListComponent},
  {path:"students",component:StudentListComponent},
  {path:"studentDetails",component:StudentDetailsComponent},

  {path:"",redirectTo:"students",pathMatch:"full"},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
