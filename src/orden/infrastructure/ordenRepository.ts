import {query} from '../../DB/database';
import { Orden } from '../domain/orden';
import { OrdenRepository } from '../domain/OrdenRepository';

export class MysqlOrdenRepository implements OrdenRepository{
    async createOrden(id_orden: number, descripcion: string, total: number): Promise<Orden | null> {
        const sql= 'INSERT INTO Ordenes(id_orden,descripcion,total) VALUES(?,?,?)';
        const params:any[]= [id_orden,descripcion,total];
        try{
            const [id_orden,descripcion,total]: any= params;
            const orden:Orden= new Orden(id_orden,descripcion,total);
            const [result]: any = await query(sql,params);

            return orden;
        }catch(error){
            console.log('error en ordenRepository');
            return null;
        }
    }
}