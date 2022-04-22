import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAspTVih8MQDeo8gLTSwdOEgT6zOHxLOBo",
    authDomain: "bankusertb.firebaseapp.com",
    projectId: "bankusertb",
    storageBucket: "bankusertb.appspot.com",
    messagingSenderId: "135591702066",
    appId: "1:135591702066:web:9ec5cd9bf23b93b369d62b"
})

export const auth = app.auth()
export default app