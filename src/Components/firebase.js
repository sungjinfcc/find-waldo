import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const connectFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBPlnZVc4XuIq3bnAmVm9m95l9RiNS7e-g",
    authDomain: "find-waldo-9e005.firebaseapp.com",
    projectId: "find-waldo-9e005",
    storageBucket: "find-waldo-9e005.appspot.com",
    messagingSenderId: "936244696747",
    appId: "1:936244696747:web:72f36b48caa87fa18209ee",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getRecords() {
    const recordsCol = collection(db, "records");
    const recordSnapshot = await getDocs(recordsCol);
    const recordList = recordSnapshot.docs.map((doc) => doc.data());
    return recordList;
  }
  async function addRecord(name, record) {
    const recordsCol = collection(db, "records");
    const newRecord = { name, record };

    try {
      const docRef = await addDoc(recordsCol, newRecord);
      alert("Document written with ID: ", docRef.id);
    } catch (error) {
      alert("Error adding record to Firebase:", error);
    }
  }

  return { app, db, getRecords, addRecord };
};

export default connectFirebase;
