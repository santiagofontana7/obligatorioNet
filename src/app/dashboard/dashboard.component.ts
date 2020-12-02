import { Component, OnInit } from '@angular/core';
import { Banda } from '../ValueObjects/banda';
import { BandaService } from '../services/banda.service';
import { Usuario } from '../ValueObjects/usuario';
import { StorageService } from '../services/storage.service';
import { LoginService } from "../services/login.service";
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: Usuario;

  bandas: Banda[] = [];

  constructor(private bandaService: BandaService, private storageService: StorageService,
    private loginService: LoginService) {

  }

  ngOnInit(): void {
    //this.user = this.storageService.getCurrentUser();
    this.getBandas();
  }

  getBandas(): void {
    this.bandaService.getBandas().subscribe(data => { this.checkBandas(data) }, error => { console.log(error) });

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

}