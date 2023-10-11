import express, { Router, Response, Request } from "express";
import { AmmoCrm } from "../crm/AmmoCrm";

export type RouterMethods = "get" | "post"

type RouterconfigItem = {
    method: RouterMethods,
    handler: (res: Request, req: Response) => void,
    path: string,
}

export abstract class BaseRouter{

    protected crm: AmmoCrm;
    private router: Router;

    constructor(){
        this.router = express.Router()
        this.crm = new AmmoCrm();
        this.init()
    }

    private init(){
        const routerConfig = this.getRouterConfig()

        for(const confItem of routerConfig){
            this.router[confItem.method](confItem.path, confItem.handler)
        }
    }

    protected abstract getRouterConfig(): RouterconfigItem[]

    public getRouter(){
        return this.router
    }

    protected sendOk(res: Response, data: any){
       return res.status(200).send(JSON.stringify({messages: "Успешное выполнение операции", ok: true, data: data}))
    } 

    protected sendFail(res: Response){
        return res.status(400).send(JSON.stringify({messages: "произошла ошибка", ok: false}))
    }
}