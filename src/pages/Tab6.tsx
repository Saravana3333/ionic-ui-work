import { IonContent, IonPage, IonImg, IonText, IonButton, IonInput, IonItem, IonLabel, IonCol, IonGrid, IonRow, IonIcon } from '@ionic/react';
import {backspaceOutline} from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import './Tab6.css';
interface OtpValues {
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    value6: string;
  }
  interface propsForm {
    setEnteredOtp: React.Dispatch<React.SetStateAction<string>>;
    submitOtp: (event?: any) => Promise<void>;
  }
const Tab6: React.FC = () => {
   
        const input1 = useRef<HTMLIonInputElement>(null);
        const input2 = useRef<HTMLIonInputElement>(null);
        const input3 = useRef<HTMLIonInputElement>(null);
        const input4 = useRef<HTMLIonInputElement>(null);
        const input5 = useRef<HTMLIonInputElement>(null);
        const input6 = useRef<HTMLIonInputElement>(null);
        const [otpInputValues, setOtpInputValues] = useState<OtpValues>({
          value1: "",
          value2: "",
          value3: "",
          value4: "",
          value5: "",
          value6: "",
        });
        // useEffect(() => {
        //   setEnteredOtp(
        //     otpInputValues?.value1 +
        //       otpInputValues?.value2 +
        //       otpInputValues?.value3 +
        //       otpInputValues?.value4 +
        //       otpInputValues?.value5 +
        //       otpInputValues?.value6
        //   );
        // }, [otpInputValues, setEnteredOtp]);
        const focusOnNextInput = (
          value: string,
          nextInput: React.RefObject<HTMLIonInputElement>
        ) => {
          if (value?.length === 1) {
            nextInput?.current?.setFocus();
          }
        };
    return (
        
        <IonPage>
            <IonContent>
                <IonText>
                    <h2 className='cp_con'>Create Password</h2>
                </IonText>
                <IonGrid className='grid'>
                    <IonRow>
                        <IonCol><IonButton className='btn_1'>1</IonButton></IonCol>
                        <IonCol><IonButton className='btn_2'>2</IonButton></IonCol>
                        <IonCol><IonButton className='btn_3'>3</IonButton></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol><IonButton className='btn_4'>4</IonButton></IonCol>
                        <IonCol><IonButton className='btn_5'>5</IonButton></IonCol>
                        <IonCol><IonButton className='btn_6'>6</IonButton></IonCol>
                    </IonRow>
            
                    <IonRow>
                        <IonCol><IonButton className='btn_7'>7</IonButton></IonCol>
                        <IonCol><IonButton className='btn_8'>8</IonButton></IonCol>
                        <IonCol><IonButton className='btn_9'>9</IonButton></IonCol>
                    </IonRow>
            
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol><IonButton className='btn_0'>0</IonButton></IonCol>
                        <IonCol><IonButton className='btn_er'><IonIcon icon={backspaceOutline}/></IonButton></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent >
        </IonPage >
    );
};

export default Tab6;
