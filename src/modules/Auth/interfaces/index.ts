export type User = { email: string | null } | null

export interface CredentialsAuth {
  email: string
  password: string
}

export interface CredentialsCreateUser extends CredentialsAuth {
  confirmPassword: string
}

export interface ResponseAuth {
  ok: boolean
  code?: string
  message?: string
  data: User
}

export interface ErrorResponse {
  code: string
  message: string
}

export interface AuthState {
  user: User
}
