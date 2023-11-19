/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB9mwJiexOyGddG1vX4ADb99XJiAg2RJxk',
  authDomain: 'thor-solutions-a3b18.firebaseapp.com',
  projectId: 'thor-solutions-a3b18',
  storageBucket: 'thor-solutions-a3b18.appspot.com',
  messagingSenderId: '214060603012',
  appId: '1:214060603012:web:9f29a67673b8792c6e54d1'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, app, auth }
