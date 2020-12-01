import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {BandaService} from '../services/banda.service';
import { Banda } from '../ValueObjects/banda';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

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
    this.bandaService.getBanda(nombre).subscribe(data => { this.checkBanda(data) }, error => { console.log(error) });
  }

  private checkBanda(data: ResultadoOperacion): void {
    if(!data.Error)
    {
      this.banda = data.Objeto as Banda;
    }
    else
    {
      this.location.back();
    }
  }

  @Input() banda: Banda;

}
