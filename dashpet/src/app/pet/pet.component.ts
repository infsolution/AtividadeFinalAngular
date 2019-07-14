import { Component, OnInit } from '@angular/core';
import { PetService} from '../pet.service'; 
import { Pet } from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(private petService: PetService) { }
  pet: Pet;
  pets: Pet[];
  error: any;
  ngOnInit() {
    this.getPets();
  }
  addPet(nomePet: string, cpfDono: string, nascimento: string, raca: string, sexo: string, cor: string){
    this.petService.createPet(nomePet,cpfDono, nascimento, raca, sexo, cor).subscribe(
      (pet: Pet)=>this.pets.push(pet)
    );
}
getPets(){
  this.petService.getPets().subscribe(
    (pets: Pet[])=> this.pets = pets,
    (error: any)=>this.error = error
  )
}

delete(pk: number){
  this.petService.deletePet(pk).subscribe(
    (success: any) => this.pets.splice(
      this.pets.findIndex(pet=>pet.pk === pk)
    )
  )
}

}
