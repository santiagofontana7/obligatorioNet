import { Component, OnInit } from '@angular/core';
import { Banda } from '../ValueObjects/banda';
import { BandaService } from '../services/banda.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  bandas: Banda[];
  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe(bandas => this.bandas = bandas);
  }

  ngOnInit(): void {
    this.getBandas();
  }
}
