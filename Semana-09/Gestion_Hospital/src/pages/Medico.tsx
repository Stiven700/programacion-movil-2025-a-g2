import React, { useState } from 'react';
import './Medico.css';  // Importa el archivo de estilo
import { IonPage, IonContent, IonButton, IonInput, IonItem, IonLabel, IonCard, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';

// Definimos la estructura del médico
interface Medico {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  especialidad: string;
  licencia: string;
}

const MedicoPage: React.FC = () => {
  // Estado para los médicos
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [form, setForm] = useState<Medico>({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', especialidad: '', licencia: '' });
  const [editing, setEditing] = useState(false);

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e: any, field: keyof Medico) => {
    setForm({ ...form, [field]: e.target.value });
  };

  // Función para agregar un nuevo médico
  const handleAdd = () => {
    const newMedico = { ...form, id: Date.now() };
    setMedicos([...medicos, newMedico]);
    setForm({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', especialidad: '', licencia: '' });
  };

  // Función para modificar un médico
  const handleEdit = (id: number) => {
    const medico = medicos.find(m => m.id === id);
    if (medico) {
      setForm(medico);
      setEditing(true);
    }
  };

  // Función para guardar los cambios de un médico
  const handleSave = () => {
    const updatedMedicos = medicos.map(m => m.id === form.id ? form : m);
    setMedicos(updatedMedicos);
    setEditing(false);
    setForm({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', especialidad: '', licencia: '' });
  };

  // Función para eliminar un médico
  const handleDelete = (id: number) => {
    setMedicos(medicos.filter(m => m.id !== id));
  };

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2>Gestión de Médicos</h2>

            {/* Formulario de ingreso de datos */}
            <IonItem>
              <IonLabel position="floating">Nombre</IonLabel>
              <IonInput
                value={form.nombre}
                onIonChange={e => handleChange(e, 'nombre')}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Apellido</IonLabel>
              <IonInput
                value={form.apellido}
                onIonChange={e => handleChange(e, 'apellido')}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Edad</IonLabel>
              <IonInput
                value={form.edad}
                type="number"
                onIonChange={e => handleChange(e, 'edad')}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Correo Electrónico</IonLabel>
              <IonInput
                value={form.correo}
                onIonChange={e => handleChange(e, 'correo')}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Especialidad</IonLabel>
              <IonInput
                value={form.especialidad}
                onIonChange={e => handleChange(e, 'especialidad')}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Licencia Médica</IonLabel>
              <IonInput
                value={form.licencia}
                onIonChange={e => handleChange(e, 'licencia')}
                required
              />
            </IonItem>

            {/* Botones de acción */}
            <IonButton expand="full" onClick={editing ? handleSave : handleAdd}>
              {editing ? 'Guardar Cambios' : 'Agregar Médico'}
            </IonButton>

            {/* Tabla de médicos */}
            <IonGrid>
              <IonRow>
                <IonCol><strong>Nombre</strong></IonCol>
                <IonCol><strong>Apellido</strong></IonCol>
                <IonCol><strong>Edad</strong></IonCol>
                <IonCol><strong>Correo</strong></IonCol>
                <IonCol><strong>Especialidad</strong></IonCol>
                <IonCol><strong>Licencia</strong></IonCol>
                <IonCol><strong>Acciones</strong></IonCol>
              </IonRow>
              {medicos.map(medico => (
                <IonRow key={medico.id}>
                  <IonCol>{medico.nombre}</IonCol>
                  <IonCol>{medico.apellido}</IonCol>
                  <IonCol>{medico.edad}</IonCol>
                  <IonCol>{medico.correo}</IonCol>
                  <IonCol>{medico.especialidad}</IonCol>
                  <IonCol>{medico.licencia}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleEdit(medico.id)}>Modificar</IonButton>
                    <IonButton onClick={() => handleDelete(medico.id)} color="danger">Eliminar</IonButton>
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

export default MedicoPage;
