import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'app/login/login.service';
import { first } from 'rxjs';
import { VoitureDetailsService } from './voiture-details.service';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.css']
})
export class VoitureDetailsComponent implements OnInit{
  user : any  = JSON.parse(localStorage.getItem('user') as string) as any ;
  dateTime= this.user.dateNaissance.toString().split('T');
  reparation: FormGroup ;
  hide = true;
  idVoiture: string= '';
  voiture: any= {
    description: {
      marque: "BMW",
      couleur: "Gris"
    },
    id: "63d17ed7f14074828ded63db",
    idProprietaire: "63d17c3ff14074828ded63d8",
    matricule: " 2675 TAN",
    dateDepot: "2022-09-23T00:00:00.000Z",
};

  constructor( private route: ActivatedRoute, private service: VoitureDetailsService) { 
    this.idVoiture= this.getIdVoiture();
    this.reparation= new FormGroup({
      idVoiture: new FormControl(this.idVoiture, [Validators.required ]),
      dateReception: new FormControl(this.dateTime[0], [Validators.required ]),
      description: new FormControl(this.user.adresse, [Validators.required ]),
      estimation: new FormControl(this.user.telephone, [Validators.required ]),
      avancement: new FormControl(this.user.email, [Validators.email, Validators.required ]),
      status: new FormControl(false, [Validators.required ]),
      dateDebut: new FormControl(this.dateTime[0], [Validators.required ]),
      dateFin: new FormControl(this.dateTime[0], [Validators.required ]),
      durreeExact: new FormControl('', [Validators.required]),
      piece: new FormControl('', [Validators.required]),
      prixPiece: new FormControl('', [Validators.required]),
      coutReparation: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.fetchData();
    console.log('voiture');
    
    console.log(this.voiture);
    
  }

  
  // async updateProfile(){
  //   if(this.signin.get('password')){
  //     if(this.signin.get('password').toString() === this.signin.get('confirmPassword').toString()){
  //       // this.service.inscription(this.signin.value);
  //       // this.router.navigate(['/dashboard']);
  //     }else{
  //         console.log('Mot de passe reconfirmer');
  //     }
  //   }else{
  //     //update
  //   }
    
    
  // }
  insertionReparation(){
    return 'inserer'
  }

  getIdVoiture(){
    return this.route.snapshot.params.idVoiture;
  }

  fetchData(){
    this.service.getVoitureById(this.idVoiture).pipe(first()).subscribe((data:any) => {
      console.log(data);
      this.voiture= data;
    })
  }
}
