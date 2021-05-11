export class RequerimientoAdultoReq {

    constructor(
        public sexo: string ,
        public edad: number ,
        public peso: number ,
        public factoresActividad: string ,
        public kcal: number ,
        public nivelActividadFisica: number | string,
        public masaGrasaKg: number ,
        public pesoActual: number ,
        public tiempoActividadFisica: number ,
        public met: string
        ){}

    
  }