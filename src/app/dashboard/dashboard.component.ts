import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
   nbrVoiture: any= 6;
   nbrReparation: any= 7;
   coutTotale: any= 70000;

   statReparationJour: any= 1500 ;
   statReparationMois: any= 25000 ;

    benefice: any= 150000;
    reparationMoyenne: any= 21;

  constructor(private service:DashboardService) {
   }
  async ngOnInit(): Promise<void> {
    this.nbrVoiture= await this.service.getNbrVoiture().toPromise();
    console.log('nbr= ',this.nbrVoiture);
  
   
  }

}
