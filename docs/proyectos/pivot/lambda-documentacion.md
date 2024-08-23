# Documentación de la Lambda de Feedback

## Introducción

Esta lambda implementa un sistema de feedback para Slack, permitiendo a los usuarios solicitar, dar y revisar feedbacks dentro de la plataforma. El sistema está diseñado para fomentar el crecimiento personal y profesional a través de retroalimentación estructurada.

## Componentes Principales

### 1. lambda_function.py

Este es el archivo principal que contiene la lógica de la aplicación Slack y maneja los diferentes comandos y acciones.

#### Comandos Principales:

- `/feedback-dar`: Permite a los usuarios dar feedback a otros que lo han solicitado.
- `/feedback-pedir`: Permite a los usuarios solicitar feedback de sus colegas.
- `/feedback-ayuda`: Muestra información de ayuda sobre cómo usar el sistema.
- `/feedback-status`: Muestra el estado de los feedbacks del usuario (pendientes, recibidos, dados).
- `/feedback-auto-reflexion`: Permite a los usuarios realizar una auto-reflexión.

#### Funcionalidades Clave:

- Manejo de modales para solicitar y dar feedback.
- Procesamiento de acciones de botones en mensajes.
- Integración con una base de datos para almacenar y recuperar información de feedbacks.

### 2. dbhelper.py

Este archivo contiene las definiciones de los modelos de datos y las funciones de ayuda para interactuar con la base de datos.

#### Modelos Principales:

- `User`: Representa a un usuario en el sistema.
- `Feedback`: Almacena la información de los feedbacks.
- `Role`: Define los roles de usuario en el sistema.

#### Funcionalidades Clave:

- Encriptación y desencriptación de mensajes de feedback para garantizar la privacidad.
- Métodos para obtener feedbacks pendientes, recibidos y dados.
- Manejo de relaciones jerárquicas entre usuarios (supervisores).

### 3. slack_format_helper.py

Este archivo contiene funciones y estructuras para formatear mensajes y modales en Slack.

#### Componentes Principales:

- Definiciones de modales para pedir y dar feedback.
- Funciones para formatear listas de feedbacks y mensajes de notificación.

### 4. messages.py

Contiene constantes y funciones para generar mensajes utilizados en la aplicación.

### 5. errors.py

Define las clases de excepciones personalizadas y mensajes de error utilizados en la aplicación.

## Flujo de Trabajo Principal

1. Un usuario inicia una acción usando un comando de slash en Slack.
2. La lambda procesa el comando y realiza la acción correspondiente:
   - Abrir un modal para solicitar o dar feedback.
   - Mostrar el estado de los feedbacks del usuario.
   - Proporcionar información de ayuda.
3. Si es necesario, se interactúa con la base de datos para almacenar o recuperar información.
4. Se envía una respuesta formateada al usuario a través de la API de Slack.

## Características de Seguridad

- Los mensajes de feedback se encriptan antes de almacenarse en la base de datos.
- Se utilizan roles de usuario para controlar el acceso a ciertas funcionalidades.
- Se implementan validaciones para prevenir solicitudes de feedback duplicadas o no autorizadas.

## Consideraciones de Implementación

- La lambda está diseñada para funcionar en un entorno AWS Lambda.
- Se requiere una base de datos MySQL para almacenar la información de usuarios y feedbacks.
- Las credenciales de la base de datos y las claves de encriptación se manejan a través de variables de entorno por seguridad.

## Extensibilidad

El sistema está diseñado para ser fácilmente extensible:

- Nuevos comandos pueden ser agregados implementando nuevas funciones en `lambda_function.py`.
- El formato de los mensajes y modales puede ser modificado en `slack_format_helper.py`.
- Se pueden agregar nuevos tipos de feedbacks o campos adicionales extendiendo el modelo `Feedback` en `dbhelper.py`.

## Conclusión

Esta lambda proporciona una robusta solución para manejar feedbacks dentro de Slack, fomentando una cultura de mejora continua y comunicación abierta dentro de las organizaciones. Su diseño modular y uso de buenas prácticas de seguridad la hacen ideal para implementaciones en entornos empresariales.
