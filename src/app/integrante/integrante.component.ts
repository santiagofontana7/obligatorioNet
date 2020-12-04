import { Component, OnInit } from '@angular/core';
import { IntegranteService } from '../services/integrante.service';
import { Integrante } from '../ValueObjects/integrante';
import { Location } from '@angular/common';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';
import { DomSanitizer } from '@angular/platform-browser';
import { image } from './image.const';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {

  integrantes: Integrante[];
  constructor(private integranteService: IntegranteService, private location: Location, private sanitizer: DomSanitizer) { }


  getIntegrantes(): void {
    this.integranteService.getIntegrantes().subscribe(data => { this.checkIntegrantes(data) }, error => { console.log(error) });
  }

  ngOnInit(): void {
    this.getIntegrantes();
  }

  private checkIntegrantes(data: ResultadoOperacion) {
    console.log(data);
    if (!data.Error) {
      this.integrantes = data.Objeto as Integrante[];
    }
    else {
      console.log(data.Mensaje);
    }

  }

  goBack(): void {
    this.location.back();
  }

  sanitize(imagen) {
    var url = image
    if (imagen)
      url = imagen;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${url}`)
  }


}
