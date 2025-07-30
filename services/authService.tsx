// TODO: Create Firebase Auth Functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase"

export const loginUser = (email: string, password: string) => {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log("User logged in:", user.email);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Error Message:", errorMessage);
    });
}

// TODO: Registration Function
export const registerUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        console.log("User registered:", user.email);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Error Message:", errorMessage);
    });
}

// Logout Function
export const logoutUser = () => {
    signOut(auth)
        .then(() => {
            console.log("User logged out successfully");
        })
}

// User Info Function
export const getUserInfo = () => {
    const user = auth.currentUser;

    if (user) { //logic handling and to not get null errors
        return user;
    } else {
        return null;
    }
}