import { authModule } from '@/modules/Auth/store'
import { storage, firestore } from '@/shared/firebase'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const photosRef = collection(firestore, 'photos')
const store = authModule()

const savePhoto = async (urlPhoto: string) => {
  try {
    const data = {
      urlPhoto,
      userEmail: store.getUser?.email
    }
    const docRef = await addDoc(photosRef, data)
    return { id: docRef.id, ...data }
  } catch (error) {
    console.error(error)
  }
}

export const uploadPhoto = (filePhoto: File) => {
  const userEmail = store.getUser
  const URL_LOCATION = `user__${userEmail ? userEmail.email : 'error'}`

  const storageRef = ref(storage, URL_LOCATION)

  const photoRef = ref(storageRef, filePhoto.name)
  const uploadTask = uploadBytesResumable(photoRef, filePhoto)

  uploadTask.on(
    'state_changed',
    snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.info('Upload is ' + progress + '% done')
    },
    error => {
      console.error('Hubo un error', error)
    },
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
      const valuePhoto = await savePhoto(downloadURL)
      console.log('valuePhoto => ', valuePhoto)
    }
  )
}

export const getPhotos = async (): Promise<
  { id: string; urlPhoto: string; userEmail: string }[] | null
> => {
  try {
    const q = query(photosRef, where('userEmail', '==', store.getUser?.email))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as { id: string; urlPhoto: string; userEmail: string }[]
  } catch (error) {
    console.error(error)
    return null
  }
}
