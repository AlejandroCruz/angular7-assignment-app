import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component'
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentsService } from './shared/assignments.service';
import { AuthGuard } from './shared/auth.guard';
import { EditAssignmentComponent } from './assignments/assignment-detail/edit-assignment/edit-assignment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatSlideToggleModule, MatSnackBarModule,
         MatFormFieldModule, MatNativeDateModule, MatTabsModule,
         MatDatepickerModule, MatListModule, MatStepperModule,
         MatCheckboxModule, MatCardModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { UnsubmittedDirective } from './shared/unsubmitted.directive';

const routes: Routes = [
  {path: '', component: AssignmentsComponent},
  {path: 'home', component: AssignmentsComponent},
  {path: 'add', component: AddAssignmentComponent},
  {path: 'assignment/:id', component: AssignmentDetailComponent},
  {
    path: 'assignment/:id/edit',
    component: EditAssignmentComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    AddAssignmentComponent,
    AppComponent,
    AssignmentDetailComponent,
    AssignmentsComponent,
    EditAssignmentComponent,
    SubmittedDirective,
    UnsubmittedDirective,
    SnackbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    ScrollingModule
  ],
  entryComponents: [SnackbarComponent],
  providers: [
    AssignmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
