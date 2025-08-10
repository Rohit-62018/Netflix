import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
         getAuth,
         signInWithEmailAndPassword, 
         signOut} from "firebase/auth";

import { addDoc,
         collection,
         getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAoJCNBOMF1iimwL3NCCiawBwjXfkZ1bx0",
  authDomain: "netflix-clone-6695f.firebaseapp.com",
  projectId: "netflix-clone-6695f",
  storageBucket: "netflix-clone-6695f.firebasestorage.app",
  messagingSenderId: "1034247987497",
  appId: "1:1034247987497:web:17391cbd8494d0f351d738",
  measurementId: "G-EGCP1FERFC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    } catch (err) {
        toast.error(err.code.split('/')[1].split('-').join(" "));
    }
};
 
const login =  async(email, password)=>{
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
            toast.error(err.code.split('/')[1].split('-').join(" "));
        }
    }

const logout = async()=>{
    await signOut(auth);
}

export {auth, db, signup, logout, login}
