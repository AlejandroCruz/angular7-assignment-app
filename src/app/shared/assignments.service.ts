import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  url = 'http://localhost:8010/api/assignments';
  urlOne = 'http://localhost:8010/api/assignment';

  constructor(private loggingService: LoggingService,
              private http: HttpClient) {}

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url)
  }

  getAssignment(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(this.urlOne + '/' + id)
      .pipe(
        tap(_ => console.log(`AssignmentsService.getAssignment Assignment returned id=${id}`)),
        catchError(this.handleError<Assignment>(`AssignmentsService.getAssignment id=${id}`))
      );
  }

  addAssignments(inAssignment: Assignment): Observable<any> {
    return this.http.post<Assignment>(
      this.urlOne,
      inAssignment,
      this.httpOptions);
  }

  updateAssignment(inAssignment: Assignment): Observable<any> {
    return this.http.put<Assignment>(this.urlOne, inAssignment);
  }

  deleteAssignment(inAssignment: Assignment): Observable<any> {
    const newUrl = this.urlOne + '/' + inAssignment._id;

    return this.http.delete(newUrl);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
