import { useForm, useField } from 'vee-validate'
import { validationSchema } from '@/modules/Auth/utils'
import { CredentialsCreateUser } from '@/modules/Auth/interfaces'

export const useSignUp = (
  initialValues: CredentialsCreateUser = {
    email: '',
    password: '',
    confirmPassword: ''
  }
) => {
  const { email: validEmail, password: validPassword } = validationSchema

  const { meta } = useForm<CredentialsCreateUser>({
    initialValues,
    validationSchema: {
      email: validEmail,
      password: validPassword,
      confirmPassword: validPassword
    }
  })

  const { value: email, errorMessage: emailError } = useField<string>('email')
  const { value: password, errorMessage: passwordError } =
    useField<string>('password')
  const { value: confirmPassword, errorMessage: confirmPasswordError } =
    useField<string>('confirmPassword')

  return {
    meta,
    email,
    password,
    emailError,
    passwordError,
    confirmPassword,
    confirmPasswordError
  }
}
