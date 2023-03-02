import { IonContent, IonPage, IonImg, IonText, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import './Tab3.css';

const Tab3: React.FC = () => {
  const history = useHistory()
  return (
    <IonPage>
      <IonContent>
        <div className='logo_imag' >
          <IonImg src='assets/images/hmimg.png' alt="Request money" /><br></br>
          <IonText className='rm_con'>
            <h2>Request Money</h2>
            <p>You can request money to friends or<br></br>family to send as much money as<br></br>you want</p>
          </IonText>
        <IonButton className='rm_btn' onClick={()=>{
          history.push('/tab4')
        }}>Next Step</IonButton>
        <h4 className='rm_sts'>Skip This Step</h4>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
