import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcH0QTWW3UGL9wD96m6zmHd_ueG3oA8s4",
    authDomain: "proyecto-react-e044b.firebaseapp.com",
    projectId: "proyecto-react-e044b",
    storageBucket: "proyecto-react-e044b.appspot.com",
    messagingSenderId: "1081830802496",
    appId: "1:1081830802496:web:0c43aff606033c9c358ba5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);