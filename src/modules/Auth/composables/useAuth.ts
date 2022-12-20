import { authModule } from '@/modules/Auth/store'
import { CredentialsAuth, ResponseAuth, User } from '@/modules/Auth/interfaces'
import { computed } from 'vue'

export const useAuth = () => {
  const store = authModule()

  return {
    signIn: (credentials: CredentialsAuth): Promise<ResponseAuth> =>
      store.signIn(credentials),
    signUp: (credentials: CredentialsAuth): Promise<ResponseAuth> =>
      store.signUp(credentials),
    signOut: (): Promise<ResponseAuth> => store.signOut(),
    getUser: computed((): User => store.getUser)
  }
}
