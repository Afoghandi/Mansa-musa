import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: 'AIzaSyDEH6ct6vOioUdCBi7pudiACwXxKe1RXic',
    authDomain: 'mansa-musa-83e58.firebaseapp.com',
    databaseURL: 'https://mansa-musa-83e58.firebaseio.com',
    projectId: 'mansa-musa-83e58',
    storageBucket: 'mansa-musa-83e58.appspot.com',
    messagingSenderId: '708375676888',
    appId: '1:708375676888:web:51189c70cbc40e3b5b14ad',
    measurementId: 'G-6BJFGG3BE9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;