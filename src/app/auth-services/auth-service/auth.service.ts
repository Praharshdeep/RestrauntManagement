import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8085/"];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(singuprequest:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL + "api/auth/signup", singuprequest)
  }

  login(loginrequest:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL+ "api/auth/login",loginrequest)
  }
}
