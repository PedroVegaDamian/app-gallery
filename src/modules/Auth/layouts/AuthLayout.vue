<template>
  <div class="authLayout">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@use '@/shared/scss/variables' as *;
.authLayout {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    -25deg,
    $color-primary-gradient,
    $color-secondary-gradient
  );
}
</style>
