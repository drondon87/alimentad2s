export class RequerimientoAdultoRes {

    constructor(
        public mtRCB: number ,
        public mtADE: number ,
        public mtRCT: number ,
        public metodoDirecto: number ,
        public tasaMetabolicaBasal: number ,
        public requerimientoCaloricoTotal: number ,
        public tasaMetabolicaReposo: number ,
        public gastoEnergeticoActividadFisica: number ,
        public accionDinamicaEspecifica: number ,
        public gastoCaloricaTotal: number ,
        public diagnosticoRequerimiento: string
        ){}

    
  }