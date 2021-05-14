export class FormulaDieteticaRes {

    constructor(
        // Nutriente
        public gramo: number,
        // Proteina
        public gramosProteinas: number,
        public kcalProteinas: number,
        public porcentajeProteinas: number,
        // Grasas Totales
        public porcentajeGrasasTotales: number,
        public kcalGrasasTotales: number,
        public gramosGrasasTotales: number,
        // Grasas Saturadas
        public porcentajeGrasasSaturadas: number,
        public kcalGrasasSaturadas: number,
        public gramosGrasasSaturadas: number,
        // Grasas Poliinsaturadas
        public porcentajePoliinsaturadas: number,
        public kcalGrasasPoliinsaturadas: number,
        public gramosGrasasPoliinsaturadas: number,
        // Grasas Monoinsaturadas
        public porcentajeMonoinsaturadas: number,
        public kcalGrasasMonoinsaturadas: number,
        public gramosGrasasMonoinsaturadas: number,
        // Carbohidratos Complejos
        public porcentajeCarbohidratosComplejos: number,
        public kcalGrasasCarbohidratosComplejos: number,
        public gramosGrasasCarbohidratosComplejos: number,
        // Carbohidratos Simples
        public porcentajeCarbohidratosSimples: number,
        public kcalGrasasCarbohidratosSimples: number,
        public gramosGrasasCarbohidratosSimples: number,
        public fibraDietetica: number,
        public sodio: number,
        public colesterol: number,
        // Requerimiento hidrico
        public requerimientoHidricoPeso: number,
        public requerimientoHidricoKcal: number,
        public cantidadVasosAgua: number
    ){}

    
  }