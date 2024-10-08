
import { initializeApp } from "firebase/app";
import {firebase_url, api_key} from "./Data";


const firebaseConfig = {
  apiKey: api_key,
  authDomain: "todo-app-b5bb3.firebaseapp.com",
  projectId: "todo-app-b5bb3",
  storageBucket: "todo-app-b5bb3.appspot.com",
  messagingSenderId: "863136233624",
  appId: "1:863136233624:web:b38dd9f14e51237c40f8ed",
  databaseURL: firebase_url //This is to be added by me    
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//What is this initializing of firebase?
//This is the initialization of the firebase app with the firebase configuration object.
//This is done using the initializeApp function from the firebase/app module.
//This function takes the firebase configuration object as an argument.