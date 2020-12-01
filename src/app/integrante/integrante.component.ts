import { Component, OnInit } from '@angular/core';
import { IntegranteService } from '../services/integrante.service';
import { Integrante } from '../ValueObjects/integrante';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {

  integrantes: Integrante[];
  constructor(private integranteService: IntegranteService) { }


  getIntegrantes(): void {
    this.integranteService.getIntegrantes().subscribe(integrantes => this.integrantes = integrantes);
  }

  ngOnInit(): void {
    this.getIntegrantes();
  }

}
