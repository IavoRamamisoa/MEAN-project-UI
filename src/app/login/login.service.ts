import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';


 const urlAPI= environment.urlAPI;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json' });
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  inscription(user: any){
    return this.http.post(`${urlAPI}/user/signup`,user,{ headers: this.headers})
        .subscribe(
            (res: any) =>{
              console.log(res);
              localStorage.setItem('user',JSON.stringify(res.result));
              localStorage.setItem('token',res.token);
              this.router.navigate(['/dashboard']);
            },
            err => {
                console.log(err.message);
            }
        );
  }
  connection(user: any){
    console.log(user);
    
    return this.http.post(`${urlAPI}/user/signin`,user,{ headers: this.headers})
        .subscribe(
            (res: any) =>{
                console.log(res);
                localStorage.setItem('user',JSON.stringify(res.result));
                localStorage.setItem('token',res.token);
                this.router.navigate(['/dashboard']);
            },
            err => {
                console.log(err.message);
            }
        );
  }
}
