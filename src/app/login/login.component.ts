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
    nom: new FormControl('qsdfsf', [Validators.required ]),
    prenoms: new FormControl('qsdfqdf', [Validators.required ]),
    dateNaissance: new FormControl('', [Validators.required ]),
    adresse: new FormControl('qsdfqsdf', [Validators.required ]),
    tel: new FormControl('qdqsfqsdf', [Validators.required ]),
    email: new FormControl('test2@tst.com', [Validators.email, Validators.required ]),
    status: new FormControl('qsdfqsdf', [Validators.required ]),
    password: new FormControl('qqqq', [Validators.required, Validators.min(8) ]),
    confirmPassword: new FormControl('qqqq', [Validators.required, Validators.min(8) ]),
  });

  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(8) ]),
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }
  async inscription(){
    console.log(this.signin.value);
    if(this.signin.get('password').toString() === this.signin.get('confirmPassword').toString()){
        this.service.inscription();
        this.router.navigate(['/dashboard']);
        // await this.router.navigateByUrl('/')
    }else{
        console.log('Mot de passe reconfirmer');
    }
    
  }
}
