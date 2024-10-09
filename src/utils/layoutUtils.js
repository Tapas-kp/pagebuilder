import { db } from '../firebase/firebasestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Save layout to Firestore
export const saveLayoutToDB = async (layout) => {
  try {
    await addDoc(collection(db, "layouts"), { layout });
    alert("Layout saved successfully");
  } catch (error) {
    console.error("Error saving layout: ", error);
  }
};

// Load layout from Firestore
export const loadLayoutFromDB = async () => {
  const layouts = [];
  const querySnapshot = await getDocs(collection(db, "layouts"));
  querySnapshot.forEach((doc) => {
    layouts.push(doc.data().layout);
  });
  return layouts[0];  // returning the first layout for simplicity
};
