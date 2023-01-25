import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';

import { ReparationComponent } from 'app/reparation/reparation.component';
import { VoitureComponent } from 'app/voiture/voiture.component';
import { LoginComponent } from './login.component';

export const LoginRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'login',      component: LoginComponent },
    {
        path: 'dashboard',
        component: AdminLayoutComponent,
        children: [{
        path: '',
        loadChildren: () => import('./../layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
        }]
    }
];
