import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonItem } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='bg-color'>
        <div className="log_img">
          <IonImg src="assets/images/Layer1.png" alt="img" />
          <IonText>
            <h1 className='hd-sheild'>SHEILDPAY</h1>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
