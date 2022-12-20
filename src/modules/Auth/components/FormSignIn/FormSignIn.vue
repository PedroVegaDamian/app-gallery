<script lang="ts" setup>
import { notyf } from '@/utils/notyf'
import { useRouter } from 'vue-router'
import BaseInput from '@/shared/components/BaseInput.vue'
import BaseButton from '@/shared/components/BaseButton.vue'
import { useAuth, useSignIn } from '@/modules/Auth/composables'
import InputPassword from '@/modules/Auth/components/InputPassword'

const router = useRouter()
const { signIn, getUser } = useAuth()
const { meta, email, emailError, password, passwordError } = useSignIn()

async function login() {
  const { ok, code, message } = await signIn({
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
  <div class="formSignIn">
    <h1 class="formSignIn__title">Login</h1>
    <p class="formSignIn__text">
      You do not have an account?
      <router-link class="formSignIn__textLink" :to="{ name: 'SignUp' }">
        Sign Up
      </router-link>
    </p>
    <form class="formSignIn__form" @submit.prevent="login">
      <BaseInput v-model="email" type="email" placeholder="Email" />
      <p class="formSignIn__formInputErrorMessage">
        {{ emailError }}
      </p>
      <InputPassword v-model="password" placeholder="Password" />
      <p class="formSignIn__formInputErrorMessage">
        {{ passwordError }}
      </p>
      <BaseButton type="submit" label="Sign In" :disabled="!meta.valid" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use 'FormSignIn';
</style>
