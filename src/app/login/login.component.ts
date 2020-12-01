import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { LoginObject } from "../ValueObjects/login";
import { LoginService } from "../services/login.service";
//import {StorageService} from "../core/services/storage.service";
import { Router } from "@angular/router";
import { Usuario } from '../ValueObjects/usuario';
import { StorageService } from '../services/storage.service';
import { ResultadoOperacion } from '../ValueObjects/resultadoOperacion';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: { code: number, message: string } = null;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    })
    this.storageService.logout();
  }

  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if (this.loginForm.valid) {
      this.loginService.login(new LoginObject(this.loginForm.get("UserName").value, this.loginForm.get("Password").value)).subscribe(
        data => { this.correctLogin(data) },
        error => this.error = JSON.parse(error._body)
      )
    }
  }

  private correctLogin(data: ResultadoOperacion) {
    if (!data.Error) {
      this.storageService.setCurrentUser(data.Objeto as Usuario);
      this.router.navigate(['/dashboard']);
    }
    else {
      console.log(data.Mensaje);
    }
  }
}
