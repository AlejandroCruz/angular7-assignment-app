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

  selectedAssignment: Assignment;
  assignments: Assignment[];
  submitted: Assignment[];
  unsubmitted: Assignment[];

  constructor(private injectAssignmentsService: AssignmentsService,
              private router: Router) { }

  ngOnInit() {
    this.getAssignments();
    this.injectAssignmentsService.getSubmitted()
      .subscribe(submitted => this.submitted = submitted);
    this.injectAssignmentsService.getUnsubmitted()
      .subscribe(unsubmitted => this.unsubmitted = unsubmitted);
  }
  getAssignments() {
    this
      .injectAssignmentsService
      .getAssignments()
      .subscribe(lambdaAssignments =>
        this.assignments = lambdaAssignments);
  }
  setSelected(assignment: Assignment) {
    this.router.navigate(['/assignment/' + assignment.id]);
  }
  onAddButtonClick() {
    this.selectedAssignment = null;
  }
}
