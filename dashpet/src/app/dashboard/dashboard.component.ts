import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { DashboardService } from '../dashboard.service';
import { Medicamento } from '../medicamento';
import { Atendimento } from '../atendimento';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets: Pet[]; 
  error: any;
  medicamentos: Medicamento[];
  atendimentos: Atendimento[];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getAtendimento();
  }

  
  getMedicamentos(){
    this.dashboardService.getMedicamentos().subscribe(
      (medicamentos: Medicamento[])=>this.medicamentos = medicamentos,
      (error: any)=> this.error = error
    )
  }

  getAtendimento(){
    this.dashboardService.getAtendimento().subscribe(
      (atendimentos: Atendimento[])=>this.atendimentos = atendimentos,
      (error: any)=>this.error = error
    )
  }

 
 logout(){
   this.dashboardService.logout();
 }
 
}
