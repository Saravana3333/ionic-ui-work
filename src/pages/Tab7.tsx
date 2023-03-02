import { IonContent, IonPage, IonImg, IonText, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import './Tab7.css';

const Tab7: React.FC = () => {
    const history = useHistory()
    return (
        <IonPage>
            <IonContent>
                <h2 className='wel'>Account Created</h2>
                <IonText className='rm_con'>
                    <p>Your account has been created successfully.<br></br>Press continue to continue using the app</p>
                </IonText>
                <div className='ac_img'>
                    <IonImg src='assets/images/acimg.png' alt="send money" />
                </div>
                <IonButton className='ct_btn' onClick={()=>{
          history.push('/tab8')
        }}>Continue</IonButton>
                <IonText className='md-al-text'>
                    <p className='ta_con'>By clicking continue, you agree to our<br></br><span className='tc_con'>Terms and Conditions</span></p>
                </IonText>
            </IonContent>
        </IonPage>
    )
};

export default Tab7;
