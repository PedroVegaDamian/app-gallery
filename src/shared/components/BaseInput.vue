<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const emitInput = (e: Event) => {
  const { value } = e.target as HTMLInputElement
  emits('update:modelValue', value)
}
</script>

<template>
  <input class="baseInput" @input="emitInput" :value="modelValue" />
</template>

<style lang="scss" scoped>
@use '@/shared/scss/variables' as *;

.baseInput {
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  padding-inline: 0.8rem;
  color: $color-blue-dark;
  caret-color: $color-gray;
  border: 1px solid $color-gray;

  &::placeholder {
    color: $color-gray;
  }
}
</style>
