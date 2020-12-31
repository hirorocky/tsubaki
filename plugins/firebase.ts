import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// SDKを使用するためのConfig情報
const firebaseConfig = {
  apiKey: 'AIzaSyDdOuuskrW6acWWe_5XdfNpK5AiyBb1QdA',
  authDomain: 'tsubaki-b68b5.firebaseapp.com',
  projectId: 'tsubaki-b68b5',
  storageBucket: 'tsubaki-b68b5.appspot.com',
  messagingSenderId: '573550647255',
  appId: '1:573550647255:web:bd7aea8b06c6a22ad5dd92',
  measurementId: 'G-LL53RSXEVJ',
}
// Appの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// 今回使用するAPI
export const auth = firebase.auth()
export const firestore = firebase.firestore()
