import { Medicamento } from './medicamento';

export interface Atendimento {
    pk: number;
    pet: string;
    data_hora: string;
    procedimento: string;
    tipo: string;
    medicamentos: Medicamento[];
}
