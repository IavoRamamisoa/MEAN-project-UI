import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { lastValueFrom } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
   nbrVoiture: number= 0;
   nbrReparation: any= 0;
   coutTotale: any= 0;

   statReparationJour: any= 1500 ;
   statReparationMois: any= 25000 ;

    benefice: any= 150000;
    reparationMoyenne: any= 21;

  constructor(private service:DashboardService) {
   }
  async ngOnInit() {
    this.nbrVoiture= await lastValueFrom(this.service.getNbrVoiture());
    this.nbrReparation= await lastValueFrom(this.service.getNbrReparation());
    this.coutTotale = await lastValueFrom(this.service.getCoutTotal());
  }

}
