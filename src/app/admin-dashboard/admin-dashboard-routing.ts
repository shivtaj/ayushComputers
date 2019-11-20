import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddButtonComponent} from './components/add-button/add-button.component';
import {AddUserComponent } from './components/add-user/add-user.component';
import {AdminboardComponent} from './components/adminboard/adminboard.component';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
    { path: '',component: AdminDashboardComponent },
    { path: 'createUser', component: AdminboardComponent },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminDashboardRouting { }

export const routedComponents = [AddButtonComponent,AddUserComponent, AdminboardComponent];
