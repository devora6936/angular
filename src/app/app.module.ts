import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentListComponent } from "./student-list/student-list.component";

@NgModule({
declarations: [AppComponent, StudentDetailsComponent, StudentListComponent],
imports: [BrowserModule],
bootstrap: [AppComponent]
})

export class AppModule{

}