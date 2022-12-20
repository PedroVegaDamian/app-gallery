import { useForm, useField } from 'vee-validate'
import { validationSchema } from '@/modules/Auth/utils'
import { CredentialsAuth } from '@/modules/Auth/interfaces'

export const useSignIn = (
  initialValues: CredentialsAuth = { email: '', password: '' }
) => {
  const { meta } = useForm<CredentialsAuth>({
    initialValues,
    validationSchema
  })

  const { value: email, errorMessage: emailError } = useField<string>('email')
  const { value: password, errorMessage: passwordError } =
    useField<string>('password')

  return {
    meta,
    email,
    password,
    emailError,
    passwordError
  }
}
