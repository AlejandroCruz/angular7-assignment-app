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
}
