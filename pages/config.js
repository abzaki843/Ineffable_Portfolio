import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyDjU-Us-Oj1aBJ5ojy_xMcT1EWxfqwzB68',
  authDomain: 'ineffable-portfolio.firebaseapp.com',
  projectId: 'ineffable-portfolio',
  storageBucket: 'ineffable-portfolio.appspot.com',
  messagingSenderId: '58639079783',
  appId: '1:58639079783:web:bb81383d7c0e7e3c55f7c2',
  measurementId: 'G-VCV44MB807',
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase
export default fire
console.log('firebase as installed')
