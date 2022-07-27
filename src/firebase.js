
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCCeRzDb5nPQb8gYHM-i_i2qoxfnbifWI0",
  authDomain: "svelte-login-simple.firebaseapp.com",
  projectId: "svelte-login-simple",
  storageBucket: "svelte-login-simple.appspot.com",
  messagingSenderId: "707850540095",
  appId: "1:707850540095:web:649966726873107b58948a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);