import React from 'react';
import { IonPage, IonContent, IonCard, IonCardContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css'; // Asegúrate de importar el archivo CSS.

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <h2 className="home-title">Gestión de Personal Médico</h2>
        <div className="home-container">
          <IonCard className="home-card" onClick={() => history.push('/medico')}>
            <IonCardContent>
              <h3>Médico</h3>
            </IonCardContent>
          </IonCard>
          <IonCard className="home-card" onClick={() => history.push('/enfermero')}>
            <IonCardContent>
              <h3>Enfermero</h3>
            </IonCardContent>
          </IonCard>
          <IonCard className="home-card" onClick={() => history.push('/recepcionista')}>
            <IonCardContent>
              <h3>Recepcionista</h3>
            </IonCardContent>
          </IonCard>
          <IonCard className="home-card" onClick={() => history.push('/paciente')}>
            <IonCardContent>
              <h3>Paciente</h3>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
