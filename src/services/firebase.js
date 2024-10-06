'use client';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};


export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);



const colRef = collection(db, 'cartItems');

getDocs(colRef).then((snapshot) => {
    let cartItem = [];
    snapshot.docs.forEach((doc) => {
cartItem.push({ ...doc.data(), id: doc.id });
    });
    // console.log(cartItem);
  }).catch(err => {
    //   console.log(err.message)
  });

//   async function logCollectionItems() {
//     try {
//       const querySnapshot = await getDocs(collection(db, "cartItems"));
//       querySnapshot.forEach((doc) => {
//         console.log(doc.id, "=>", doc.data());
//       });
//     } catch (error) {
//       console.error("Error fetching collection items:", error);
//     }
//   }

//  logCollectionItems();


