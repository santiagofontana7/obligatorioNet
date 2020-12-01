import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public storageService: StorageService
  ) { }

  public logout(): void{
    this.storageService.logout();
  }

  title = 'Obligatorio 2020';
}
