import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  _passedAssignment: Assignment;

  constructor(private injectAssignmentService: AssignmentsService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.getAssignment();
  }

  getAssignment() {
    const id = +this.route.snapshot.params.id;
    this.injectAssignmentService
      .getAssignment(id)
      .subscribe(lambdaAssignment => this._passedAssignment = lambdaAssignment);
  }

  onAssignmentSubmitted(){
    this._passedAssignment.submitted = true;
    this.injectAssignmentService
      .updateAssignment(this._passedAssignment)
      .subscribe(lambdaLog => console.log(lambdaLog)); // Prints string from 'assignments.service.ts'
  }

  onDelete() {
    this.injectAssignmentService
      .deleteAssignment(this._passedAssignment)
      .subscribe(lambdaLog => this.router.navigate(['/home']));
  }

  onClickEdit() {
    this.router.navigate(
      ['/assignment', this._passedAssignment.id, 'edit'],
      {queryParams:
        {name: this._passedAssignment.name},
        fragment: 'editing'}
      );
  }

  isAdmin(): boolean {
    return this.authService.loggedIn;
  }
}
