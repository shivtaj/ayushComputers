import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {


  @Output()
  onUserSearchLoaded: EventEmitter<any> = new EventEmitter<any>();

  searchButtonOpts: MatProgressButtonOptions = {  active: false,
    text: 'Search User',
    spinnerSize: 19,
    raised: false,
    stroked: true,
    flat: false,
    fab: false,};

    addButtonOpts: MatProgressButtonOptions = {  active: false,
      text: 'New User',
      spinnerSize: 19,
      raised: false,
      stroked: true,
      flat: false,
      fab: false,};

  constructor() { }

  ngOnInit() {
  }
  OnSearchButtonClicked(){
    console.log('search button is clicked');
  }

  OnAddButtonClicked(){
    console.log('add button is clicked');
  }


}
