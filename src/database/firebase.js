import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD6CgqmSY4-LMVCRZbNuLCB0ZPbUZu_5eg",
  authDomain: "app-domain-dcd1d.firebaseapp.com",
  projectId: "app-domain-dcd1d",
  storageBucket: "app-domain-dcd1d.appspot.com",
  messagingSenderId: "762030217594",
  appId: "1:762030217594:web:5865c97bffe41862f15ec3"
}
  

  const app = initializeApp(firebaseConfig);


  export const db = getFirestore();

  export const storage = getStorage(app) 