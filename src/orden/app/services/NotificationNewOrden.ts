import { NotificationNewOrden } from "../../infrastructure/services/NotificationNewOrden";
import {Orden} from '../../domain/orden';

export class NotificationOrdenUseCase{
    constructor(readonly serviceNotification:NotificationNewOrden){}
    async run(orden:Orden){
        await this.serviceNotification.sendNotification(orden);
    }
}

