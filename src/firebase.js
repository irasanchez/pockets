import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "xxxx",
  authDomain: "your_domain.firebaseapp.com",
  projectId: "your_project_id",
};

// Enable offline persistence
firebase.firestore().enablePersistence()
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a time.
          console.log('Persistence failed');
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          console.log('Persistence is not available in this browser');
      }
  });

firebase.initializeApp(firebaseConfig);

export default firebase;
