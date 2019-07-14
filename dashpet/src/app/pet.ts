import { Atendimento } from './atendimento';

export interface Pet {
	pk: number;
	nome: string
	cpf_dono: string
	nadcimento: string;
	raca: string;
	sexo: string
	cor: string;
	atendimentos: Atendimento[];
}
