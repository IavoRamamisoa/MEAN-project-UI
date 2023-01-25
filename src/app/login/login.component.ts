import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from "jquery";
import { filter, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor( public location: Location, private router: Router) {}

  signin: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required ]),
    prenoms: new FormControl('', [Validators.required ]),
    dateNaissance: new FormControl('', [Validators.required ]),
    // adresse: new FormControl('', [Validators.required ]),
    tel: new FormControl('', [Validators.required ]),
    email: new FormControl('', [Validators.email, Validators.required ]),
    // status: new FormControl('', [Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(8) ]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(8) ]),
  });

  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(8) ]),
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }
  inscription(){
    console.log(this.signin.value);
    this.router.navigate(['/dashboard']);
  }
}
