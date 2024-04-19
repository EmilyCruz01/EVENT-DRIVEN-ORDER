import {Orden} from '../orden';

export interface INotificationNewOrden{
    sendNotification(orden:Orden):Promise<Boolean>;
}