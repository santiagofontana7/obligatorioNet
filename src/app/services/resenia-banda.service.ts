import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { ReseniaBandaGuardar } from "../ValueObjects/reseniaBandaGuardar";
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Injectable({
  providedIn: 'root'
})
export class ReseniaBandaService {

  constructor(private http: HttpClient) { }

  private reseniaUrl = 'https://localhost:44323/api/Banda/GuardarReseniaBanda/';
  private reseniaBorrarUrl = 'https://localhost:44323/api/Banda/EliminarReseniaBanda/';

  guardarResenia(reseniaObj: ReseniaBandaGuardar): Observable<ResultadoOperacion> {
    return this.http.post<ResultadoOperacion>(this.reseniaUrl, reseniaObj);
  }

  eliminarResenia(idResenia: number): Observable<ResultadoOperacion> {
    return this.http.delete<ResultadoOperacion>(this.reseniaBorrarUrl + "/" + idResenia);
  }
}
