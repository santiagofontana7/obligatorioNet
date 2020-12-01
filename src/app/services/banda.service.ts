import { Injectable } from '@angular/core';
import { Banda } from '../ValueObjects/banda';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter, mergeMap } from 'rxjs/operators';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private bandasUrl = 'https://localhost:44323/api/Banda';


  getBandas(): Observable<ResultadoOperacion> {
    return this.http.get<ResultadoOperacion>(this.bandasUrl + '/GetAll');
  }

  getBanda(nombre: string): Observable<ResultadoOperacion> { 
    return this.http.get<ResultadoOperacion>(this.bandasUrl + '/Get/' + nombre);
  }

}
