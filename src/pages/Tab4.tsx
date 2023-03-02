import { IonContent, IonPage, IonImg, IonText, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import './Tab4.css';

const Tab4: React.FC = () => {
  const history = useHistory()
  return (
    <IonPage>
      <IonContent>
        <div className='lg_img' >
          <IonImg src='assets/images/handimg.png' alt="Easy To Use" /><br></br>
          <IonText className='etu_con'>
            <h2>Easy To Use</h2>
            <p>Very easy to use and easy to<br></br>understand for those of you who are<br></br>beginners</p>
          </IonText>
        <IonButton className='ca_btn'onClick={()=>{
          history.push('/tab5')
        }}>Create Account</IonButton>
        <IonButton className='ln_btn' fill="outline">Login Now</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;