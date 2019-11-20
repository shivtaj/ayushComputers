import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRouting, routedComponents } from './admin-dashboard-routing'
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { MatTableModule, MatPaginatorModule, MatTooltipModule,  MatSortModule } from "@angular/material";

@NgModule({
    imports: [
        CommonModule, AdminDashboardRouting,
        MatButtonModule, MatInputModule, MatCardModule,
        MatTableModule, MatPaginatorModule, MatTooltipModule,  MatSortModule
    ],
    declarations: routedComponents
})
export class AdminDashboardModule {
}
