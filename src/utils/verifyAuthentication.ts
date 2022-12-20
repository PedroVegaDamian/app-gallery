import { getCurrentUser } from '@/modules/Auth/services'

type redirect = { name: string }

interface RedirectTo {
  redirectTo: redirect
}

interface OptionsVerifyAuthentication {
  ifHasAuthentication: RedirectTo | string
  ifNotHasAuthentication: RedirectTo | string
}

export const verifyAuthentication = async (
  options: OptionsVerifyAuthentication
) => {
  const user = await getCurrentUser()
  const { ifHasAuthentication, ifNotHasAuthentication } = options

  if (ifHasAuthentication === 'CONTINUE') {
    if (typeof ifNotHasAuthentication !== 'string') {
      if (user) return true

      return ifNotHasAuthentication.redirectTo
    }
  }

  if (ifNotHasAuthentication === 'CONTINUE') {
    if (typeof ifHasAuthentication !== 'string') {
      if (user) return ifHasAuthentication.redirectTo

      return true
    }
  }
}
