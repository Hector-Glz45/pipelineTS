import { Request,Response } from "express";
import AbstractController from "./AbstractController"
import db from "../models";
//import Beverages from "../models/BeveragesModel";

class BeveragesController extends AbstractController{

    private static _instance: BeveragesController;
    public static get instance():AbstractController {
        if(!this._instance) {
            this._instance = new BeveragesController("beverages");
        }
        return this._instance;
    }

    protected initRoutes(): void {
        this.router.get("/consultBeverages",this.getBeverages.bind(this));
        this.router.post("/newBeverage",this.newBeverage.bind(this));
    }

    private async getBeverages(req: Request, res: Response){
        try {
            console.log("Consulting beverages");
            let beverages = await db["Beverage"].findAll();
            res.status(200).json(beverages);
        } catch (error) {
            res.status(500).send("<h1>Internal Server Error</h1>" + error);
        }
    }

    private async newBeverage(req: Request, res: Response){
        try {
            console.log(req.body);
            await db["Beverage"].create(req.body);
            console.log("Creating new beverage");
            res.status(200).send("<h1>Beverage created</h1>");

        } catch (error:any) {
            console.log(error);
            res.status(500).send("<h1>Internal Server Error</h1>" + error);
        }
    }
    
}

export default BeveragesController;
