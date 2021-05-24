export class Persona {

    constructor(
        public tipoIdentificacion: string,
        public iden: string,
        public identificacion: string,
        public nombre: string,
        public apellido: string,
        public sexo: string,
        public edad: number,
        public estatura: number,
        public peso: number,
        public activo: boolean,
        public status: string,
        public id?: string
    ){}
  }