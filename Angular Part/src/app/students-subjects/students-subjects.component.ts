
import { SubjectService } from './../subject-list/subject.service';
import { Subjects } from './../subject-list/subject';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-list/student.service';
import { Student } from '../student-list/student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students-subjects',
  templateUrl: './students-subjects.component.html',
  styleUrls: ['./students-subjects.component.css']
})
export class StudentsSubjectsComponent implements OnInit {
  subjects:Subjects[]
  students:Student[]
  msg:string;
  private baseurl='http://localhost:8080/StudentSubs/';
  constructor(private subSer:SubjectService,
     private stdSer:StudentService,
     private http:HttpClient) { }
  subjectList(){
    this.subSer.load().subscribe(
      (a)=>this.subjects=a
    )
  }
  studentList(){
    this.stdSer.load().subscribe(
      (a)=>this.students=a
    )
  }

  assign(form){
    let subs = form.controls['subList'].value;
    let stds = form.controls['stdList'].value;
    if(subs=="" || stds == "")
      this.msg="Please Select Students and Subjects";
    else{
      let data = {stdList:stds,subList:subs}
      this.http.post((this.baseurl + 'assign'),data).subscribe(
        a=>{
          console.log('Done')
        }
      )
      this.msg="Students Assigned Successfuly";
    }  
  }

  ngOnInit() {
    this.subjectList()
    this.studentList()
  }

}
