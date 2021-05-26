import { RequerimientoAdultoReq } from './RequerimientoAdultoReq.model';
import { RequerimientoAdultoRes } from './RequerimientoAdultoRes.model';

export class HistorialRequerimientoAdulto {

    public id: string;
    public idPersona: string;
    public fechaCreacion: Date;
    public medidaRequerimiento: RequerimientoAdultoReq;
    public requerimientoAdulto: RequerimientoAdultoRes;
}