# HU-01 Comprensión del Problema

### -Diagrama de Conceptos.
![Diagrama de Conceptos](/Imagenes/DiagramaConceptos.png)
### Explicacion.
El Diagrama de Conceptos tiene como objetivo representar de manera clara y estructurada la problemática en la gestión y control de vuelos en una aerolínea. Se identifican los factores clave que afectan la operación, como la falta de acceso a información en tiempo real, la desorganización en el embarque, la comunicación ineficiente entre tripulación y personal de tierra, la ausencia de una plataforma de gestión de pasajeros y la falta de integración con otros servicios aeroportuarios. 

A través de este diagrama, se busca facilitar la comprensión de cómo estos problemas impactan en la experiencia de los pasajeros y la eficiencia operativa de la aerolínea. Además, se presentan soluciones viables, como el desarrollo de una aplicación móvil centralizada, que permitiría mejorar la comunicación, optimizar la gestión de vuelos y brindar una mejor experiencia a los usuarios. 

El diagrama utiliza información simple y concisa para que sea de fácil lectura y comprensión, permitiendo a los interesados visualizar rápidamente la relación entre los problemas y sus soluciones. 

### Modelo Relacional para la Gestión y Control de Vuelos.

![Diagrama de MR](/Imagenes/ModeloRelacion.png)

## Tablas Normalizadas en 3NF
- PASAJERO
- VUELO
- RESERVA
- ASIENTO
- TRIPULACIÓN
- ROL DE TRIPULACIÓN
- AERONAVE
- PUERTA DE EMBARQUE
- NOTIFICACION
- SERVICIO AEROPUERTO

**Justificación de Normalización**
1NF: Se eliminaron grupos repetitivos (pasajero, tripulación, asientos en tablas separadas).
2NF: Se eliminaron dependencias parciales. Ejemplo: el rol de tripulación no está en la tabla de tripulación, sino en una tabla independiente.
3NF: Se eliminaron dependencias transitivas. Ejemplo: notificaciones dependen solo del vuelo y del pasajero, no de datos externos.

# HU-02 UI/UX Base

### Definición de UI/UX para el sistema de vuelos

**Colores:**
🔳 Fondo: Blanco o gris claro
⚫ Texto y títulos: Negro o Blanco (Dependiendo del Contexto)
⚫ Resaltados y botones principales: Un color sutil como Negro o Gris.


**Tipografía:**
- Fuente principal: Roboto o Montserrat
- Títulos: 24px, negrita
- Subtítulos: 18px, seminegrita
- Texto normal: 16px

**Iconografía:**
- Material Icons o Font Awesome para representar check-in, vuelos, notificaciones, etc.
    - Ejemplo: Icono de avión ✈️ para "Mis vuelos", icono de reloj ⏳ para "Estado del vuelo".

**Estructura del Layout (Mockup base en Figma):**

Descripción:
El layout define la estructura y organización visual de la aplicación móvil, asegurando una experiencia de usuario intuitiva y eficiente.

***Elementos Clave***

**Pantalla de Inicio**
- Logo de la aerolínea.
- Barra de búsqueda para ingresar número de vuelo o destino.
- Acceso rápido a opciones del sistema.


**Búsqueda de Vuelos**
- Campo de búsqueda para ingresar origen y destino.
- Filtro por fecha de vuelo.
- Resultados en forma de tarjetas con detalles básicos del vuelo.
- Opción para ver más detalles.

**Detalle del Vuelo**
- Estado del vuelo (en tiempo real).
- Horarios de salida y llegada.
- Puerta de embarque asignada.
- Botón para recibir notificaciones sobre cambios.

**Check-in y Tarjeta de Embarque**
- Botón para realizar check-in.
- Generación de tarjeta de embarque digital (QR Code).
- Información del asiento y equipaje.

**Notificaciones**
- Alertas en tiempo real sobre cambios de estado.
- Notificaciones personalizadas para pasajeros.

**Servicios Adicionales**
- Información sobre transporte terrestre, salas VIP y seguridad.
- Acceso rápido a asistencia.
