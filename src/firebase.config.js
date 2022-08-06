// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDq9WomR9HPYTedb4F_u5IDrSFYLEalQHU',
  authDomain: 'house-marketplace-app-f7d28.firebaseapp.com',
  projectId: 'house-marketplace-app-f7d28',
  storageBucket: 'house-marketplace-app-f7d28.appspot.com',
  messagingSenderId: '658766803973',
  appId: '1:658766803973:web:a4a35bf7e938ca4986986c',
}
// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()

// The apiKey in this configuration snippet just identifies your
// Firebase project on the Google servers. It is not a security risk
// for someone to know it. In fact, it is necessary for them to know it,
// in order for them to interact with your Firebase project. This same
// configuration data is also included in every iOS and Android app that
// uses Firebase as its backend.
