import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { config } from 'dotenv';
// Load the environment variables from .env file
config();

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence()
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          console.log('Persistence failed');
      } else if (err.code === 'unimplemented') {
          console.log('Persistence is not available in this browser');
      }
  });

const db = firebase.firestore();

const addPocket = async (pocketData) => {
  return await db.collection('pockets').add(pocketData);
}

const deletePocket = async (pocketId) => {
  return await db.collection('pockets').doc(pocketId).delete();
}

const bulkDeletePocket = async (pocketIds) => {
  const batch = db.batch();

  pocketIds.forEach((id) => {
    const docRef = db.collection('pockets').doc(id);
    batch.delete(docRef);
  });

  return await batch.commit();
}

const searchPocket = async (searchField, searchValue) => {
  return await db.collection('pockets')
    .where(searchField, '==', searchValue)
    .get();
}

const getPocketByName = async (pocketName) => {
  const querySnapshot = await db.collection('pockets')
    .where('name', '==', pocketName)
    .limit(1)
    .get();
    
  if (!querySnapshot.empty) {
    return querySnapshot.docs[0];
  } else {
    return null;
  }
}

const getPocketById = async (pocketId) => {
  const snapshot = await db.collection('pockets').doc(pocketId).get();
  if (snapshot.exists) {
    return snapshot.data();
  } else {
    return null;
  }
}


export default firebase;
export { getPocketById, getPocketByName, addPocket, deletePocket, bulkDeletePocket, searchPocket };
