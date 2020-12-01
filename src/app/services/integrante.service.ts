import { Injectable } from '@angular/core';
import { Integrante } from '../ValueObjects/integrante';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntegranteService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private integrantesUrl = 'https://localhost:44323/api/Integrante/GetAll';

  private integrantes : Observable<Integrante[]>;

  getIntegrantes(): Observable<Integrante[]> {
    //this.messageService.add('Servicio de bandas: bandas cargadas');
    this.integrantes = this.http.get<Integrante[]>(this.integrantesUrl).pipe(tap(_ => this.log('integrantes buscados')), catchError(this.handleError<Integrante[]>('getIntegrantes', [])));
    return this.integrantes;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`Banda service: ${message}`);
  }


}
