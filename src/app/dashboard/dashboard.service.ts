import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, tap } from 'rxjs';


 const urlAPI= environment.urlAPI;
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  token= localStorage.getItem('token')
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization':`Bearer ${this.token}`, });
  constructor(
    private http: HttpClient
  ) { }

  getNbrVoiture(){
    return this.http.get(`${urlAPI}/voiture/count`,{ headers: this.headers}).pipe(tap(console.log));
  }

  getNbrReparation(){
    return this.http.get(`${urlAPI}/reparation/count`,{ headers: this.headers});
  }

  getCoutTotal(){
    console.log('DATA');
    
    return this.http.get(`${urlAPI}/cout/totalPaye`,{ headers: this.headers}).pipe(tap(console.log));
    
  }

  getStatReparationJour(){
    return this.http.get(`${urlAPI}/stat/jour`,{ headers: this.headers});
  }

  getStatReparationMois(){
    return this.http.get(`${urlAPI}/stat/mois`,{ headers: this.headers});
  }

  getStatBenefice(){
    return this.http.get(`${urlAPI}/stat/benefice`,{ headers: this.headers});
  }

  getStatReparationMoyenne(){
    return this.http.get(`${urlAPI}/stat/reparation`,{ headers: this.headers});
  }
}
