import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const db = getFirestore();
const patientRef = doc(db, 'patient', 'rxAXRuf8b76rmwaMoXUO');

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "patient"));
  const patientData = [];
  querySnapshot.forEach((doc) => {
    patientData.push(doc.data());
  });
  return patientData;
}

const saveData = async (data) => {
  await updateDoc(patientRef, {
    medicalHistory: arrayUnion(data)
  });
}

export { getData, saveData };