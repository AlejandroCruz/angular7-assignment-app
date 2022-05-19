import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  _assignments: Assignment[] = [
    {
      id: 1,
      name: 'Math',
      dueDate: new Date('2019-01-01'),
      submitted: true
    },
    {
      id: 2,
      name: 'Science',
      dueDate: new Date('2019-01-01'),
      submitted: false
    }
  ]

  url = 'http://localhost:8010/api/assignments';
  urlOne = 'http://localhost:8010/api/assignment';

  constructor(private loggingService: LoggingService,
              private http: HttpClient) {}

  getAssignments(): Observable<Assignment[]> {
    // return of(this._assignments);
    return this.http.get<Assignment[]>(this.url)
  }

  getAssignment(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(this.urlOne + '/' + id);
  }

  addAssignments(inAssignment: Assignment): Observable<any> {
    // this._assignments.push(inAssignment);
    // this.loggingService.log(inAssignment.name, 'addAssignments.');

    // return of('assignments.service.addAssignments: Assignment added!');
    return this.http.post<Assignment>(this.urlOne, inAssignment);
  }

  updateAssignment(inAssignment: Assignment): Observable<any> {
    return this.http.put<Assignment>(this.urlOne, inAssignment);
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
