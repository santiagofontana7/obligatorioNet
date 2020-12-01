import { Component, OnInit, Input } from '@angular/core';
import { Banda } from '../ValueObjects/banda';

@Component({
  selector: 'app-resenia-banda',
  templateUrl: './resenia-banda.component.html',
  styleUrls: ['./resenia-banda.component.css']
})
export class ReseniaBandaComponent implements OnInit {

  @Input() banda : Banda;

  constructor() { }

  ngOnInit(): void {
  }

}
