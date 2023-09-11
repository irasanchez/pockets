// @ts-nocheck
import { IonGrid, IonCol, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonIcon, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import CircularProgress from "@mui/joy/CircularProgress"
import { ellipsisHorizontalCircleSharp } from 'ionicons/icons';

import './Tab1.css';

const Tab2: React.FC = () => {
  
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
