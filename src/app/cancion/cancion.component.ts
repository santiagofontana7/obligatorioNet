import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CancionService } from '../services/cancion.service';
import { Cancion } from '../ValueObjects/cancion';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  canciones: Cancion[];

  constructor(private cancionService: CancionService, private location: Location) { }

  ngOnInit(): void {
    this.getCanciones();
  }

  getCanciones(): void {
    this.cancionService.getCanciones().subscribe(data => {this.checkCanciones(data) }, error => { console.log(error) });
  }

  
  private checkCanciones(data: ResultadoOperacion) {
    if (!data.Error) {
      this.canciones = data.Objeto as Cancion[];
    }
    else {
      console.log(data.Mensaje);
    }

  }

  goBack(): void {
    this.location.back();
  }

}
