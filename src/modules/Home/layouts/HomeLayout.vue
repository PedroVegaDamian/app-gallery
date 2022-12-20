<script setup lang="ts">
import TheHeader from '@/shared/components/TheHeader.vue'
</script>

<template>
  <div class="homeLayout">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>
