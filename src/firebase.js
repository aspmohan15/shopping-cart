import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ1ANjX_Ue7doSKPtoswO3ojvHuGntiOU",
  authDomain: "shoping-cart-40d15.firebaseapp.com",
  projectId: "shoping-cart-40d15",
  storageBucket: "shoping-cart-40d15.appspot.com",
  messagingSenderId: "259387147308",
  appId: "1:259387147308:web:48fecd6610c832a83fbd89",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signOutUser = () => signOut(auth);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
