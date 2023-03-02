import { IonContent, IonPage, IonImg, IonText, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';
import './Tab8.css';
const Tab8: React.FC = () => {
    const history = useHistory()
    return (
        <IonPage>
            <IonContent>
                <div className='shieldimg'>
                    <IonImg src='assets/images/blueimg.png' alt="Shield Image "/>
                  
                {/* <IonText className='shieldtxt'>
                    <h2>SHIELDPAY</h2>
                </IonText> */}
                </div>

                <IonText>
                    <h2 className='wb_con'>Welcome Back!</h2>
                </IonText>
                <IonLabel className='eptext'>Email Address</IonLabel><br></br>
                <IonItem fill="outline" className='epinput'>
                    <IonInput value="Alexander Michael"></IonInput>
                </IonItem><br></br>
                <IonLabel className='eptext' position="stacked">Password</IonLabel><br></br>
                <IonItem lines='none'>
                    <IonInput className='epinput' type='password'></IonInput><br></br>
                </IonItem><br></br>
                <IonLabel className='fptext'>Forgot Password</IonLabel>
                </IonContent>

                <IonButton className='si_btn'onClick={()=>{
          history.push('/tab9')
        }}> Sign In</IonButton>
                <IonText className='md-al-text'>
                <h6 className='signup-con'>Don’t have an account? <span className='sign'>Sign Up</span></h6>
                </IonText>
        </IonPage>
    );
};

export default Tab8;
