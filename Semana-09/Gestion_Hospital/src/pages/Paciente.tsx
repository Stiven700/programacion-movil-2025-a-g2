import React, { useState } from 'react';
import './Paciente.css';  // Importa el archivo de estilo
import { IonPage, IonContent, IonButton, IonInput, IonItem, IonLabel, IonCard, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';

// Definimos la estructura del paciente
interface Paciente {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  historiaClinica: string;
}

const PacientePage: React.FC = () => {
  // Estado para los pacientes
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [form, setForm] = useState<Paciente>({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', historiaClinica: '' });
  const [editing, setEditing] = useState(false);

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e: any, field: keyof Paciente) => {
    setForm({ ...form, [field]: e.target.value });
  };

  // Función para agregar un nuevo paciente
  const handleAdd = () => {
    const newPaciente = { ...form, id: Date.now() };
    setPacientes([...pacientes, newPaciente]);
    setForm({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', historiaClinica: '' });
  };

  // Función para modificar un paciente
  const handleEdit = (id: number) => {
    const paciente = pacientes.find(p => p.id === id);
    if (paciente) {
      setForm(paciente);
      setEditing(true);
    }
  };

  // Función para guardar los cambios de un paciente
  const handleSave = () => {
    const updatedPacientes = pacientes.map(p => p.id === form.id ? form : p);
    setPacientes(updatedPacientes);
    setEditing(false);
    setForm({ id: 0, nombre: '', apellido: '', edad: 0, correo: '', historiaClinica: '' });
  };

  // Función para eliminar un paciente
  const handleDelete = (id: number) => {
    setPacientes(pacientes.filter(p => p.id !== id));
  };

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2>Gestión de Pacientes</h2>

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
              <IonLabel position="floating">Historia Clínica</IonLabel>
              <IonInput value={form.historiaClinica} onIonChange={e => handleChange(e, 'historiaClinica')} required />
            </IonItem>

            {/* Botones de acción */}
            <IonButton expand="full" onClick={editing ? handleSave : handleAdd}>
              {editing ? 'Guardar Cambios' : 'Agregar Paciente'}
            </IonButton>

            {/* Tabla de pacientes */}
            <IonGrid>
              <IonRow>
                <IonCol><strong>Nombre</strong></IonCol>
                <IonCol><strong>Apellido</strong></IonCol>
                <IonCol><strong>Edad</strong></IonCol>
                <IonCol><strong>Correo</strong></IonCol>
                <IonCol><strong>Historia Clínica</strong></IonCol>
                <IonCol><strong>Acciones</strong></IonCol>
              </IonRow>
              {pacientes.map(paciente => (
                <IonRow key={paciente.id}>
                  <IonCol>{paciente.nombre}</IonCol>
                  <IonCol>{paciente.apellido}</IonCol>
                  <IonCol>{paciente.edad}</IonCol>
                  <IonCol>{paciente.correo}</IonCol>
                  <IonCol>{paciente.historiaClinica}</IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleEdit(paciente.id)}>Modificar</IonButton>
                    <IonButton onClick={() => handleDelete(paciente.id)} color="danger">Eliminar</IonButton>
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

export default PacientePage;
