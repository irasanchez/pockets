import React from 'react';
// import firebase from '../firebase';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/react';

const Login: React.FC = () => {
  const handleSignIn = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();

    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log(result);
    //     // You can redirect the user to another page after successful login.
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={handleSignIn}>
          <IonLabel>Login with Google</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
