import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private injectAssignmentsService: AssignmentsService,
              private router: Router) { }

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
    this.router.navigate(['/assignment/' + assignment.id]);
  }
  onAddButtonClick() {
    this._selectedAssignment = null;
  }
}
