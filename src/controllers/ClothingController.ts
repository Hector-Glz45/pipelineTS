import { Request,Response } from "express";
import AbstractController from "./AbstractController"
import clothingModel from "../modelsNOSQL/clothingModel";


class ClothingController extends AbstractController{
    //Singleton
    //Atributo de clase
    private static _instance: ClothingController;
    //Metodo de clase
    public static get instance():AbstractController{
        if(!this._instance){
            this._instance = new ClothingController("clothing");
        }
        return this._instance;
    }

    //Declarar todas las rutas del controlador
    protected initRoutes(): void {
        this.router.get("/consultClothing",this.getClothing.bind(this));
    }

    private async getClothing(req: Request,res: Response){
        try{
            let clothes = await clothingModel.scan().exec().promise(); 
            console.log(clothes);
            res.status(200).send(clothes[0].Items);

        }catch(error:any){
            console.log(error);
            res.status(500).send('Internal server error'+error);
        }
    }
}

export default ClothingController;