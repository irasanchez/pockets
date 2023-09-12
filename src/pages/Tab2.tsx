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
import {  Route } from 'react-router-dom';
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

  const openModal = (pocket: Pocket) => {
    router.push(`/pockets/${pocket.id}`);
  };
  const toggleJiggle = () => setJiggle(!jiggle);

  const CardAnimation: React.FC<CardAnimationProps> = ({ children }) => (
    // You need to define CreateAnimation component or use the one from library
    <CreateAnimation
      duration={jiggle ? 1000 : 0}
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
      <div onClick={() => openModal(pocket)} key={pocket.id}>
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
          <Route path={`/pockets/${pocket.id}`} key={pocket.id}>
            <IonModal isOpen={router.routeInfo.pathname === `/pockets/${pocket.id}`}>
              <h1>Hello World</h1>
              <IonButton onClick={() => router.goBack()}>Close Modal</IonButton>
            </IonModal>
          </Route>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
