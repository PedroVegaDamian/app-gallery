import { auth } from '@/shared/firebase'
import {
  signOut,
  User as UserAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { ErrorResponse, ResponseAuth } from '@/modules/Auth/interfaces'
import { messageErrorCode } from '@/modules/Auth/services/errorCodeMessages'

export const createUser = async (
  email: string,
  password: string
): Promise<ResponseAuth> => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return { ok: true, data: { email: user.email } }
  } catch (error) {
    const { message, code } = error as ErrorResponse
    return {
      code,
      ok: false,
      data: null,
      message: messageErrorCode(code, message)
    }
  }
}

export const login = async (
  email: string,
  password: string
): Promise<ResponseAuth> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return { ok: true, data: { email: user.email } }
  } catch (error) {
    const { message, code } = error as ErrorResponse
    return {
      code,
      ok: false,
      data: null,
      message: messageErrorCode(code, message)
    }
  }
}

export const logout = async (): Promise<ResponseAuth> => {
  try {
    await signOut(auth)
    return { ok: true, data: null }
  } catch (error) {
    const { message, code } = error as ErrorResponse
    return {
      code,
      ok: false,
      data: null,
      message: messageErrorCode(code, message)
    }
  }
}

export const getCurrentUser = () => {
  return new Promise((resolve: (value: UserAuth | null) => void, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        resolve(user)
      },
      error => reject(error),
      () => unsubscribe()
    )
  })
}
