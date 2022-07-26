import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAOZ6Z6rZMPwOTbI58ENeHzhE8YxIQbhAI",
        authDomain: "clone-654c9.firebaseapp.com",
        projectId: "clone-654c9",
        storageBucket: "clone-654c9.appspot.com",
        messagingSenderId: "874782138732",
        appId: "1:874782138732:web:1a54c4eeaf9aec4f605349",
        measurementId: "G-B6CZN2TJSQ"
      

});


const auth = firebase.default.auth();

export {auth};
