import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ReparationComponent } from 'app/reparation/reparation.component';
import { VoitureComponent } from 'app/voiture/voiture.component';
import { compileNgModule } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { LoginComponent } from 'app/login/login.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { AuthGuard } from 'app/auth.guard';


export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path:'dashboard',
                canActivate:[AuthGuard],
                component: DashboardComponent,
            },
            {
                path:'user-profile',
                canActivate:[AuthGuard],
                component: UserProfileComponent,
            },
            {
                path:'voiture',
                canActivate:[AuthGuard],
                component: VoitureComponent,
            },
            {
                path:'reparation',
                canActivate:[AuthGuard],
                component: ReparationComponent,
            },
            {
                path:'notifications',
                canActivate:[AuthGuard],
                component: NotificationsComponent,
            },
            {
                path:'upgrade',
                canActivate:[AuthGuard],
                component: UpgradeComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule{}
