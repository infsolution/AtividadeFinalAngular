import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private apiUrl = 'http://192.168.0.104:8000/api/'
  constructor(private httpClient: HttpClient) { }

  getAtendimento(id: number){
    return this.httpClient.get(this.apiUrl.concat('atendimento/'+id+'/'));
  }

  addProcedimento(procedimento: string, id: number){
    return this.httpClient.patch(this.apiUrl.concat('atendimento/'+id+'/'),{'procedimento':procedimento});
  }
}
