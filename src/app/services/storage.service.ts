import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Usuario} from "../ValueObjects/usuario"

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentUser : Usuario = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentUser = this.loadUserData();
  }

  setCurrentUser(user: Usuario): void {
    this.currentUser = user;
    this.localStorageService.setItem('currentUser', JSON.stringify(user));
  }

  loadUserData(): Usuario{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Usuario> JSON.parse(sessionStr) : null;
  }

  getCurrentUser(): Usuario {
    return this.currentUser;
  }

  removeCurrentUser(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentUser = null;
  }


  isAuthenticated(): boolean {
    return (this.getCurrentUser() != null) ? true : false;
  };

  // getCurrentToken(): string {
  //   var session = this.getCurrentSession();
  //   return (session && session.token) ? session.token : null;
  // };

  logout(): void{
    this.removeCurrentUser();
    this.router.navigate(['/login']);
  }

}
