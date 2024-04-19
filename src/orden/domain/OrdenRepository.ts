import{Orden} from './orden';

export interface OrdenRepository{
    createOrden(
        id_orden:number,
        descripcion:string,
        total:number
    ):Promise<Orden|null>
}