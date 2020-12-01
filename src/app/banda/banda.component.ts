import { Component, OnInit } from '@angular/core';
import { Banda } from '../ValueObjects/banda';
import { BandaService } from '../services/banda.service';
import { MessageService } from '../services/message.service';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  bandas: Banda[];
  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe(data => { this.checkBandas(data) }, error => { console.log(error) });
  }

  ngOnInit(): void {
    this.getBandas();
  }

  private checkBandas(data: ResultadoOperacion) {
    if (!data.Error) {
      this.bandas = data.Objeto as Banda[];
    }
    else {
      console.log(data.Mensaje);
    }

  }
}
