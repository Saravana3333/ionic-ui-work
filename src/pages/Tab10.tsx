import { IonContent, IonPage, IonText, IonButton, IonInput, IonItem, IonIcon, IonRadio } from '@ionic/react';
import { eyeOutline, eyeOffOutline, } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Tab10.css';

const Tab10: React.FC = () => {
    const history = useHistory()

    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <IonPage>
            <IonContent>
                <IonText>
                    <h2 className='chpass_con'>Change Password</h2>
                </IonText>

                <IonItem fill="outline" className='chinput'>
                    <IonInput
                        name="pwd"
                        type={isRevealPwd ? "text" : "password"}
                    ></IonInput>

                    <IonIcon className='eye-icon'
                        icon={isRevealPwd ? eyeOutline : eyeOffOutline}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    />


                </IonItem>

                <IonText className='repass_con'>
                    <h6>Re-password new password</h6>
                </IonText>

            </IonContent>

            <IonButton className='chpass_btn' onClick={() => {
                history.push('/tab11')
            }}>Save</IonButton>
            <IonButton className='can_btn' fill="outline">Cancel</IonButton>

        </IonPage>
    );
};

export default Tab10;
