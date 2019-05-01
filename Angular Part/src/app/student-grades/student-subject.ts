import { Student } from '../student-list/student';
import { Subjects } from '../subject-list/subject';

export class StudentSubject {
    constructor(public StudentId:Student,public SubjectId:Subjects,public grade:number){}
}
