import { Injectable } from '@angular/core';
import { Banda } from '../ValueObjects/banda';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private bandasUrl = 'https://localhost:44323/api/Banda';

  private bandas: Observable<Banda[]>;

  getBandas(): Observable<Banda[]> {
    //this.messageService.add('Servicio de bandas: bandas cargadas');
    return this.http.get<Banda[]>(this.bandasUrl + '/GetAll').pipe(tap(_ => this.log('bandas buscadas')), catchError(this.handleError<Banda[]>('getBandas', [])));
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

  getBanda(nombre: string): Observable<Banda> {
    // if(this.bandas)
    // {
    //   return this.bandas.pipe(map((banda : Banda[]) => banda.find(p => p.Nombre === nombre)));//filter
    // }  
    return this.http.get<Banda>(this.bandasUrl + '/Get/' + nombre).pipe(tap(_ => this.log('banda buscada')), catchError(this.handleError<Banda>('getBanda')));
  }

  searchBanda(texto: string): Observable<Banda[]> {
    if (this.bandas) {
      if (texto.trim()) {
        return this.bandas.pipe(map((banda: Banda[]) => banda.filter(p => p.Nombre.includes(texto))));
      }
    }
  }

}
