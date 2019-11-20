import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminboardComponent } from './admin-dashboard/components/adminboard/adminboard.component';
import { AddUserComponent } from './admin-dashboard/components/add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/pages/admin-dashboard/admin-dashboard.component';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { AddButtonComponent } from './admin-dashboard/components/add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminboardComponent,
    AddUserComponent,
    AdminDashboardComponent,
    AddButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressButtonsModule
    
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
