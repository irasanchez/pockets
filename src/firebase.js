import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "xxxx",
  authDomain: "your_domain.firebaseapp.com",
  projectId: "your_project_id",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
