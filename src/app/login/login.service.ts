import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs';

 const urlAPI= environment.urlAPI;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json' });
  constructor(
    private http: HttpClient
  ) { }

  inscription(user: any){
    return this.http.post(`${urlAPI}/user/signup`,user,{ headers: this.headers})
        .subscribe(
            (res: any) =>{
              console.log(res);
              localStorage.setItem('user',res.result);
              localStorage.setItem('token',res.token);
            },
            err => {
                console.log(err.message);
            }
        );
  }
  connection(user: any){
    // return this.http.post(`${urlAPI}/user/signin`,user,{ headers: this.headers})
    // .pipe(tap({
    //     next: (data: any) => {
    //      console.log(data);
    //     //  localStorage.setItem('user',data.result)
    //      console.log(data.token);
    //      localStorage.setItem('token',data.token)
    //     } ,
    //     error: (error) => {
    //       throw new Error(error)
    //     }
    // }) );
    return this.http.post(`${urlAPI}/user/signin`,user,{ headers: this.headers})
        .subscribe(
            (res: any) =>{
                console.log(res);
                localStorage.setItem('user',res.result);
                localStorage.setItem('token',res.token);
            },
            err => {
                console.log(err.message);
            }
        );
  }
}
