import { Component, OnInit } from '@angular/core';
import { Subjects } from '../subject-list/subject';
import { StudentSubject } from './student-subject';
import { SubjectService } from '../subject-list/subject.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css']
})
export class StudentGradesComponent implements OnInit {
  subjects:Subjects[];
  selected = false;
  studentsGrades:StudentSubject[]
  subId :number;
  msg:string;
  constructor(private std:SubjectService,private http:HttpClient) { 
  }
  private baseurl='http://localhost:8080/StudentSubs/';

  getsubjectlist(){
    this.std.load().subscribe(
      (a)=>this.subjects=a
    )
  }

 getstdGradeList(){
   console.log(this.subId)
    this.http.get<StudentSubject[]>((this.baseurl + 'subjectStudents/' + this.subId)).subscribe(
      (a)=>{
        console.log(a)
        this.studentsGrades=a;
        this.selected=true
      }
    )
 }
 addGrade(std_id,grade){
  this.http.put((this.baseurl + 'grade/' + std_id + '/' + this.subId),{grade:grade}).subscribe(
    a=>this.studentsGrades.forEach((std)=>{
      if(std.StudentId._id==std_id && std.SubjectId._id){
        std.grade=grade;
        this.msg="Grade Updated Successfully"
      }
    })
  )
}

  ngOnInit() {
    this.getsubjectlist();
  }

}
