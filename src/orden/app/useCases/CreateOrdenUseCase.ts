import { json } from "stream/consumers";
import { Orden } from "../../domain/orden";
import { OrdenRepository } from "../../domain/OrdenRepository";
import { NotificationOrdenUseCase } from "../services/NotificationNewOrden";

export class CreateOrdenUseCase{
     constructor(
        readonly ordenRepository:OrdenRepository,
        readonly notification: NotificationOrdenUseCase
     ){}
    async run(
        id_orden:number,
        descripcion:string,
        total:number
    ):Promise <Orden | null>{
        try {
            const orden = await this.ordenRepository.createOrden(
                id_orden,
                descripcion,
                total
                )
         if(orden)this.notification.run(orden)
             return orden;
        } catch (error) {
            return null;
        }
    }
}