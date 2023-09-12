// @ts-nocheck
import React, { useState, ReactNode } from "react";
import {
  IonGrid,
  IonCol,
  IonRow,
  IonTitle,
  IonContent,
  IonButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonModal,
  IonButtons,
  useIonRouter,
  CreateAnimation
} from "@ionic/react";
import { Route } from 'react-router-dom';
import CircularProgress from "@mui/joy/CircularProgress";
import { ellipsisHorizontalCircleSharp, add } from "ionicons/icons";
import "./Tab1.css";
import usePockets from "../hooks/usePockets";

interface Pocket {
  id: string;
}

interface CardAnimationProps {
  children: ReactNode;
}

const Tab2: React.FC = () => {
  const pockets = usePockets();
  const [jiggle, setJiggle] = useState<boolean>(false);
  const router = useIonRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = (pocket: Pocket) => {
    router.push(`/pockets/${pocket.name}`);
    setModalOpen(true);
  };
  const toggleJiggle = () => setJiggle(!jiggle);
  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
    setTimeout(() => {
      router.push(`/pockets`);
      // Trigger the page route back after the animation
    }, 500); // Adjust the delay time as needed
  };
  const CardAnimation: React.FC<CardAnimationProps> = ({ children }) => (
    <CreateAnimation
      duration={jiggle ? 1000 : 0}
      // ierations={jiggle? Infinity : 1}
      fromTo={[
        { property: "transform", fromValue: "translateX(0px)", toValue: "translateX(-10px)" },
        { property: "transform", fromValue: "translateX(-10px)", toValue: "translateX(10px)" }
      ]}
      easing="ease-out"
    >
      {children}
    </CreateAnimation>
  );

  const Cards: React.FC = () => (
    pockets.map((pocket: Pocket) => (
      <div onClick={() => openModal(pocket)} key={pocket.name}>
        <CardAnimation>
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
        </CardAnimation>
      </div>
    ))
  );

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar />
        <IonToolbar>
          <IonTitle size="large">Pockets</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={toggleJiggle}>Select</IonButton>
            <IonButton>
              <IonIcon icon={add} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Cards />
        {pockets.map((pocket: Pocket) => (
          <Route path={`/pockets/${pocket.name}`} key={pocket.name}>
            <IonModal isOpen={router.routeInfo.pathname === `/pockets/${pocket.name}`}>
              <h1>Hello World</h1>
              <IonButton onClick={handleModalClose}>Close Modal</IonButton>
            </IonModal>
          </Route>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
