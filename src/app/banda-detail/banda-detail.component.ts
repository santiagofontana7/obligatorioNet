import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BandaService } from '../services/banda.service';

import { Banda } from '../ValueObjects/banda';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';
import { ReseniaBandaService } from '../services/resenia-banda.service';
import { ReseniaBandaGuardar } from '../ValueObjects/reseniaBandaGuardar';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private bandaService: BandaService,
    private location: Location, private reseniaBandaService: ReseniaBandaService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.getBanda();
  }

  getBanda(): void {
    const nombre = this.route.snapshot.paramMap.get('Nombre');
    this.bandaService.getBanda(nombre).subscribe(data => { this.checkBanda(data) }, error => { console.log(error) });
  }

  private checkBanda(data: ResultadoOperacion): void {
    if (!data.Error) {
      this.banda = data.Objeto as Banda;
    }
    else {
      this.location.back();
    }
  }

  add(comentario: string, puntuacion: string): void {
    if (comentario.trim() != "" && puntuacion != "0") {
      console.log(this.banda);
      this.reseniaBandaService.guardarResenia(new ReseniaBandaGuardar(this.banda.Id, this.banda.Nombre, this.storageService.getCurrentUser().Id, +puntuacion, comentario)).subscribe(
        data => { this.checkAccionResenia(data) },
        error => console.log(error)
      )
    }
    else { console.log("error"); }
  }

  private checkAccionResenia(data: ResultadoOperacion) {
    if (!data.Error) {
      console.log(data);
      this.getBanda();

    }
    else {
      console.log(data.Mensaje);
    }
  }

  delete(idResenia: number): void {
    console.log(idResenia);
    this.reseniaBandaService.eliminarResenia(idResenia).subscribe(
      data => { this.checkAccionResenia(data) },
      error => console.log(error)
    )
  }

  @Input() banda: Banda;

}
