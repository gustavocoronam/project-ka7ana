import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [DashboardComponent, UsersComponent, PagesComponent],
  imports: [CommonModule, ComponentsModule, RouterModule, LayoutModule],
  exports: [DashboardComponent, UsersComponent, PagesComponent],
})
export class PagesModule {}
