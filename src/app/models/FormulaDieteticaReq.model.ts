export class FormulaDieteticaReq {
    constructor(
        public gramo: number,
        public pesoRecomendado: number,
        public rct: number,
        public porcentajeGrasasTotales: number,
        public porcentajeGrasasSaturadas: number,
        public porcentajeGrasasPoliinsaturadas: number,
        public porcentajeGrasasMonoInsaturadas: number,
        public porcentajeCarbComplejos: number,
        public porcentajeCarbSimples: number,
        public fibraDietetica: number,
        public sodio: number,
        public colesterol: number
    ){}
}

