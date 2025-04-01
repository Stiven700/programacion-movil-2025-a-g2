import React, { useState } from 'react';
import './Enfermero.css';  // Importa el archivo de estilo
import { IonPage, IonContent, IonButton, IonInput, IonItem, IonLabel, IonCard, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';

// Definimos la estructura del enfermero
interface Enfermero {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  area: string;
  turno: string;
}

const EnfermeroPage: React.FC = () => {
  // Estado para los enfermeros
  const [enfermeros, setEnfermeros] = useState<Enfermero[]>([]);
  const [form, setForm] = useState<Enfermero>({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', area: '', turno: '' });
  const [editing, setEditing] = useState(false);

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e: any, field: keyof Enfermero) => {
    setForm({ ...form, [field]: e.target.value });
  };

  // Función para agregar un nuevo enfermero
  const handleAdd = () => {
    const newEnfermero = { ...form, id: Date.now() };
    setEnfermeros([...enfermeros, newEnfermero]);
    setForm({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', area: '', turno: '' });
  };

  // Función para modificar un enfermero
  const handleEdit = (id: number) => {
    const enfermero = enfermeros.find(e => e.id === id);
    if (enfermero) {
      setForm(enfermero);
      setEditing(true);
    }
  };

  // Función para guardar los cambios de un enfermero
  const handleSave = () => {
    const updatedEnfermeros = enfermeros.map(e => e.id === form.id ? form : e);
    setEnfermeros(updatedEnfermeros);
    setEditing(false);
    setForm({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', area: '', turno: '' });
  };

  // Función para eliminar un enfermero
  const handleDelete = (id: number) => {
    setEnfermeros(enfermeros.filter(e => e.id !== id));
  };

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2>Gestión de Enfermeros</h2>

            {/* Formulario de ingreso de datos */}
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
              <IonLabel position="floating">Área</IonLabel>
              <IonInput value={form.area} onIonChange={e => handleChange(e, 'area')} required />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Turno</IonLabel>
              <IonInput value={form.turno} onIonChange={e => handleChange(e, 'turno')} required />
            </IonItem>

            {/* Botones de acción */}
            <IonButton expand="full" onClick={editing ? handleSave : handleAdd}>
              {editing ? 'Guardar Cambios' : 'Agregar Enfermero'}
            </IonButton>

            {/* Tabla de enfermeros */}
            <IonGrid>
              <IonRow>
                <IonCol><strong>Nombre</strong></IonCol>
                <IonCol><strong>Apellido</strong></IonCol>
                <IonCol><strong>Edad</strong></IonCol>
                <IonCol><strong>Correo</strong></IonCol>
                <IonCol><strong>Área</strong></IonCol>
                <IonCol><strong>Turno</strong></IonCol>
                <IonCol><strong>Acciones</strong></IonCol>
              </IonRow>
              {enfermeros.map(enfermero => (
                <IonRow key={enfermero.id}>
                  <IonCol>{enfermero.nombre}</IonCol>
                  <IonCol>{enfermero.apellido}</IonCol>
                  <IonCol>{enfermero.edad}</IonCol>
                  <IonCol>{enfermero.correo}</IonCol>
                  <IonCol>{enfermero.area}</IonCol>
                  <IonCol>{enfermero.turno}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleEdit(enfermero.id)}>Modificar</IonButton>
                    <IonButton onClick={() => handleDelete(enfermero.id)} color="danger">Eliminar</IonButton>
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

export default EnfermeroPage;