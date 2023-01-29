import { RouterModule, Routes } from '@angular/router';

import { VoitureComponent } from 'app/voiture/voiture.component';
import { NgModule } from '@angular/core';

import { AuthGuard } from 'app/auth.guard';
import { VoitureDetailsComponent } from './voiture-details/voiture-details.component';
import { ReparationComponent } from 'app/reparation/reparation-details.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';


export const routes: Routes = [
    {
        path: 'voiture',
        component: VoitureComponent,
       children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo:'list',
        },
        {
            path: 'list',
            canActivate:[AuthGuard],
            component: VoitureListComponent,
           
        },
        {
            path:'details',
            canActivate:[AuthGuard],
            component: VoitureDetailsComponent,
        }
       ]
    },
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VoitureRoutingModule{}
