import { Request,Response } from "express";
import {CreateOrdenUseCase} from '../../app/useCases/CreateOrdenUseCase'

export class CreateOrdenController{
    constructor(readonly createOrdenUseCase:CreateOrdenUseCase){}
    async run(req:Request, res:Response):Promise<void>{
        const data= req.body;

        try{
            const orden= await this.createOrdenUseCase.run(
                data.id_orden,
                data.descripcion,
                data.total
            )
            if(orden){
                console.log('pago')
                    res.status(201).send({
                        status:'succes',
                        data:{
                            id_orden: orden?.id_orden,
                            descripcion: orden?.descripcion,
                            total: orden?.total
                        }
                   })
            }// aqui ya no retorna nulo, no hay return 

            }catch(error){
                res.status(500).send({
                    status:'error',
                    data:[],
                    messages: error
                })
            }
        }
    }
