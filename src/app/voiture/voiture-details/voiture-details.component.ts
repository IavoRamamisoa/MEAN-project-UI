import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.css']
})
export class VoitureDetailsComponent implements OnInit {
  user : any  = JSON.parse(localStorage.getItem('user') as string) as any ;
  dateTime= this.user.dateNaissance.toString().split('T');
  signin: FormGroup = new FormGroup({
    nom: new FormControl(this.user.nom, [Validators.required ]),
    prenoms: new FormControl(this.user.prenoms, [Validators.required ]),
    dateNaissance: new FormControl(this.dateTime[0], [Validators.required ]),
    adresse: new FormControl(this.user.adresse, [Validators.required ]),
    telephone: new FormControl(this.user.telephone, [Validators.required ]),
    email: new FormControl(this.user.email, [Validators.email, Validators.required ]),
    status: new FormControl(this.user.status, [Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(8) ]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(8) ]),
  });
  hide = true;
  constructor(public service: LoginService) { }

  ngOnInit() {
  
    
  }
  async updateProfile(){
    if(this.signin.get('password')){
      if(this.signin.get('password').toString() === this.signin.get('confirmPassword').toString()){
        // this.service.inscription(this.signin.value);
        // this.router.navigate(['/dashboard']);
      }else{
          console.log('Mot de passe reconfirmer');
      }
    }else{
      //update
    }
    
    
  }
}
