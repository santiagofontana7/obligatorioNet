import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { LoginObject } from "../ValueObjects/login";
import { Usuario } from '../ValueObjects/usuario';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private loginUrl = 'https://localhost:44323/api/Usuario/Login/';
  private registerUrl = 'https://localhost:44323/api/Usuario/Post/';

  login(loginObj: LoginObject): Observable<ResultadoOperacion> {
    return this.http.post<ResultadoOperacion>(this.loginUrl, loginObj);
  }

  register(registerObj: Usuario): Observable<ResultadoOperacion> {
    return this.http.post<ResultadoOperacion>(this.registerUrl, registerObj);
  }


}
