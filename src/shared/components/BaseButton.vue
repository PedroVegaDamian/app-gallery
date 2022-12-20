<script setup lang="ts">
type Colors = 'primary' | 'secondary' | 'danger' | 'outline'
type Size = 'full' | number

interface Props {
  label: string
  color?: Colors
  disabled?: boolean
  width?: Size
  height?: Size
}
withDefaults(defineProps<Props>(), {
  width: 'full',
  height: 3
})

const styledSize = (size: Size) => {
  return size === 'full' ? '100%' : `${size}rem`
}

const emits = defineEmits<{ (event: 'on-click'): void }>()
</script>

<template>
  <button
    :disabled="disabled"
    @click="emits('on-click')"
    :class="['baseButton', color && `--${color}`, disabled && '--disabled']"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
@use '@/shared/scss/variables' as *;

.baseButton {
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: $color-white;
  border-radius: 0.5rem;
  width: v-bind(styledSize(width));
  height: v-bind(styledSize(height));
  background-color: $color-button-primary;

  &.--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.--primary {
    background-color: $color-button-primary;
  }

  &.--secondary {
    background-color: $color-button-secondary;
  }

  &.--danger {
    background-color: $color-error;
  }

  &.--outline {
    background-color: transparent;
    border: 1px solid $color-white;
  }
}
</style>
