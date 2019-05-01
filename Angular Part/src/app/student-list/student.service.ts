import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseurl='http://localhost:8080/Students/'
    constructor(private http: HttpClient) { }
    load(){
      return this.http.get<Student[]>(this.baseurl + 'list');
    }
    addstd(std:Student){
      return this.http.post<Student>((this.baseurl + 'add'),std);
    }
  
    updatestd(std:Student){
      return this.http.put<Student>((this.baseurl + 'edit/'+std._id),std);
    }
  
    delete(id:number){
      return this.http.delete((this.baseurl + 'delete/'+id));

    }
  }    