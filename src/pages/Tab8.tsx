import { IonContent, IonPage, IonImg, IonText, IonButton, IonInput, IonItem, IonLabel, IonHeader, IonIcon } from '@ionic/react';
import { eyeOutline, eyeOffOutline, } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Tab8.css';
const Tab8: React.FC = () => {
    const history = useHistory()

    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <IonPage>
            <IonContent>
                <IonHeader className="bg-img">
                    <h2 className='shieldtxt'>SHIELDPAY</h2>
                    <div className='shieldimg'>
                    {/* <IonImg src='../assets/images/squreleft.jpeg' alt="Shield Image "/> */}
                </div>
                </IonHeader>
                <IonText>
                    <h2 className='wb_con'>Welcome Back!</h2>
                </IonText>
                <IonLabel className='eptext'>Email Address</IonLabel><br></br>
                <IonItem fill="outline" className='epinput'>
                    <IonInput value="Alexander Michael"></IonInput>
                </IonItem><br></br>
                <IonLabel className='eptext' position="stacked">Password</IonLabel><br></br>
                <IonItem lines='none'>
                    <IonInput
                        className="epinput"
                        name="pwd"
                        type={isRevealPwd ? "text" : "password"}
                    ></IonInput>

                    <IonIcon className='eye-icon'
                        icon={isRevealPwd ? eyeOutline : eyeOffOutline}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    />
                </IonItem><br></br>
                <IonLabel className='fptext'>Forgot Password</IonLabel>
            </IonContent>

            <IonButton className='si_btn' onClick={() => {
                history.push('/tab9')
            }}> Sign In</IonButton>
            <IonText className='md-al-text'>
                <h6 className='signup-con'>Don’t have an account? <span className='sign-sec'>Sign Up</span></h6>
            </IonText>
        </IonPage>
    );
};

export default Tab8;


