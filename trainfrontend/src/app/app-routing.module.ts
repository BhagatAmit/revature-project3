import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainComponent } from './pages/admin/add-train/add-train.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { ViewTrainsComponent } from './pages/admin/view-trains/view-trains.component';

import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';

import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { CustomerDashboardComponent } from './pages/customer/customer-dashboard/customer-dashboard.component';
import { CustomerWelcomeComponent } from './pages/customer/customer-welcome/customer-welcome.component';
import { WelcomePageComponent } from './pages/home/welcome-page.component';
import { CustomerLoginComponent } from './pages/login/customer-login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';




const routes: Routes = [
  {
    path: "",
    component: WelcomePageComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    component: CustomerLoginComponent,
    pathMatch: 'full'
  },
  {
    path: "register",
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'add-train',
        component: AddTrainComponent,
      },
      {
        path: 'trains',
        component: ViewTrainsComponent
      },
      {
        path: "view-category",
        component: ViewCategoryComponent,
      },
      {
        path: "add-category",
        component: AddCategoryComponent,
      }


    ]
  },
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard],
    children: [
      {
        path: '',
        component: CustomerWelcomeComponent,

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
