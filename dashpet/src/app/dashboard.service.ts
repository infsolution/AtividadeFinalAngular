import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from './pet';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

 

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://192.168.0.104:8000/api/'
  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) { 
    
  }

  

  getMedicamentos(){
    return this.httpClient.get(this.apiUrl.concat('medicamento/'));
  }
  getAtendimento(){
    return this.httpClient.get(this.apiUrl.concat('atendimento/'));
  }
  

  logout(){
    this.authService.logout();
    this.router.navigate(['login'])
  }
}
