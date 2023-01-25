import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

 const urlAPI= environment.urlAPI;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  inscription(){
    console.log('inscription ok');
    
  }
}
