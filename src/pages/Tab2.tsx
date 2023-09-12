// @ts-nocheck
import React, { useState, useEffect, ReactNode } from "react";
import { IonGrid, IonCol, IonRow, IonContent, IonButton, IonHeader, IonIcon, IonPage, IonToolbar, IonCard, IonCardHeader, IonIcon, IonCardContent, IonCardTitle, IonModal, IonButtons, useIonRouter, IonButton, IonButtons } from "@ionic/react";
import CircularProgress from "@mui/joy/CircularProgress";
import { ellipsisHorizontalCircleSharp, add } from "ionicons/icons";
import "./Tab1.css";
import usePockets from "../hooks/usePockets";

// Pockets type definition (update this based on your data structure)
interface Pocket {
  id: string;
  // other Pocket properties go here
}
// Props type for Modal component
interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}
// Props type for CardAnimation component
interface CardAnimationProps {
  children: ReactNode; 
}

const Tab2: React.FC = () => {
  const pockets = usePockets();
  const [showModal, setShowModal] = useState<boolean>(false); 
  const [jiggle, setJiggle] = useState<boolean>(false);

  const openModal = (pocket: Pocket) => {
    router.push(`/pockets/${pocket.id}`);
    setShowModal(true);
  };
  const toggleJiggle = () => setJiggle((prevState) => !prevState);

  const CardAnimation: React.FC<CardAnimationProps> = ({ children }) => (
    <CreateAnimation
      duration={jiggle ? 1000 : 0}
      fromTo={[
        { property: "transform", fromValue: "translateX(0px)", toValue: "translateX(-10px)" },
        { property: "transform", fromValue: "translateX(-10px)", toValue: "translateX(10px)" },
      ]}
      easing="ease-out"
    >
      {children}
    </CreateAnimation>
  );

  const Cards: React.FC = () => (
    pockets.map((pocket: Pocket, index: number) => (
      <div onClick={() => openModal(pocket)} key={pocket.id}>
        <CardAnimation>
          <IonCard color="primary">
            // IonCardContent...
          </IonCard>
        </CardAnimation>
      </div>
    ))
  );

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar></IonToolbar>
        <IonToolbar>
          <IonTitle size="large">Pockets</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={toggleJiggle}>Select</IonButton>
            <IonButton>
              <IonIcon icon={add} /> {/* Adjust the icon as needed */}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Cards />
        {pockets.map((pocket: Pocket) => (
          <Route path={`/pockets/${pocket.id}`} key={pocket.id}>
            <IonModal isOpen={showModal}>
              <h1>Hello World</h1>
              <IonButton onClick={closeModal}>Close Modal</IonButton>
            </IonModal>
          </Route>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
