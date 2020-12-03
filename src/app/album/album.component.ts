import { Component, OnInit } from '@angular/core';
import { Album } from '../ValueObjects/album';
import { BandaService } from '../services/banda.service';
import { MessageService } from '../services/message.service';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';
import { AlbumService } from '../services/album.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService, private location: Location) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe(data => {this.checkAlbums(data) }, error => { console.log(error) });
  }

  
  private checkAlbums(data: ResultadoOperacion) {
    if (!data.Error) {
      this.albums = data.Objeto as Album[];
    }
    else {
      console.log(data.Mensaje);
    }

  }
  goBack(): void {
    this.location.back();
  }

}


  





