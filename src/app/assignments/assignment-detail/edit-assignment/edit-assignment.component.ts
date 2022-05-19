import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../../assignment.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment: Assignment;
  assignmentName: string;
  dueDate: Date;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private assignmentsService: AssignmentsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.getAssignment(id);
  }

  getAssignment(id: number) {
    this.assignmentsService
      .getAssignment(id)
      .subscribe(lambdaAssignment => this.assignment = lambdaAssignment);
  }

  onSaveAssignment(){
    if (this.assignmentName) {
      this.assignment.name = this.assignmentName;
    }
    if (this.dueDate) {
      this.assignment.dueDate = this.dueDate;
    }

    this.assignmentsService.updateAssignment(this.assignment)
      .subscribe(lambdaAssignment => this.router.navigate( ['/assignment/' + this.assignment.id] ));
  }
}
