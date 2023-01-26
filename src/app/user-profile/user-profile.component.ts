import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user : any  = JSON.parse(localStorage.getItem('user') as string) as any ;
  signin: FormGroup = new FormGroup({
    nom: new FormControl(this.user.nom, [Validators.required ]),
    prenoms: new FormControl(this.user.prenoms, [Validators.required ]),
    dateNaissance: new FormControl(this.user.dateNaissance, [Validators.required ]),
    adresse: new FormControl(this.user.adresse, [Validators.required ]),
    telephone: new FormControl(this.user.telephone, [Validators.required ]),
    email: new FormControl(this.user.email, [Validators.email, Validators.required ]),
    status: new FormControl(this.user.role, [Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(8) ]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(8) ]),
  });
  hide = true;
  constructor(public service: LoginService) { }

  ngOnInit() {
  }
  async updateProfile(){
    if(this.signin.get('password').toString() === this.signin.get('confirmPassword').toString()){
        // this.service.inscription(this.signin.value);
        // this.router.navigate(['/dashboard']);
    }else{
        console.log('Mot de passe reconfirmer');
    }
    
  }
}
