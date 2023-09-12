import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, useIonRouter } from '@ionic/react';
import { useParams } from "react-router-dom";

// import firebase from '../firebase';

interface User {
  name: string;
  email: string;
  // You may add more fields based on your Users' collection
}

const Profile: React.FC = () => {
  
  const [user, setUser] = useState<User|null>(null);
  
  // const router = useIonRouter();
  const params = useParams() 
  const userid: string = params.userid as string; // Extract userid from URL

//   useEffect(() => {
//    // Check if userid is defined
//     if(userid) {
//       const fetchData = async () => {
//         const db = firebase.firestore();
      
//         const userRef = db.collection('users').doc(userid); 
//         const doc = await userRef.get();
//         if (doc.exists) {
//           setUser(doc.data() as User);
//         }
//       }
    
//       fetchData();
//     }  
// }, [userid]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {user && 
          <>
            <h1>{user.name}</h1> 
            <p>{user.email}</p>
          </>
        }
      </IonContent>
    </IonPage>
  );
};

export default Profile;
