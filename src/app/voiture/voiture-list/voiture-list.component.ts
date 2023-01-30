import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { VoitureService } from '../voiture.service';
import { dateFormat } from 'app/utils/utils';
import { Voiture } from 'app/models/Voiture';

const urlAPI= environment.urlAPI;
@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
  user : any  = JSON.parse(localStorage.getItem('user') as string) as any ;
  proprietaire= `${this.user.nom} ${this.user.prenoms} (${this.user.email})`
  listVoiture : Voiture[] = [];
  formVoiture:FormGroup;
  constructor(private service: VoitureService,private router: Router) {
   this.formVoiture = new FormGroup({
      idProprietaire: new FormControl({value: this.proprietaire, disabled: true}),
      matricule: new FormControl('4876TAV', [Validators.required ]),
      marque: new FormControl('CITROEN', [Validators.required ]),
      couleur: new FormControl('rouge', [Validators.required ]),
    });
   }
  
  
  async ngOnInit() {
    await this.fectchVoitureData()
  }

  async insertionVoiture(){
    const voiture= {
      idProprietaire: this.user.nom,
      matricule: this.formVoiture.get('matricule').value,
      description: {
        marque: this.formVoiture.get('marque').value,
        couleur: this.formVoiture.get('couleur').value,
      },
      dateDepot: new Date()
    }
    await this.service.insertionVoiture(voiture);
    await this.fectchVoitureData()
  }

  showDetails(idVoiture: string){
    this.router.navigate(['/voiture/details',idVoiture]);
  }

  async fectchVoitureData(){
    this.listVoiture=  await  lastValueFrom(this.service.getListVoiture());
  }
}
