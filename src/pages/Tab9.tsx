import { IonContent, IonPage, IonImg, IonText, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';
import './Tab9.css';

const Tab9: React.FC = () => {
    const history = useHistory()
    return (
        <IonPage>
            <IonContent>
                <IonText>
                    <h2 className='fp_con'>Forgot Password</h2>
                </IonText>
                <div className='forgot-img'>
                    <IonImg className='' src='assets/images/Forgotpassword.png' alt="forgotimg" />
                </div>

                <IonText className='rm_con'>
                    <p>Enter your registered email below to receive<br></br>password reset instruction</p>
                
                <IonText className='eaddtext'>
                <IonLabel>Email Address</IonLabel>
                </IonText>

                </IonText>
                <IonItem fill="outline" className='epinput'>
                    <IonInput value="Alexander Michael"></IonInput>
                </IonItem>
            <IonButton className='svc_btn' onClick={()=>{
          history.push('/tab10')
        }}>Send Verification Code</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Tab9;
