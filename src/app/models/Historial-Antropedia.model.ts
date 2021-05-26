import { AntropediaAdultoReq } from "./AntropediaAdultoReq.model";
import { AntropediaAdultoRes } from "./AntropediaAdultoRes.model";

export class HistorialAntropediaAdulto{

    public id: string;
    public idPersona: string;
    public fechaCreacion: Date;
    public medidasAntropedia: AntropediaAdultoReq;
    public antropediaAdulto: AntropediaAdultoRes;
}