import { BaseRouter, RouterMethods } from "./BaseRouter";
import { Response, Request } from "express";

export class CompanyRouter extends BaseRouter{


    private async createCompany(req: Request, res: Response){
        try{
            const leadData = await this.crm.createCompany()
            this.sendOk(res, leadData)
        }catch{
            this.sendFail(res)
        }
    }

    protected getRouterConfig(){
        return [
            {
                method: "post" as RouterMethods,
                handler: this.createCompany.bind(this),
                path: "/company"
            }
        ]
    }
}