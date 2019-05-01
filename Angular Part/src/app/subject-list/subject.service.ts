import { Subjects } from './subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseurl='http://localhost:8080/Subjects/'
  constructor(private http: HttpClient) { }

  load(){
    return this.http.get<Subjects[]>(this.baseurl + 'list');
  }
  addstd(sub:Subjects){
    return this.http.post<Subjects>((this.baseurl + 'add'),sub);
  }

  updatestd(sub:Subjects){
    return this.http.put<Subjects>((this.baseurl + 'edit/'+sub._id),sub);
  }

  delete(id:number){
    return this.http.delete((this.baseurl + 'delete/'+id));

  }
}
