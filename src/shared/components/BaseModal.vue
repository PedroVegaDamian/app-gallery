<script setup lang="ts"></script>

<template>
  <div class="baseModal">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.baseModal {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  backdrop-filter: blur(3px);
}
</style>
