import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  //  }, 

  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   canActivate: [AuthGuard],
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  //   }]
  // },
  {
    path: '',
    component: LoginComponent,
    children: [{
      path: '',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }],
   },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
