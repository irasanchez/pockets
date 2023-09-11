// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { IonGrid, IonCol, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonIcon, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonButton, useIonViewWillEnter, useIonRouter, IonButtons } from '@ionic/react';
import CircularProgress from "@mui/joy/CircularProgress"
import { ellipsisHorizontalCircleSharp, personCircle } from 'ionicons/icons';
import firebase from '../firebase';  // path to your firebase config file

import './Tab1.css';

const Tab2: React.FC = () => {
  const [pockets, setPockets] = useState([]); 
  const [showModal, setShowModal] = useState(false);  // state for controlling modal visibility
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  useEffect(() => { // Fetch data on component mount
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("YOUR_COLLECTION_NAME").get();
      setPockets(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
    }
    fetchData();
  }, []);

    const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader collapse="condense">
      <IonToolbar>
      </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">Pockets</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/profile">  {/* This will link to the user profile page once it's created */}
              <IonIcon icon={personCircle} /> {/* Adjust the icon as needed */}
            </IonButton>
          </IonButtons>
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
))}

        {pockets.map(pocket =>
          <Route path={`/pockets/${pocket.id}`} render={() =>
            <IonModal isOpen={true} onDidDismiss={() => router.push('/pockets')}>
              {/* Insert PocketDetail component, or any other content you want to display in the modal */}
              {/* In the PocketDetail component, you can use router.params.id to get the selected pocket id */}
            </IonModal>
          }/>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
