import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  createUserButtonOpts: MatProgressButtonOptions = {  active: false,
    text: 'Create User',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    flat: false,
    fab: false,};

  cancelButtonOpts : MatProgressButtonOptions = {  active: false,
    text: 'Cancel',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    flat: false,
    fab: false,};


  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreateUser(){
    console.log('user is created');
  }

  OnCancelUser(){
    console.log('created user is cancelled');
  }

}
