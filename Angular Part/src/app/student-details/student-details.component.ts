import { Student } from './../student-list/student';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student-list/student.service';
import { StudentSubject } from '../student-grades/student-subject';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  students:Student[];
  selected = false;
  studentsGrades:StudentSubject[]
  studentDet:Student;
  stdId :number;
  private baseurl='http://localhost:8080/StudentSubs/';
  constructor(private std:StudentService,private http:HttpClient) { }
  getstudentlist(){
    this.std.load().subscribe(
      (a)=>this.students=a
    )
  }

 getstdGradeList(){
   console.log(this.stdId)
    this.http.get<StudentSubject[]>((this.baseurl + 'studentSubjects/' + this.stdId)).subscribe(
      (a)=>{
        console.log(a)
        this.studentsGrades=a;
      }
    )
 }

 getstudentDet(){
  this.http.get<Student>('http://localhost:8080/Students/details/'+ this.stdId).subscribe(
    (a)=>{
      this.studentDet=a;
      this.selected=true
      console.log("Helloo"+a);
    }
  )
}
  ngOnInit() {
    this.getstudentlist()
  }

}
