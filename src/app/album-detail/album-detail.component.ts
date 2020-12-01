import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../ValueObjects/album';
import { BandaService } from '../services/banda.service';
import { MessageService } from '../services/message.service';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private albumService:AlbumService,  private location: Location){ }
  
  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void{
    const nombre = this.route.snapshot.paramMap.get('Nombre');
    this.albumService.getAlbum(nombre).subscribe(data => { this.checkAlbum(data) }, error => { console.log(error) });
  }

  private checkAlbum(data: ResultadoOperacion): void {
    if(!data.Error)
    {
      this.album = data.Objeto as Album;
    }
    else
    {
      this.location.back();
    }
  }

  @Input() album: Album;

}



