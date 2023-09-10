import { IonGrid, IonCol, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonIcon, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import CircularProgress from "@mui/joy/CircularProgress"
import { ellipsisHorizontalCircleSharp } from 'ionicons/icons';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Pockets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonCard color="primary">
          <IonCardHeader>
            <IonGrid>
              <IonRow class="ion-justify-content-between">
                <IonCol>
                  <CircularProgress variant="solid" value={25} determinate size="sm" />
                </IonCol>
                <IonCol>
                  <IonIcon aria-hidden="true" icon={ellipsisHorizontalCircleSharp} />
                </IonCol>
              </IonRow>
            </IonGrid>

          </IonCardHeader>
          <IonCardContent>
            <IonCardTitle>$45 | Pocket Name</IonCardTitle>
            3 days left
          </IonCardContent>
        </IonCard>
        <IonCard >
          <IonCardHeader>
            <CircularProgress variant="solid" value={15} determinate size="sm" />
          </IonCardHeader>
          <IonCardContent>
            <IonCardTitle>$5 | Pocket Name</IonCardTitle>
            no deadline
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
