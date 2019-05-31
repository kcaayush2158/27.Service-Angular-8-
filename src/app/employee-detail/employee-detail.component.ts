import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: '<hr><h2>Employee List</h2><br><ul *ngFor="let employee of Employees"><li>{{employee.id}}  {{employee.name}}  {{employee.Age}}</ul>',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public Employees =[
    {"id":1,"name":"John Doe","Age":23},
    {"id":2,"name":"Sean Murphy","Age":33},
    {"id":3,"name":"Steve Morrison","Age":14},
    {"id":4,"name":"Elena","Age":28},
    {"id":5,"name":"Andrew ","Age": 55},
  ]
  constructor() { }

  ngOnInit() {
  }

}
