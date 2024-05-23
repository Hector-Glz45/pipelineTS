import Server from './provider/Server';
import { PORT, NODE_ENV } from './config';
import express from 'express';
import cors from 'cors';
import BeveragesController from './controllers/BeveragesController';
import ClothingController from './controllers/ClothingController';


const server = new Server({
    port: PORT,
    env: NODE_ENV,
    middlewares: [
        express.json(),
        express.urlencoded({ extended: true }),
        cors()
    ],
    controllers: [
        BeveragesController.instance,
        ClothingController.instance
    ]
});

server.init();