import express from 'express';
import {createOrdenController} from './dependencies';

export const ordenesRouter=express.Router();

ordenesRouter.post('/', createOrdenController.run.bind(createOrdenController))
