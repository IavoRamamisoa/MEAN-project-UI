import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { VoitureService } from './voiture.service';

const urlAPI= environment.urlAPI;
@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent  {
 
  constructor() {
   }
}
