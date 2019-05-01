import { Component, OnInit } from '@angular/core';
import { Subjects } from './subject';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects:Subjects[]=[];
  nstd:Subjects =new Subjects(null,"");
  clicked = false;
  msg:string
  constructor( private subSer:SubjectService) { 
  }
  getsubjectlist(){
    this.subSer.load().subscribe(
      (a)=>this.subjects=a
    )
    this.clicked =true
  }
  
add() {
  if(this.nstd._id==0 || this.nstd._id==null || this.nstd.Name=="")
    this.msg="Please Enter a A valid Data"
  else{
    this.subSer.addstd(new Subjects(this.nstd._id,this.nstd.Name)).subscribe(
      a=>{
        this.getsubjectlist()
        this.subjects.push(a)
        this.msg="Subject Added Successfully"
      }
    )
  }  
}
//to show data that i want to UPDATE
edit(id,name){
  this.nstd._id = id;
  this.nstd.Name = name;
}

update(){
  this.subSer.updatestd(new Subjects(this.nstd._id,this.nstd.Name)).subscribe(
    a=>this.subjects.forEach((std)=>{
      if(std._id==this.nstd._id){
        std.Name=this.nstd.Name;
        this.msg="Subject Updated Successfully"
      }
    })
  ) 
}


delete(id){
  this.subSer.delete(id).subscribe(
    a=>{
      this.subjects=this.subjects.filter((std)=>{
        return id !=std._id;
      })
      this.msg="Subject Deleted Successfully"
    }
  )
    
}

  ngOnInit() {
  }

}
