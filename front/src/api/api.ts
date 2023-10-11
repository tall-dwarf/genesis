import axios from 'axios';
import { ErrorResponse, SERVER_URL, SuccessfulResponse } from './config';
import { AmmoItem } from '../store/useAmmo';



export const createLead = async () => {
    const response = await axios.post<SuccessfulResponse<AmmoItem> | ErrorResponse>(SERVER_URL + "/lead")
    return response
}

export const createContact = async () => {
    const response = await axios.post<SuccessfulResponse<AmmoItem> | ErrorResponse>(SERVER_URL + "/contact")
    return response
}

export const createCompany = async () => {
    const response = await axios.post<SuccessfulResponse<AmmoItem> | ErrorResponse>(SERVER_URL + "/company")
    return response
}