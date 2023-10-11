import { Client } from "amocrm-js"
import { ITokenData } from "amocrm-js/dist/interfaces/common";
import fs from "fs"
const config = {
    domain: 'daserfaa123mailru',
    auth: {
      client_id: 'f7363eed-65b4-4c8e-a01f-236be37157d2', 
      client_secret: 'i8eMhvWRUVMi9WfB08HTIUVJAaRuFSO16dXWRWO1aOg4Va7ehoiNSzXALzyAm3rt', 
      redirect_uri: 'https://example.com',
      code: 'def5020098c10f552ca131e586b7123685dbc8c458a5e10b7e5d097a104ee8e9d1f5fd3603150bf54e044057b5d1d7a63e4e7c417abcd0ab42307fb8640d1642b6752ae53d1617e62270b56858c0e181593370f29efc91dfb47ba716a53854ab16b01e9e5d8dd499a505e733e1ac16e489fb90d2cf8cb3501f5cfe650a98a426c95814b7f29727aa38dadc6c9a4a2d632510708d220aeba4dff8d044ceb688c798d150bc000519cd0663716bf6aa967777ea3e374049e842c91232648514291635aa054bd52af91428469604cc3ed5b2b674b25a75fa629617da7bd27fb6ed129022408c928447c0ab42d35eced213183e0d3eeb0231611c1eebc658b72bd32f9c7ad509987cfc0fdc373898c18c1a9e05cb68880172ef4bb3a0c553e0b2f52932ac6551c26cf6b95bc500cba363c487a96fb11751836f8c627deb9df2d8c04e9b8003745d208d353d62193fadad4abd2ac3b6a07e0cd3b90de3d0d9d64222b1afb9271491924be96227a1007952c2647b13e413d3c893fddfa34b4b92ae5454e9c17cf46ac30929f140fb0d677954d47404e5bd73c42eeec8aa0462ab9d50174b8859e04257bc76f155485d2de85e697a3d7cb7ab3ee1782eb6b27a00104808385a2d00159f289338b76a3c876826d8345a7144e23a7463ca6a6d1e78adc5f8c6e278', // Код для упрощённой авторизации, необязательный
    },
}

export class AmmoCrm{

    private client:Client;

    constructor(){
        this.client = new Client(config);
        this.init()
    }

    public async createLead(){
        const response = await this.client.request.post<any>("/api/v4/leads", [{name: "Сделка 1"}])
        const leadId = response.data._embedded.leads[0].id
        return {name: "Сделка", id: leadId}
    }

    public async createContact(){
        const response = await this.client.request.post<any>("/api/v4/contacts", [{name: "Контакт 1"}])
        const contactId = response.data._embedded.contacts[0].id
        return {name: "контакт", id: contactId}
    }

    public async createCompany(){
        const response = await this.client.request.post<any>("/api/v4/companies", [{name: "Компания 1"}])
        const companyid = response.data._embedded.companies[0].id
        return {name: "Компания", id: companyid}
    }

    private async init(){
        const token = this.getToken()
        this.client.token.setValue(token)   
    }

    private getToken(){
        const token = fs.readFileSync("token.json").toString()
        const currentToken = JSON.parse(token)
        return currentToken
    }
}