import { Component, OnInit } from '@angular/core';
import { Banda } from '../ValueObjects/banda';
import { BandaService } from '../services/banda.service';
import { Usuario } from '../ValueObjects/usuario';
import { StorageService } from '../services/storage.service';
import { LoginService } from "../services/login.service";
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';
import { CancionService } from '../services/cancion.service';
import { Cancion } from '../ValueObjects/cancion';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: Usuario;

  bandas: Banda[] = [];
  canciones: Cancion[] = [];

  constructor(private bandaService: BandaService, private storageService: StorageService,
    private loginService: LoginService, private cancionService: CancionService) {

  }

  ngOnInit(): void {
    //this.user = this.storageService.getCurrentUser();
    this.getBandas();
    this.getCanciones();
  }

  getBandas(): void {
    this.bandaService.getBandas().subscribe(data => { this.checkBandas(data) }, error => { console.log(error) });

  }

  getCanciones(): void {
    this.cancionService.getCanciones().subscribe(data => { this.checkCanciones(data) }, error => { console.log(error) });
  }

  private checkBandas(data: ResultadoOperacion) {
    if (!data.Error) {
      this.bandas = data.Objeto as Banda[];
      this.bandas.sort(function (banda1, banda2) {
        var retorno = 0;
        if (banda1.PromedioResenias < banda2.PromedioResenias)
          retorno = 1;
        else if (banda1.PromedioResenias > banda2.PromedioResenias)
          retorno = -1
        else
          retorno = 0;
        return retorno;
      });
      this.bandas = this.bandas.slice(0, 4);
    }
    else {
      console.log(data.Mensaje);
    }
  }
  private checkCanciones(data: ResultadoOperacion) {
    if (!data.Error) {
      this.canciones = data.Objeto as Cancion[];
      this.canciones.sort(function (cancion1, cancion2) {
        var retorno = 0;
        if (cancion1.PromedioResenias < cancion2.PromedioResenias)
          retorno = 1;
        else if (cancion1.PromedioResenias > cancion2.PromedioResenias)
          retorno = -1
        else
          retorno = 0;
        return retorno;
      });
      this.bandas = this.bandas.slice(0, 4);
    }
    else {
      console.log(data.Mensaje);
    }

  }

}