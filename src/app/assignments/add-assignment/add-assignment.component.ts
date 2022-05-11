import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
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

  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit() {
  }
  onSubmit() {
    const assignment = new Assignment();
    assignment.name = this._name;
    assignment.dueDate = this._dueDate;
    assignment.submitted = false;

    // this.child_NewAssignmentEvent.emit(assignment);
    this.assignmentService.addAssignments(assignment)
  }
}
