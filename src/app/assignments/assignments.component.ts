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

  // _assignments: Assignment[] = [
  //   {
  //     name: 'One',
  //     dueDate: new Date('2019-01-01'),
  //     submitted: true
  //   },
  //   {
  //     name: 'Two',
  //     dueDate: new Date('2019-01-01'),
  //     submitted: false
  //   }
  // ]

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit() {
    // this._assignments = this.assignmentsService.getAssignments();
    this.getAssignments();
  }
  getAssignments() {
    this
      .assignmentsService
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
    this._assignments.push(inEvent);
    this._formVisible = false;
  }
}
