import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  _assignments: Assignment[] = [
    {
      name: 'Math',
      dueDate: new Date('2019-01-01'),
      submitted: true
    },
    {
      name: 'Science',
      dueDate: new Date('2019-01-01'),
      submitted: false
    }
  ]

  constructor(private loggingService: LoggingService) {}

  getAssignments(): Observable<Assignment[]> {
    return of(this._assignments);
  }

  addAssignments(inAssignment: Assignment): Observable<string> {
    this._assignments.push(inAssignment);
    this.loggingService.log(inAssignment.name, 'addAssignments.');

    return of('assignments.service.addAssignments: Assignment added!');
  }

  updateAssignment(inAssignment: Assignment): Observable<string> {
    this._assignments.forEach((assignment, i) => {
      if(assignment === inAssignment) {
        this._assignments[i] = assignment;
      }
    });
    this.loggingService.log(inAssignment.name, 'updateAssignment.');

    return of('assignments.service.updateAssignment: Assignment updated!');
  }

  deleteAssignment(inAssignment: Assignment): Observable<string> {
    this._assignments.forEach((assignment, i) => {
      if (assignment === inAssignment) {
        this._assignments.splice(i, 1);
      }
    });
    this.loggingService.log(inAssignment.name, 'deleteAssignment.');

    return of('AssignmentsService.deleteAssignment: assignment deleted');
  }
}
