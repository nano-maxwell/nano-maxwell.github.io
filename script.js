// script.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
require('dotenv').config();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "learn-anything-project.firebaseapp.com",
  projectId: "learn-anything-project",
  storageBucket: "learn-anything-project.firebasestorage.app",
  messagingSenderId: "171376761495",
  appId: "1:171376761495:web:59995585b0dcede5f9e7d2",
  measurementId: "G-BPGP8NRYB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const signupForm = document.getElementById('signup-form');

document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('subjectInput');
    const charCount = document.getElementById('charCount');
    const maxChars = 75;

    input.addEventListener('input', () => {
        const currentLength = input.value.length;
        charCount.textContent = `${currentLength}/${maxChars}`;

        if (currentLength > maxChars) {
            input.value = input.value.substring(0, maxChars);
            charCount.textContent = `${maxChars}/${maxChars}`;
        }
    });
});

function goToLogIn() {
    window.location.href = 'log-in.html';
}
