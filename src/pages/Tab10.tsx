import { IonContent, IonPage, IonText, IonButton, IonInput, IonItem } from '@ionic/react';
import { useHistory } from 'react-router';
import './Tab10.css';

const Tab10: React.FC = () => {
    const history = useHistory()
    return (
        <IonPage>
            <IonContent>
                <IonText>
                    <h2 className='chpass_con'>Change Password</h2>
                </IonText>

                <IonItem className='chinput'>
                    <IonInput type='password'></IonInput>
                </IonItem>
        
                <IonText className='repass_con'>
                    <h6>Re-password new password</h6>
                </IonText>
         
            </IonContent>

                <IonButton className='chpass_btn'onClick={()=>{
          history.push('/tab11')
        }}>Save</IonButton>
        <IonButton className='can_btn' fill="outline">Cancel</IonButton>

        </IonPage>
    );
};

export default Tab10;
