import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private cancionUrl = 'https://localhost:44323/api/Cancion';


  getCanciones(): Observable<ResultadoOperacion> {
    return this.http.get<ResultadoOperacion>(this.cancionUrl + '/GetAll');
  }

  getCancion(nombre: string): Observable<ResultadoOperacion> { 
    return this.http.get<ResultadoOperacion>(this.cancionUrl + '/Get/' + nombre);
  }

}
