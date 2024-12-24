import { Component, Input } from '@angular/core';
import { Student } from '../student.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-student-details',
  imports: [NgIf],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})

export class StudentDetailsComponent {

  @Input()
  student: Student | undefined;
}
