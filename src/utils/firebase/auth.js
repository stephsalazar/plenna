import { app } from './config'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const login = async (email, password) => {
  console.log(email, password);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('Sigue funcionando');
  } catch (error) {
    const errorMessage = error.message;
    console.log(errorMessage);
  }
}

export default login;
  