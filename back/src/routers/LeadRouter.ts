import { BaseRouter, RouterMethods } from "./BaseRouter";
import { Response, Request } from "express";

export class LeadRouter extends BaseRouter{

    private async createLead(req: Request, res: Response){
        try{
            const leadData = await this.crm.createLead()
            this.sendOk(res, leadData)
        }catch{
            this.sendFail(res)
        }
        
    }

    protected getRouterConfig(){
        return [
            {
                method: "post" as RouterMethods,
                handler: this.createLead.bind(this),
                path: "/lead"
            }
        ]
    }
}