// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAdRZQSw3ADFWRaSUUlIH7j4re-jCibbc",
    authDomain: "course-enroll-app-10.firebaseapp.com",
    projectId: "course-enroll-app-10",
    storageBucket: "course-enroll-app-10.appspot.com",
    messagingSenderId: "425138268981",
    appId: "1:425138268981:web:d686efb6a83fd9b4b07a7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;