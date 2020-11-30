import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {BandaService} from '../services/banda.service';

import { Banda } from '../ValueObjects/banda';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private bandaService: BandaService,
    private location: Location) { }

  ngOnInit(): void {
    this.getBanda();
  }

  getBanda(): void{
    const nombre = this.route.snapshot.paramMap.get('Nombre');
    var bandas = this.bandaService.getBanda(nombre);
    if(bandas)
    {
      bandas.subscribe(banda => this.banda = banda);
    }
    else
    console.log("nadaaa");//ACA REDIRECT
  }

  goBack(): void {
    this.location.back();
  }

  @Input() banda: Banda;

}
