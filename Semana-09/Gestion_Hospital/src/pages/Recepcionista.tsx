import React, { useState } from 'react';
import './Recepcionista.css';
import { IonPage, IonContent, IonButton, IonInput, IonItem, IonLabel, IonCard, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';

interface Recepcionista {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  turno: string;
}

const RecepcionistaPage: React.FC = () => {
  const [recepcionistas, setRecepcionistas] = useState<Recepcionista[]>([]);
  const [form, setForm] = useState<Recepcionista>({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', turno: '' });
  const [editing, setEditing] = useState(false);

  const handleChange = (e: any, field: keyof Recepcionista) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleAdd = () => {
    const newRecepcionista = { ...form, id: Date.now() };
    setRecepcionistas([...recepcionistas, newRecepcionista]);
    setForm({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', turno: '' });
  };

  const handleEdit = (id: number) => {
    const recepcionista = recepcionistas.find(r => r.id === id);
    if (recepcionista) {
      setForm(recepcionista);
      setEditing(true);
    }
  };

  const handleSave = () => {
    const updatedRecepcionistas = recepcionistas.map(r => r.id === form.id ? form : r);
    setRecepcionistas(updatedRecepcionistas);
    setEditing(false);
    setForm({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', turno: '' });
  };

  const handleDelete = (id: number) => {
    setRecepcionistas(recepcionistas.filter(r => r.id !== id));
  };

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2>Gestión de Recepcionistas</h2>

            <IonItem>
              <IonLabel position="floating">Nombre</IonLabel>
              <IonInput value={form.nombre} onIonChange={e => handleChange(e, 'nombre')} required />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Apellido</IonLabel>
              <IonInput value={form.apellido} onIonChange={e => handleChange(e, 'apellido')} required />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Edad</IonLabel>
              <IonInput value={form.edad} type="number" onIonChange={e => handleChange(e, 'edad')} required />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Correo Electrónico</IonLabel>
              <IonInput value={form.correo} onIonChange={e => handleChange(e, 'correo')} required />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Turno</IonLabel>
              <IonInput value={form.turno} onIonChange={e => handleChange(e, 'turno')} required />
            </IonItem>

            <IonButton expand="full" onClick={editing ? handleSave : handleAdd}>
              {editing ? 'Guardar Cambios' : 'Agregar Recepcionista'}
            </IonButton>

            <IonGrid>
              <IonRow>
                <IonCol><strong>Nombre</strong></IonCol>
                <IonCol><strong>Apellido</strong></IonCol>
                <IonCol><strong>Edad</strong></IonCol>
                <IonCol><strong>Correo</strong></IonCol>
                <IonCol><strong>Turno</strong></IonCol>
                <IonCol><strong>Acciones</strong></IonCol>
              </IonRow>
              {recepcionistas.map(recepcionista => (
                <IonRow key={recepcionista.id}>
                  <IonCol>{recepcionista.nombre}</IonCol>
                  <IonCol>{recepcionista.apellido}</IonCol>
                  <IonCol>{recepcionista.edad}</IonCol>
                  <IonCol>{recepcionista.correo}</IonCol>
                  <IonCol>{recepcionista.turno}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleEdit(recepcionista.id)}>Modificar</IonButton>
                    <IonButton onClick={() => handleDelete(recepcionista.id)} color="danger">Eliminar</IonButton>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RecepcionistaPage;
