<script setup lang="ts">
import { Photo } from '@/modules/Home/interfaces/Photos'

interface Props {
  photo: Photo
}

const props = defineProps<Props>()

const handleClick = () => {
  console.log(props.photo.id)
}
</script>

<template>
  <div
    class="photoItem"
    @click="handleClick"
  >
    <img
      :src="photo.urlPhoto"
      :alt="photo.userEmail"
      class="photoItem__Img"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/shared/scss/variables' as *;

.photoItem {
  height: 300px;
  cursor: pointer;
  overflow: hidden;
  background-color: #000;

  &__Img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
