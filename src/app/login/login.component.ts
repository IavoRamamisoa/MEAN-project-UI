import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from "jquery";
import { filter, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor( public location: Location, private router: Router, public service: LoginService) {}

  signin: FormGroup = new FormGroup({
    nom: new FormControl('RAMAMISOA', [Validators.required ]),
    prenoms: new FormControl('Iavo', [Validators.required ]),
    dateNaissance: new FormControl('', [Validators.required ]),
    adresse: new FormControl('lot adress', [Validators.required ]),
    telephone: new FormControl('033 29 143 38', [Validators.required ]),
    email: new FormControl('test2@tst.com', [Validators.email, Validators.required ]),
    status: new FormControl('Admin', [Validators.required ]),
    password: new FormControl('qqqq', [Validators.required, Validators.min(8) ]),
    confirmPassword: new FormControl('qqqq', [Validators.required, Validators.min(8) ]),
  });

  login: FormGroup = new FormGroup({
    email: new FormControl('ali@gmail.com', [Validators.email, Validators.required ]),
    password: new FormControl('azeaze', [Validators.required, Validators.min(8) ]),
  });
  hide = true;

  async inscription(){
    if(this.signin.get('password').toString() === this.signin.get('confirmPassword').toString()){
        this.service.inscription(this.signin.value);
        this.router.navigate(['/dashboard']);
    }else{
        console.log('Mot de passe reconfirmer');
    }
    
  }

  async connexion(){
    this.service.connection(this.signin.value);
    this.router.navigate(['/dashboard']);
  }
}
