<script setup lang="ts">
import { authStore } from '@/store'
import { notyf } from '@/utils/notyf'
import { useRouter } from 'vue-router'
import BaseButton from './BaseButton.vue'

const router = useRouter()

const { signOut } = authStore()

async function logout() {
  const { ok, code, message } = await signOut()

  if (ok) {
    notyf.success({ message: 'Sesión cerrada exitoso!!' })
    return router.push({ name: 'SignIn' })
  }

  code ? notyf.error({ message }) : console.error(message)
}
</script>

<template>
  <header class="theHeader">
    <RouterLink
      class="theHeader__logoLink"
      :to="{ name: 'Home' }"
    >
      <img
        width="50"
        height="50"
        alt="Vue logo"
        class="theHeader__logoImg"
        src="@/shared/assets/logo.png"
      />
    </RouterLink>
    <BaseButton
      :width="8"
      :height="2.2"
      label="Logout"
      color="outline"
      @on-click="logout"
    />
  </header>
</template>

<style scoped lang="scss">
@use '@/shared/scss/variables' as *;

.theHeader {
  height: 5rem;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-inline: 2rem;
  justify-content: space-between;
  background-color: $color-blue-dark;
}
</style>
