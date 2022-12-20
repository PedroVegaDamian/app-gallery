<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  modelValue: string
  placeholder?: string
  autocomplete?: string
}>()
const emits = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const emitInput = (e: Event) => {
  const { value } = e.target as HTMLInputElement
  emits('update:modelValue', value)
}

const showPassword = ref(false)
const typeInput = computed(() => (showPassword.value ? 'text' : 'password'))
</script>

<template>
  <div class="inputPassword">
    <input
      :type="typeInput"
      @input="emitInput"
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      class="inputPassword__input"
    />
    <div class="inputPassword__eye" @click="showPassword = !showPassword">
      <span v-show="!showPassword">
        <i class="fa-solid fa-eye fa-lg"></i>
      </span>
      <span v-show="showPassword">
        <i class="fa-solid fa-eye-slash fa-lg"></i>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './InputPassword.scss';
</style>
