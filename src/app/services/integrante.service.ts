import { Injectable } from '@angular/core';
import { Integrante } from '../ValueObjects/integrante';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter, mergeMap } from 'rxjs/operators';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Injectable({
  providedIn: 'root'
})
export class IntegranteService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private integrantesUrl = 'https://localhost:44323/api/Integrante/GetAll';

  getIntegrantes(): Observable<ResultadoOperacion> {
    return this.http.get<ResultadoOperacion>(this.integrantesUrl);
  }


}
