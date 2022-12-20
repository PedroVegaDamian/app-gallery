<script setup lang="ts">
import PhotoItem from './PhotoItem.vue'
import { Photos } from '@/modules/Home/interfaces/Photos'

interface Props {
  photos: Photos
}

defineProps<Props>()
</script>

<template>
  <div class="photoGrid">
    <PhotoItem
      :photo="photo"
      :key="photo.id"
      v-for="photo of photos"
    />
  </div>
</template>

<style lang="scss" scoped>
.photoGrid {
  gap: 1rem;
  display: grid;
  margin-inline: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
