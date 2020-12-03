import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { ReseniaCancionGuardar } from "../ValueObjects/reseniaCancionGuardar";
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Injectable({
  providedIn: 'root'
})
export class ReseniaCancionService {

  constructor(private http: HttpClient) { }

  private reseniaUrl = 'https://localhost:44323/api/Cancion/GuardarReseniaCancion/';
  private reseniaBorrarUrl = 'https://localhost:44323/api/Cancion/EliminarReseniaCancion/';

  guardarResenia(reseniaObj: ReseniaCancionGuardar): Observable<ResultadoOperacion> {
    return this.http.post<ResultadoOperacion>(this.reseniaUrl, reseniaObj);
  }

  eliminarResenia(idResenia: number): Observable<ResultadoOperacion> {
    return this.http.delete<ResultadoOperacion>(this.reseniaBorrarUrl + "/" + idResenia);
  }
}