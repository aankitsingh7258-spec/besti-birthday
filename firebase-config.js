// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjW4Gc67HcRKYvLDVKm3CuHAZgWKBERpg",
  authDomain: "besti-birthday.firebaseapp.com",
  projectId: "besti-birthday",
  storageBucket: "besti-birthday.firebasestorage.app",
  messagingSenderId: "523411087217",
  appId: "1:523411087217:web:97289aee4b21b203c520d0",
  measurementId: "G-6056BRKWV9"
};

firebase.initializeApp(firebaseConfig);

window.db = firebase.firestore();