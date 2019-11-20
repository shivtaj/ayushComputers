import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  studentName: string;
  position: number;
  courseJoin: number;
  joiningDate: string;
  endingDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, studentName: 'Hydrogen', courseJoin: 1.0079, joiningDate: 'H',endingDate: 'H'},
  {position: 2, studentName: 'Helium', courseJoin: 4.0026, joiningDate: 'He',endingDate: 'H'},
  {position: 3, studentName: 'Lithium', courseJoin: 6.941, joiningDate: 'Li',endingDate: 'H'},
  {position: 4, studentName: 'Beryllium', courseJoin: 9.0122, joiningDate: 'Be',endingDate: 'H'},
  {position: 5, studentName: 'Boron', courseJoin: 10.811, joiningDate: 'B',endingDate: 'H'},
  {position: 6, studentName: 'Carbon', courseJoin: 12.0107, joiningDate: 'C',endingDate: 'H'},
  {position: 7, studentName: 'Nitrogen', courseJoin: 14.0067, joiningDate: 'N',endingDate: 'H'},
  {position: 8, studentName: 'Oxygen', courseJoin: 15.9994, joiningDate: 'O',endingDate: 'H'},
  {position: 9, studentName: 'Fluorine', courseJoin: 18.9984, joiningDate: 'F',endingDate: 'H'},
  {position: 10, studentName: 'Neon', courseJoin: 20.1797, joiningDate: 'Ne',endingDate: 'H'},
];

@Component({
  selector: 'adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'studentName', 'courseJoin', 'joiningDate', 'endingDate'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
