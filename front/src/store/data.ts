import { createLead, createContact, createCompany } from "../api/api";
import { AxiosResponse } from "axios";


export type ItemTypes = "lead" | "contact" | "company"

export const apiData: Record<ItemTypes, () => Promise<AxiosResponse>> = {
    lead: createLead,
    contact: createContact,
    company: createCompany
}