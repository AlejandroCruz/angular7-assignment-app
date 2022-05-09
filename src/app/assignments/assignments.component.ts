import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model'

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  _title = 'My Assignment App';
  _btnEnabled = false;
  _name: string;
  _dueDate: Date;
  _selectedAssignment: Assignment;
  _formVisible = false;
  _assignments: Assignment[];

  constructor(private injectAssignmentsService: AssignmentsService) { }

  ngOnInit() {
    this.getAssignments();
  }
  getAssignments() {
    this
      .injectAssignmentsService
      .getAssignments()
      .subscribe(lambdaAssignments =>
        this._assignments = lambdaAssignments);
  }
  setSelected(assignment: Assignment) {
    this._selectedAssignment = assignment;
  }
  onAddButtonClick() {
    this._formVisible = true;
    this._selectedAssignment = null;
  }
  onNewAssignment(inEvent: Assignment) {
    this.injectAssignmentsService
      .addAssignments(inEvent)
      .subscribe(lambdaSuccess => console.log(lambdaSuccess));

    this._formVisible = false;
  }
}
