import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { CancionService } from '../services/cancion.service';
import { Cancion } from '../ValueObjects/cancion';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';
import { Location } from '@angular/common';
import { StorageService } from '../services/storage.service';
import { ReseniaCancionService } from '../services/resenia-cancion.service';
import { ReseniaCancionGuardar } from '../ValueObjects/reseniaCancionGuardar';


@Component({
  selector: 'app-cancion-detail',
  templateUrl: './cancion-detail.component.html',
  styleUrls: ['./cancion-detail.component.css']
})
export class CancionDetailComponent implements OnInit {

  private mensajeError: string;
  private mensajeSuccess: string;

  constructor(private route: ActivatedRoute,
    private cancionService: CancionService,
    private location: Location, private reseniaCancionService: ReseniaCancionService, private storageService: StorageService) { }
  
  ngOnInit(): void {
    this.getCancion();
  }

  getCancion(): void{
    const nombre = this.route.snapshot.paramMap.get('Nombre');
    this.cancionService.getCancion(nombre).subscribe(data => { this.checkCancion(data) }, error => { console.log(error) });
  }

  private checkCancion(data: ResultadoOperacion): void {
    if(!data.Error)
    {
      this.cancion = data.Objeto as Cancion;
    }
    else
    {
      this.location.back();
    }
  }

  add(comentario: string, puntuacion: string): void {
    this.mensajeError = "";
    this.mensajeSuccess = "";
    if (comentario.trim() == "") {
      this.mensajeError = "Debe ingresar un comentario";
    }
    else if (puntuacion == "0") {
      this.mensajeError = "Debe seleccionar una puntuación";
    }
    else {
      console.log(this.cancion);
      this.reseniaCancionService.guardarResenia(new ReseniaCancionGuardar(this.cancion.Id, this.cancion.Nombre, this.storageService.getCurrentUser().Id, +puntuacion, comentario)).subscribe(
        data => { this.checkAccionResenia(data, "Cambios guardados con éxito") },
        error => this.mensajeError = error
      )
    }
  }

  private checkAccionResenia(data: ResultadoOperacion, mensaje : string) {
    if (!data.Error) {
      console.log(data);
      this.getCancion();
      this.mensajeSuccess = mensaje;

    }
    else {
      this.mensajeError = data.Mensaje;
    }
  }

  delete(idResenia: number): void {
    console.log(idResenia);
    this.reseniaCancionService.eliminarResenia(idResenia).subscribe(
      data => { this.checkAccionResenia(data, "Reseña eliminada con éxito") },
      error => console.log(error)
    )
  }


  @Input() cancion: Cancion;

}
