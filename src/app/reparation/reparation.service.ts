import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reparation } from 'app/models/Reparation';
import { Voiture } from 'app/models/Voiture';
import { dateFormat } from 'app/utils/utils';
import { environment } from 'environments/environment';
import { from, map, mergeMap, Observable, tap } from 'rxjs';


const urlAPI= environment.urlAPI; 
@Injectable({
  providedIn: 'root'
})
export class ReparationService {
  token= localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json' ,
    'Authorization':`Bearer ${this.token}`,
  });
  constructor(private http: HttpClient) { }


  getListReparation(){
    return this.http.get<Reparation[]>(`${urlAPI}/reparation`,{ headers: this.headers}).pipe(tap(console.log));
  }

}
