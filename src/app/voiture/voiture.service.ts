import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dateFormat } from 'app/utils/utils';
import { environment } from 'environments/environment';
import { from, map, mergeMap, Observable, tap } from 'rxjs';


const urlAPI= environment.urlAPI; 
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  token= localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json' ,
    'Authorization':`Bearer ${this.token}`,
  });
  constructor(private http: HttpClient) { }

  getListUser(){
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

  getListVoiture(){
    return this.http.get(`${urlAPI}/voiture`,{ headers: this.headers}) .pipe(
      map((result: any[]) => ({
        data: result.map((item) =>({
          idProprietaire: item.idProprietaire,
          proprietaire: 'get by ID',
          matricule: item.matricule,
          description: item.description,
          dateDepot: dateFormat(item.dateDepot)
        }))
      }))
    )
  }

  insertionVoiture(voiture: any){


    
    
    return this.http.post(`${urlAPI}/voiture`,voiture,{ headers: this.headers})
        .subscribe(
            (res: any) =>{
              console.log(res);
              return 'ok inaertion';
            },
            err => {
                console.log(err.message);
            }
        );
  }


}
