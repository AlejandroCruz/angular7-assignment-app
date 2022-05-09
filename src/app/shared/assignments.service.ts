import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

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

  constructor() { }

  getAssignments(): Observable<Assignment[]> {
    return of(this._assignments);
  }

  addAssignments(inAssignment: Assignment): Observable<string> {
    this._assignments.push(inAssignment);

    return of('assignments.service.addAssignments: Assignment added!');
  }

  updateAssignment(inAssignment: Assignment): Observable<string> {
    this._assignments.forEach((assignment, i) => {
      if(assignment === inAssignment) {
        this._assignments[i] = assignment
        console.log('Made it!');
      }
    });
    return of('assignments.service.updateAssignment: Observable<string>-->Assignment updated!');
  }
}
