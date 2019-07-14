import { Component, OnInit, Input } from '@angular/core';
import { Atendimento } from '../atendimento';
import { AtendimentoService } from '../atendimento.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {
  @Input() atendimento: Atendimento;
  error: any;
  constructor(private atendimentoService: AtendimentoService, private route: ActivatedRoute,
    private location: Location, private router: Router) { }

  ngOnInit() {
    this.getAtendimento();
  }

  getAtendimento(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.atendimentoService.getAtendimento(id).subscribe(
      (atendimento: Atendimento)=> this.atendimento= atendimento,
      (error: any) => this.error=this.error
    )
  }
  addProcedimento(procedimento: string, id: number){
    this.atendimentoService.addProcedimento(procedimento, id).subscribe(
      success => this.router.navigate(['atendimento/'+id+'/']),
      error => this.error = error
    )
  }
  goBack(): void {
	  this.location.back();
	}
}
