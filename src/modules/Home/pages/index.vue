<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getPhotos, uploadPhoto } from '@/modules/Home/services'
import { Photos } from '@/modules/Home/interfaces/Photos'
import PhotoGrid from '@/modules/Home/components/PhotoGrid.vue'
import BaseModal from '@/shared/components/BaseModal.vue'

// Upload Photo
const filePhoto = ref<File | null>(null)
const photos = ref<Photos | null>(null)

const availableExtensions = ['.jpg', '.png', '.jpeg']
const onInput = (e: Event) => {
  const inputElement = e.target as HTMLInputElement
  const fileList = inputElement.files as FileList
  const file = fileList[0]
  if (
    file.name.includes(availableExtensions[0]) ||
    file.name.includes(availableExtensions[1]) ||
    file.name.includes(availableExtensions[2])
  ) {
    filePhoto.value = file
    upload()
  } else {
    console.log('No es la extensión correcta')
  }
}

const upload = () => {
  if (!filePhoto.value) return console.log('No hay FilePhoto')
  uploadPhoto(filePhoto.value)
}

onMounted(() => {
  getPhotos().then(data => {
    photos.value = data
  })
})
</script>

<template>
  <div class="home">
    <h1 class="home__title">Photo Gallery App</h1>
    <input
      type="file"
      id="fileInput"
      @input="onInput"
      class="home__inputFile"
      :accept="availableExtensions.join(',')"
    />
    <label
      for="fileInput"
      class="home__inputFileBtn"
    >
      +
    </label>
    <template v-if="photos">
      <PhotoGrid :photos="photos" />
      <!-- <Teleport to="body">
        <BaseModal>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae dolor molestias odit? Voluptatum sequi nostrum, earum
            beatae at necessitatibus obcaecati assumenda magni suscipit voluptas
            et esse ut consequatur amet deleniti.
          </p>
        </BaseModal>
      </Teleport> -->
    </template>
    <template v-else>
      <h2 class="home__loading">Loading..</h2>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use '@/shared/scss/variables' as *;

.home {
  color: $color-blue-dark;

  &__title {
    text-align: center;
    margin-bottom: 1rem;
  }

  &__inputFile {
    display: none;

    &Btn {
      $size: 2rem;

      width: $size;
      height: $size;
      display: grid;
      color: white;
      cursor: pointer;
      border-radius: 50%;
      margin-bottom: 2rem;
      margin-inline: auto;
      place-content: center;
      background: linear-gradient(
        -25deg,
        $color-primary-gradient,
        $color-secondary-gradient
      );
    }
  }

  &__loading {
    margin-inline: 2rem;
  }
}
</style>
