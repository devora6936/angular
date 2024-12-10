import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {
  students: Student[] = [{name:"sara", age:15}, {name:"rivka", age:17}, {name:"rachel", age:19}];

  deleteStudent(student : Student){
    let indexToDelete = this.students.indexOf(student);
    this.students.splice(indexToDelete,1);
  }

  constructor() {}
}
