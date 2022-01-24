import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore();

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "patient"));
  const patientData = [];
  querySnapshot.forEach((doc) => {
    patientData.push(doc.data());
  });
  return patientData;
}


export default getData;