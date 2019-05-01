import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { StudentsSubjectsComponent } from './students-subjects/students-subjects.component';
import { FormsModule } from '@angular/forms';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { ErrorComponent } from './error/error.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    SubjectListComponent,
    StudentsSubjectsComponent,
    StudentGradesComponent,
    ErrorComponent,
    StudentDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    MatDividerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
