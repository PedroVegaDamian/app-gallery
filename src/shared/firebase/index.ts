import { firebaseConfig } from './config'
import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

initializeApp(firebaseConfig)

export const auth = getAuth()
export const storage = getStorage()
export const firestore = getFirestore()
