<script lang="ts" setup>
import { notyf } from '@/utils/notyf'
import { useRouter } from 'vue-router'
import BaseInput from '@/shared/components/BaseInput.vue'
import BaseButton from '@/shared/components/BaseButton.vue'
import { useAuth, useSignUp } from '@/modules/Auth/composables'
import InputPassword from '@/modules/Auth/components/InputPassword'

const router = useRouter()
const { signUp, getUser } = useAuth()
const {
  meta,
  email,
  password,
  emailError,
  passwordError,
  confirmPassword,
  confirmPasswordError
} = useSignUp()

async function createUser() {
  if (password.value !== confirmPassword.value) {
    return notyf.error({
      message: 'Las contraseñas no coinciden, intente nuevamente.'
    })
  }

  const { ok, code, message } = await signUp({
    email: email.value,
    password: password.value
  })

  if (ok) {
    notyf.success({ message: `Bienvenido!! ${getUser.value?.email}` })
    return router.push({ name: 'Home' })
  }

  code ? notyf.error({ message }) : console.error(message)
}
</script>

<template>
  <div class="formSignUp">
    <h1 class="formSignUp__title">Create account</h1>
    <p class="formSignUp__text">
      Already have an account?
      <router-link class="formSignUp__textLink" :to="{ name: 'SignIn' }">
        Sign In
      </router-link>
    </p>
    <form @submit.prevent="createUser" class="formSignUp__form">
      <BaseInput v-model="email" type="email" placeholder="Email" />
      <p class="formSignUp__formInputErrorMessage">
        {{ emailError }}
      </p>
      <InputPassword
        v-model="password"
        placeholder="Password"
        autocomplete="new-password"
      />
      <p class="formSignUp__formInputErrorMessage">
        {{ passwordError }}
      </p>
      <InputPassword v-model="confirmPassword" placeholder="Confirm password" />
      <p class="formSignUp__formInputErrorMessage">
        {{ confirmPasswordError }}
      </p>
      <BaseButton
        type="submit"
        label="Sign Up"
        color="secondary"
        :disabled="!meta.valid"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use 'FormSignUp';
</style>
