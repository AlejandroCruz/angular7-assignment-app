import { Component, Input, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() _passedAssignment: Assignment;

  constructor(private injectAssignmentService: AssignmentsService) { }

  ngOnInit() {
  }

  _onAssignmentSubmitted(){
    this._passedAssignment.submitted = true;
    this.injectAssignmentService
      .updateAssignment(this._passedAssignment)
      .subscribe(lambdaLog => console.log(lambdaLog));
  }

}
