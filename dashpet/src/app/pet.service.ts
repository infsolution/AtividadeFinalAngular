import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pet } from './pet';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'http://192.168.0.104:8000/api/'

  constructor(private httpClient: HttpClient, private router: Router) { }

  getPets(){
    return this.httpClient.get(this.apiUrl.concat('pet/'));
  }

  createPet(nome, cpf_dono, nadcimento, raca, sexo,cor){
    return this.httpClient.post(this.apiUrl.concat('pet/'),{nome, cpf_dono, nadcimento, raca, sexo,cor}).pipe(
      tap(async (res:Pet)=>{})
    )
  }

  deletePet(id: number): Observable<Pet>{
    return this.httpClient.delete(this.apiUrl.concat(`pet/${id}/`)).pipe(
      tap(async(res: Pet)=>{})
    )
  }
}
