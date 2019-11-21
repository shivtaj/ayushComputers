import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/pages/admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  {path:'admin', component:AdminDashboardComponent},
  { path: 'admin/user', loadChildren: "./modules/admin/user/user.module#UserModule" },
  // { path: 'admin/user', loadChildren: "./adminDashboard/adminDashboard.module#AdminDashboardModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
