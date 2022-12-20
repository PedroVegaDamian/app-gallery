export const validationSchema = {
  email(value: string) {
    if (
      value &&
      !value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return '* Por favor, escriba un correo válido'
    }
    if (value && value.trim()) return true
    return '* Ingresa tu dirección de correo electrónico.'
  },
  password(value: string) {
    if (value && value.length < 6) {
      return '* La contraseña debe de tener mas de 5 caractéres.'
    }
    if (value && value.trim()) return true
    return '* Por favor introduce tu contraseña.'
  }
}
