import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

const urlAPI= environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class VoitureDetailsService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json' });
    
  constructor(private http: HttpClient) { }

 

  getlistUser(){
    return this.http.get(`${urlAPI}/user`,{ headers: this.headers})
    .subscribe(
        (res: any) =>{
            console.log(res);
        },
        err => {
            console.log(err.message);
        }
    );
  }

  getVoitureById(idVoiture: string){
    console.log(idVoiture);
    return  this.http.get(`${urlAPI}/voiture/${idVoiture}`,{ headers: this.headers})
  }
}
