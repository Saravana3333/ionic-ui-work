import { IonContent, IonPage, IonText, IonButton, IonInput, IonItem, IonLabel, IonList, IonCheckbox, IonIcon } from '@ionic/react';
import { eyeOutline, eyeOffOutline, } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Tab5.css';

const Tab5: React.FC = () => {
    const history = useHistory()

    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <IonPage>
            <IonContent>
                <IonText>
                    <h2 className='wel'>Welcome!</h2>
                    <IonList className='list'>
                        <IonLabel className="md_font">Full Name</IonLabel>
                        <IonItem className='ion-amm-input' fill="outline">
                            <IonInput name='name' value="Alexander Michael"></IonInput>
                        </IonItem>

                        <IonLabel className="md_font">Email Address</IonLabel>
                        <IonItem className='ion-am-input' lines='none'>
                            <IonInput pattern='email'></IonInput>
                        </IonItem>

                        <IonLabel className="md_font">Password</IonLabel>
                        <IonItem className='ion-am-input' lines='none'>
                            <IonInput
                                name="pwd"
                                type={isRevealPwd ? "text" : "password"}
                            ></IonInput>

                            <IonIcon className='eye-icon'
                                icon={isRevealPwd ? eyeOutline : eyeOffOutline}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                            />
                        </IonItem>
                    </IonList>

                </IonText>
            </IonContent>

            <IonItem className='hd-con'>
                <IonCheckbox className='md_checkbox' slot="start" indeterminate={true} ></IonCheckbox>
                <IonLabel>I have agree to our <span className='tc_con'>Terms and Condition</span></IonLabel>
            </IonItem>

            <IonButton className='sg_btn' onClick={() => {
                history.push('/tab7')
            }}>Sign Up</IonButton>
            <IonButton className='wn_btn' fill="outline">With Phone Number</IonButton>

            <IonText className='md-al-text'>
                <h6 className='hd-con'>Already have an account? <span className='sign'>Sign in</span></h6>
            </IonText>

        </IonPage>
    );
};

export default Tab5;