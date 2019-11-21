import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// export interface PeriodicElement {
//   studentName: string;
//   position: number;
//   courseJoin: number;
//   joiningDate: string;
//   endingDate: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, studentName: 'Hydrogen', courseJoin: 1.0079, joiningDate: 'H',endingDate: 'H'},
//   {position: 2, studentName: 'Helium', courseJoin: 4.0026, joiningDate: 'He',endingDate: 'H'},
//   {position: 3, studentName: 'Lithium', courseJoin: 6.941, joiningDate: 'Li',endingDate: 'H'},
//   {position: 4, studentName: 'Beryllium', courseJoin: 9.0122, joiningDate: 'Be',endingDate: 'H'},
//   {position: 5, studentName: 'Boron', courseJoin: 10.811, joiningDate: 'B',endingDate: 'H'},
//   {position: 6, studentName: 'Carbon', courseJoin: 12.0107, joiningDate: 'C',endingDate: 'H'},
//   {position: 7, studentName: 'Nitrogen', courseJoin: 14.0067, joiningDate: 'N',endingDate: 'H'},
//   {position: 8, studentName: 'Oxygen', courseJoin: 15.9994, joiningDate: 'O',endingDate: 'H'},
//   {position: 9, studentName: 'Fluorine', courseJoin: 18.9984, joiningDate: 'F',endingDate: 'H'},
//   {position: 10, studentName: 'Neon', courseJoin: 20.1797, joiningDate: 'Ne',endingDate: 'H'},
// ];


@Component({
  selector: 'adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  displayedColumns: string[] = ['studentName', 'course', 'joinDate','endDate', 'Actions'];
  // dataSource = ELEMENT_DATA;

  name:string="";
  course:string="";
  joinDate:string="";
  endDate:string="";



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
  dialogRef: any;




  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
  students = [{name: this.name, course: this.course, joinDate:this.joinDate, endDate:this.endDate}];

  OnAddButtonClicked(templateRef){
    let dialogRef = this.dialog.open(templateRef, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });

  }

  onNoClick(): void {
   if(this.dialogRef){
    this.dialogRef.close();
   }
    // this.dialogRef.close();
  }
}
