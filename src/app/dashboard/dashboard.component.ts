import { Component, OnInit } from '@angular/core';
import { Banda } from '../ValueObjects/banda';
import { BandaService } from '../services/banda.service';
import { Usuario } from '../ValueObjects/usuario';
import { StorageService } from '../services/storage.service';
import { LoginService } from "../services/login.service";


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
    this.bandaService.getBandas().subscribe(bandas => this.bandas = bandas/*.slice(1, 5)*/);
  }

}