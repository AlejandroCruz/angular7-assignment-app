import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AssignmentsComponent } from './assignments/assignments.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepicker, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatListModule, MatNativeDateModule } from '@angular/material';
import { SubmittedDirective } from './shared/submitted.directive';
import { UnsubmittedDirective } from './shared/unsubmitted.directive';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    SubmittedDirective,
    UnsubmittedDirective,
    AssignmentDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
