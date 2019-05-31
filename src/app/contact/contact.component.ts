import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<hr><h2>Employee List</h2><br><ul *ngFor="let employee of Employees"><li> {{employee.name}}</ul>',
  styles: []
})


export class ContactComponent implements OnInit {

  public Employees =[
    {"id":1,"name":"John Doe","Age":23},
    {"id":2,"name":"Sean Murphy","Age":33},
    {"id":3,"name":"Steve Morrison","Age":14},
    {"id":4,"name":"Elena","Age":28},
    {"id":5,"name":"Andrew ","Age": 55},
  ]
    constructor(){

    }
    ngOnInit(){

    }
}
