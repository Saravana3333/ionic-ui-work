import { IonContent, IonPage, IonText, IonButton, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/react';
import './Tab11.css';

const Tab11: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonText>
                    <h2 className='chpass_con'>Account</h2>
                </IonText>
                
                <IonItem className='ha_text'>
                    <IonLabel>Hide Account</IonLabel>
                    <IonToggle slot="end" color="primary" checked={true}></IonToggle>
                </IonItem>

                <IonText className='rm_con'>
                    <p>Make sure you can remember you password,<br></br>as you’ll need it to sign back in</p>
                </IonText>

                <IonText className='rm_con'>
                    <p>ed******@gmail.com</p>
                </IonText>

            </IonContent>

            <IonButton className='chpass_btn'>Change Password</IonButton>
            <IonButton className='can_btn' fill="outline">Logout</IonButton>

            <IonText><h3 className='dc_text'>Delete account</h3></IonText>

        </IonPage>
    );
};

export default Tab11;
