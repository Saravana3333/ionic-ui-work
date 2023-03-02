import { IonContent, IonPage, IonImg, IonText, IonButton, } from '@ionic/react';
import { useHistory } from 'react-router';
import './Tab2.css';

// const history = useHistory()
// history.push("/Tab3")
const Tab2: React.FC = () => {
  const history = useHistory()
  return (
    <IonPage>
      <IonContent>
        <div className='logo_imgg' >
          <IonImg src='assets/images/smimg.png' alt="send money" /><br></br>
          <IonText className='sm_con'>
            <h2>Send Money</h2>
            <p>Send money easily and with one<br></br>click everything will be sent every<br></br>time you make a transaction</p>
          </IonText>
        <IonButton className='btn' onClick={()=>{
          history.push('/tab3')
        }}>Next Step</IonButton>
        <h4 className='hd_sts'>Skip This Step</h4>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
