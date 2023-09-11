// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { IonGrid, IonCol, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonIcon, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import CircularProgress from "@mui/joy/CircularProgress"
import { ellipsisHorizontalCircleSharp } from 'ionicons/icons';
import firebase from '../firebase';  // path to your firebase config file

import './Tab1.css';

const Tab2: React.FC = () => {
  const [pockets, setPockets] = useState([]); // Initialize state
  
  useEffect(() => { // Fetch data on component mount
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("YOUR_COLLECTION_NAME").get();
      setPockets(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
    }
    fetchData();
  }, []);
  return (
    <IonPage>
      <IonHeader collapse="condense">
      <IonToolbar>
      </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">Pockets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
         {pockets.map(pocket => (
        <IonCard color="primary">
          <IonCardHeader>
            <IonGrid fixed>
              <IonRow class="ion-justify-content-between">
                <IonCol size="1">
                  <CircularProgress thickness={18.5} variant="solid" value={25} determinate size="lg" />
                </IonCol>
                <IonCol size="1" style={{ marginRight: "2vw" }}>
                  <IonIcon aria-hidden="true" icon={ellipsisHorizontalCircleSharp} size="large" />
                </IonCol>
              </IonRow>
            </IonGrid>

          </IonCardHeader>
          <IonCardContent>
            <IonCardTitle>Pocket Name</IonCardTitle>
            $45/$100 | 3 days left
          </IonCardContent>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
