import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[]=[];
  nstd:Student =new Student(null,"","");
  clicked = false;
  msg:string
  constructor( private stdSer:StudentService) { 
  }
  getstudentlist(){
    this.stdSer.load().subscribe(
      (a)=>this.students=a
    )
      this.clicked =true
  }
  
add() {
  if(this.nstd._id==0 || this.nstd._id==null || this.nstd.Name=="" || this.nstd.Email=="")
    this.msg="Please Enter a A valid Data"
  else{
    this.stdSer.addstd(new Student(this.nstd._id,this.nstd.Name,this.nstd.Email)).subscribe(
      a=>{
        this.getstudentlist()
        this.students.push(a)
        this.msg="Student Added Successfully"
      }
    )
  }
}
//to show data that i want to UPDATE
edit(id,name,email){
  this.nstd._id = id;
  this.nstd.Name = name;
  this.nstd.Email = email;
}

update(){
  this.stdSer.updatestd(new Student(this.nstd._id,this.nstd.Name,this.nstd.Email)).subscribe(
    a=>this.students.forEach((std)=>{
      if(std._id==this.nstd._id){
        std.Name=this.nstd.Name;
        std.Email=this.nstd.Email;
        this.msg="Student Updated Successfully"
      }
    })
  ) 
}


delete(id){
  this.stdSer.delete(id).subscribe(
    a=>{
      this.students=this.students.filter((std)=>{
        return id !=std._id;
      })
      this.msg="Student Deleted Successfully"
    }
  )
    
}
  ngOnInit() {
  }

}
