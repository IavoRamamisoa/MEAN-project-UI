import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { VoitureService } from './voiture.service';

const urlAPI= environment.urlAPI;
@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  user : any  = JSON.parse(localStorage.getItem('user') as string) as any ;
  proprietaire= `${this.user.nom} ${this.user.prenoms} (${this.user.email})`
  listVoiture : any[] = [];
  formVoiture:FormGroup;
  constructor(private service: VoitureService) {
   this.formVoiture = new FormGroup({
      idProprietaire: new FormControl({value: this.proprietaire, disabled: true}),
      matricule: new FormControl('4876TAV', [Validators.required ]),
      marque: new FormControl('CITROEN', [Validators.required ]),
      couleur: new FormControl('rouge', [Validators.required ]),
    });
   }
  
  

  async ngOnInit() {
    const voituresData= await  this.service.getListVoiture().toPromise();
    this.listVoiture= voituresData.data;
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
    this.service.insertionVoiture(voiture);
  }

  

}
