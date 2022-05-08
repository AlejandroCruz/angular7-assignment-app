import { Component, OnInit } from '@angular/core';
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

  _assignments: Assignment[] = [
    {
      name: 'One',
      dueDate: new Date('2019-01-01'),
      submitted: true
    },
    {
      name: 'Two',
      dueDate: new Date('2019-01-01'),
      submitted: false
    }
  ]

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this._btnEnabled = true;
    }, 2000)
  }
  onSubmit() {
    const assignment = new Assignment();
    assignment.name = this._name;
    assignment.dueDate = this._dueDate;

    this._assignments.push(assignment);
  }

  setSelected(assignment: Assignment) {
    this._selectedAssignment = assignment;
  }
}
