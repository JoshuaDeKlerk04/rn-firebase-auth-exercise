// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgnB1hcrCTJEkkaT4i8xSYrzZ-VkylqxY",
  authDomain: "dv300-classproject-2025.firebaseapp.com",
  projectId: "dv300-classproject-2025",
  storageBucket: "dv300-classproject-2025.firebasestorage.app",
  messagingSenderId: "1000270471116",
  appId: "1:1000270471116:web:86c9dfda65c19dfde0c769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// app variable represents the Firebase app instance

// Initialize all our services for our firebase app
export const auth = getAuth(app);  // variable that links to the Firebase Authentication service


//HOMEWORK:
//1. Create the RegistrationScreen UI ✅
//2. Create the registration authentication function in authServices ✅
//3. Add the functionality to your registration screen ✅
//4. add efficient navigation between the login and registration screens (stacks & navigation functions)
//5. BONUS: try and add the user data to the database (if applicable) after registration
//6. BONUS: add useContext for auth state management
//7. BONUS: fix the localstorage issue with we get in the terminal