import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAYvdsjCn1k0GW-NWBVE16GooAlkOto_6o",
    authDomain: "a1-consultancy-35909.firebaseapp.com",
    projectId: "a1-consultancy-35909",
    storageBucket: "a1-consultancy-35909.appspot.com",
    messagingSenderId: "938379570552",
    appId: "1:938379570552:web:d295f4bf7ca8f9d342ac8d",
    measurementId: "G-4GJJMH7QS8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);