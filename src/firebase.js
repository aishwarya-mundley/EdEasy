import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQyZi8ybPzipu57vqXUellSa3C8xEuy60',
  authDomain: 'edeasy-eac77.firebaseapp.com',
  projectId: 'edeasy-eac77',
  storageBucket: 'edeasy-eac77.appspot.com',
  messagingSenderId: '965951856108',
  appId: '1:965951856108:web:e6f190a7a159c9bd55f4c9',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
