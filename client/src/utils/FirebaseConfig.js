import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjjNITPrpX-EuyDFkw_NF_49UcWFD3Ka0",
  authDomain: "whatsapp-clone-e9a6d.firebaseapp.com",
  projectId: "whatsapp-clone-e9a6d",
  storageBucket: "whatsapp-clone-e9a6d.appspot.com",
  messagingSenderId: "335669516356",
  appId: "1:335669516356:web:e14c1f9c02564779230411",
  measurementId: "G-Z7MRQQCDMF",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
