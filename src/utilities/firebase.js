// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKEHxUtXkam87DOqe18SIFIeltD-jxlME",
  authDomain: "vue-full-course-d0a48.firebaseapp.com",
  projectId: "vue-full-course-d0a48",
  storageBucket: "vue-full-course-d0a48.appspot.com",
  messagingSenderId: "1028560044598",
  appId: "1:1028560044598:web:42dcda13b62726d30d0e97"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase