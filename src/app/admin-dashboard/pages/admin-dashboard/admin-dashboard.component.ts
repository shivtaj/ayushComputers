import { Component, OnInit } from '@angular/core';
import {AdminboardComponent} from '../../components/adminboard/adminboard.component';
import{AddButtonComponent} from '../../components/add-button/add-button.component';


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

}
