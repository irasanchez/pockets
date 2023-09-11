import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, useIonRouter } from '@ionic/react';
import firebase from '../firebase';

const Profile: React.FC = () => {
  const [user, setUser] = useState(null);
  const router = useIonRouter();  // Get Ionic Router instance
  const userid = router.params.userid; // Get userid parameter from URL

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      
      const userRef = db.collection('users').doc(firebase.auth().currentUser.uid);  // Replace 'users' with your users collection
      const doc = await userRef.get();
      if (doc.exists) {
        setUser(doc.data());
      }
    }

    fetchData();
  }, []);

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
            <h1>{user.name}</h1> {/* Replace these fields with the actual fields of your user document */}
            <p>{user.email}</p>
          </>
        }
      </IonContent>
    </IonPage>
  );
};

export default Profile;
