export interface AuthUser {
  id: string
  email: string
  created_at: string
}

export interface AuthError {
  message: string
  code?: string
}

export interface AuthResponse {
  error: AuthError | null
  data?: any
}
