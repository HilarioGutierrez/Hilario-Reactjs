import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfzrv43l7fuACcGDgiuTRRpyOhQ1g-264",
  authDomain: "wayna-vinos-coder.firebaseapp.com",
  projectId: "wayna-vinos-coder",
  storageBucket: "wayna-vinos-coder.appspot.com",
  messagingSenderId: "39048864982",
  appId: "1:39048864982:web:23de422c61725a79a79577",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;
