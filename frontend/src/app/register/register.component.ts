import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdata: any;


  addNewUser(data:NgForm){
    console.log(data);
    this.userdata=data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
