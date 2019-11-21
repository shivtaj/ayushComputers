import { Component, OnInit } from '@angular/core';
import {AdminboardComponent} from '../../components/adminboard/adminboard.component';
import{AddButtonComponent} from '../../components/add-button/add-button.component';
import { MatProgressButtonOptions } from 'mat-progress-buttons';


@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  openform: boolean;


  constructor() { }

  ngOnInit() {
  }

  onClickOpenForm(){
    this.openform=true;  
    }

    // onUserSearchChanges(name)
    // {
    //    console.log('search changes')
    //    }

}
