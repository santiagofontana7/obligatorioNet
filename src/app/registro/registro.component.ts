import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { Usuario } from '../ValueObjects/usuario';
import { StorageService } from '../services/storage.service';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public registroForm: FormGroup;
  public mensajeError: string;
  public mensajeSuccess: string;

  constructor(private formBuilder: FormBuilder,
    private registroService: LoginService,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isAuthenticated())
      this.router.navigate(['/dashboard']);
    this.registroForm = this.formBuilder.group({
      Nombre: [''],
      UserName: [''],
      Password: [''],
    })
  }

  public submitregistro(): void {
    this.mensajeError = "";
    this.mensajeSuccess = "";
    var name = this.registroForm.get("Nombre").value;
    var user = this.registroForm.get("UserName").value;
    var pass = this.registroForm.get("Password").value;
    if (name == "") {
      this.mensajeError = "Debe ingresar un nombre";
    }
    else if (user == "") {
      this.mensajeError = "Debe ingresar el usuario";
    }
    else if (pass == "") {
      this.mensajeError = "Debe ingresar la contraseña";
    }
    else if (this.registroForm.valid) {
      var u: Usuario = {
        Id: 0,
        Contrasenia: pass,
        Nombre: name,
        UserName: user
      };

      this.registroService.register(u).subscribe(
        data => { this.correctregistro(data) },
        error => this.mensajeError = JSON.parse(error._body)
      )
    }
  }

  private correctregistro(data: ResultadoOperacion) {
    if (!data.Error) {
      this.mensajeSuccess = "Usuario registrado con éxito. Será redireccionado al menú principal";
      setTimeout(() => {
        this.storageService.setCurrentUser(data.Objeto as Usuario);
        this.router.navigate(['/dashboard']);
      }
        , 2000);
    }
    else {
      this.mensajeError = data.Mensaje;
    }
  }

}
