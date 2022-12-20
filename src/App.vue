<script setup lang="ts">
import { onMounted } from 'vue'
import { authStore } from '@/store'

const store = authStore()

onMounted(() => {
  store.init()
})
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@use '@/shared/scss';
</style>
