import { MysqlOrdenRepository } from "./ordenRepository";

import { NotificationOrdenUseCase } from "../app/services/NotificationNewOrden";
import { NotificationNewOrden } from "./services/NotificationNewOrden";

import { CreateOrdenUseCase } from "../app/useCases/CreateOrdenUseCase";
import { CreateOrdenController } from "./controllers/CreateOrdenController";



export const mySqlOrdenRepository = new MysqlOrdenRepository();

export const serviceNotification= new NotificationNewOrden();
export const serviceNotificationUseCase= new NotificationOrdenUseCase(serviceNotification);

export const createOrdenUseCase= new CreateOrdenUseCase(mySqlOrdenRepository,serviceNotificationUseCase);
export const createOrdenController= new CreateOrdenController(createOrdenUseCase);
