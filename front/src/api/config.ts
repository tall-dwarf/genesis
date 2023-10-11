export const SERVER_URL = "http://localhost:8083/api/v1"

export type SuccessfulResponse<T> = {
    data: T,
    messages: string,
    ok: true
}

export type ErrorResponse = {
    messages: string,
    ok: false
}