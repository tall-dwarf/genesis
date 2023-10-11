import { BaseRouter, RouterMethods } from "./BaseRouter";
import { Response, Request } from "express";

export class ContactRouter extends BaseRouter{

    private async createContact(req: Request, res: Response){
        try{
            const leadData = await this.crm.createContact()
            this.sendOk(res, leadData)
        }catch{
            this.sendFail(res)
        }
    }

    protected getRouterConfig(){
        return [
            {
                method: "post" as RouterMethods,
                handler: this.createContact.bind(this),
                path: "/contact"
            }
        ]
    }
}