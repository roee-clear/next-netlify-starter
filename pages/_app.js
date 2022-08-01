import '@styles/globals.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3dqBjTunu0ZxAjQbuQBRcgCwnqME2tfs",
  authDomain: "netlify-test-288a1.firebaseapp.com",
  projectId: "netlify-test-288a1",
  storageBucket: "netlify-test-288a1.appspot.com",
  messagingSenderId: "550957186344",
  appId: "1:550957186344:web:f7dea84b47aa1c758ea41d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
