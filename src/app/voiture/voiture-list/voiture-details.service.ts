import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

const urlAPI= environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json' });
    
  constructor(private http: HttpClient) { }

  getUserbyEmail(email: string){
    return this.http.get(`${urlAPI}/user/${email}`,{ headers: this.headers})
    .subscribe(
        (res: any) =>{
            console.log(res);
        },
        err => {
            console.log(err.message);
        }
    );
  }

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

  updateProfile(user: any){
    return this.http.patch(`${urlAPI}/user`,user,{ headers: this.headers})
    .subscribe(
        (res: any) =>{
            console.log(res);
            // localStorage.setItem('user',JSON.stringify(res.result));
            // localStorage.setItem('token',res.token);
        },
        err => {
            console.log(err.message);
        }
    );
  }
}
