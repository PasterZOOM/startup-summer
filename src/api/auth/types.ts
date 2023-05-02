export type AuthResponseType = {
  access_token: string
  refresh_token: string
  ttl: number
  expires_in: number
  token_type: string
}
export type AuthErrorType = {
  error: {
    code: number
    message: string
    error: string
  }
}
