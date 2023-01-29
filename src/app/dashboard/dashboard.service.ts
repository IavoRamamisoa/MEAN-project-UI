import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, tap } from 'rxjs';


 const urlAPI= environment.urlAPI;
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json' });
  constructor(
    private http: HttpClient
  ) { }

  getNbrVoiture(){
    console.log('tonga ato ve lo?');
    return this.http.get(`${urlAPI}/voiture/count`,{ headers: this.headers});
  }

  getNbrReparation(){
    console.log('tonga ato ve lo?');
    return this.http.get(`${urlAPI}/voiture/count`,{ headers: this.headers});
  }

  getCoutTotal(){
    console.log('tonga ato ve lo?');
    console.log(`${urlAPI}/reparation/count`);
    return this.http.get(`${urlAPI}/cout/test`,{ headers: this.headers});
  }

  getStatReparationJour(){
    console.log('tonga ato ve lo?');
    return this.http.get(`${urlAPI}/stat/jour`,{ headers: this.headers});
  }

  getStatReparationMois(){
    console.log('tonga ato ve lo?');
    return this.http.get(`${urlAPI}/stat/mois`,{ headers: this.headers});
  }

  getStatBenefice(){
    console.log('tonga ato ve lo?');
    return this.http.get(`${urlAPI}/stat/benefice`,{ headers: this.headers});
  }

  getStatReparationMoyenne(){
    console.log('tonga ato ve lo?');
    return this.http.get(`${urlAPI}/stat/reparation`,{ headers: this.headers});
  }
}
