import { IonContent, IonPage, IonImg, IonText, IonButton, IonInput, IonItem, IonLabel, IonCol, IonGrid, IonRow, IonIcon } from '@ionic/react';
import {backspaceOutline} from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import './Tab6.css';

const Tab6: React.FC = () => {
  const [result, setResult] = useState("");

  const handleClick = (e:any) => {
     setResult(e.target.Value);
    console.log(e)
  }
    return (
        
        <IonPage>
            <IonContent>
                <IonText>
                    <h2 className='cp_con'>Create Password</h2>
                </IonText>
                <IonGrid className='grid'>
                  <IonInput type="text" value={result} ></IonInput>
                    <IonRow>
                        <IonCol><IonButton defaultValue={1} onClick={handleClick} className='btn_1'>1</IonButton></IonCol>
                        <IonCol><IonButton defaultValue={2} onClick={handleClick} className='btn_2'>2</IonButton></IonCol>
                        <IonCol><IonButton defaultValue={3} onClick={handleClick} className='btn_3'>3</IonButton></IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol><IonButton defaultValue={4} onClick={handleClick} className='btn_4'>4</IonButton></IonCol>
                        <IonCol><IonButton defaultValue={5} onClick={handleClick} className='btn_5'>5</IonButton></IonCol>
                        <IonCol><IonButton defaultValue={6} onClick={handleClick} className='btn_6'>6</IonButton></IonCol>
                    </IonRow>
            
                    <IonRow>
                        <IonCol><IonButton defaultValue={7} onClick={handleClick} className='btn_7'>7</IonButton></IonCol>
                        <IonCol><IonButton defaultValue={8} onClick={handleClick} className='btn_8'>8</IonButton></IonCol>
                        <IonCol><IonButton defaultValue={9} onClick={handleClick} className='btn_9'>9</IonButton></IonCol>
                    </IonRow>
            
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol><IonButton defaultValue={0} onClick={handleClick} className='btn_0'>0</IonButton></IonCol>
                        <IonCol><IonButton id='backspace' onClick={handleClick} className='btn_er'><IonIcon icon={backspaceOutline}/> </IonButton></IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent >
        </IonPage >
    );
};

export default Tab6;
