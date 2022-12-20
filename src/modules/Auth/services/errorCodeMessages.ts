import { AuthErrorCodes } from 'firebase/auth'

export const messageErrorCode = (code: string, message: string) => {
  switch (code) {
    case AuthErrorCodes.INVALID_PASSWORD:
      message = 'Password incorrecto, por favor intentelo nuevamente.'
      break
    case AuthErrorCodes.USER_DELETED:
      message = 'Usuario no encontrado, por favor intente nuevamente.'
      break
    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
      message = 'Hizo muchos intentos de iniciar sesión, intente más tarde.'
      break
    case AuthErrorCodes.EMAIL_EXISTS:
      message = 'El correo ya está en uso, pruebe con otro por favor.'
      break
    case AuthErrorCodes.INVALID_EMAIL:
      message = 'El correo es inválido, pruebe con otro por favor.'
      break
    case AuthErrorCodes.WEAK_PASSWORD:
      message = 'La contraseña debe de tener al menos 6 caractéres.'
      break
    case AuthErrorCodes.INTERNAL_ERROR:
      message = 'Upss.. ocurrió un error al autenticarse. Intentelo nuevamente.'
  }

  return message
}
