import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  _name: string;
  _dueDate: Date;
  _btnEnabled = false;
  _assignments: Assignment[] = [];

  //@Output() child_NewAssignmentEvent = new EventEmitter<Assignment>();
  newAssignment: Assignment;

  constructor(private assignmentService: AssignmentsService,
              private router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  
  onSubmit() {
    const assignment = new Assignment();
    assignment.id = Math.floor(Math.random() * 1000);
    assignment.name = this._name;
    assignment.dueDate = this._dueDate;
    assignment.submitted = false;

    this.assignmentService
      .addAssignments(assignment)
      .subscribe(response => this.router.navigate( ['/home'] ));

      this.openSnackbar();
  }

  openSnackbar() {
    this.snackBar.openFromComponent(SnackbarComponent, { duration: 2000 })
  }
}
