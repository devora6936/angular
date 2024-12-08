import { Component } from '@angular/core';
import { StudentListComponent } from "./student-list/student-list.component";

@Component({
  template: `<h1>{{title}}</h1>
  <app-student-list></app-student-list>`,
  selector: "app-root",
  imports: [StudentListComponent],
})

export class AppComponent {
  title:string = "hello from title"
}
