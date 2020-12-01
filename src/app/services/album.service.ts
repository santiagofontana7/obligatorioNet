import { Injectable } from '@angular/core';
import { Album } from '../ValueObjects/album';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter, mergeMap } from 'rxjs/operators';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private albumsUrl = 'https://localhost:44323/api/Album';


  getAlbums(): Observable<ResultadoOperacion> {
    return this.http.get<ResultadoOperacion>(this.albumsUrl + '/GetAll');
  }

  getAlbum(nombre: string): Observable<ResultadoOperacion> { 
    return this.http.get<ResultadoOperacion>(this.albumsUrl + '/Get/' + nombre);
  }

}
