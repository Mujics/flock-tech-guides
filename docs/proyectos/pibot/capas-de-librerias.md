# Capas de Librerías Lambda de Feedback

## Capas de Librerías

La lambda utiliza varias capas de librerías para su funcionamiento. Estas capas proporcionan las dependencias necesarias y aseguran la compatibilidad con diferentes versiones de Python y arquitecturas. A continuación se detallan las capas utilizadas:

| Orden | Nombre | Versión | Tiempos de ejecución compatibles | Arquitecturas compatibles | ARN de la versión |
|-------|--------|---------|----------------------------------|---------------------------|-------------------|
| 1 | SlackLibs | 1 | python3.10, python3.8, python3.9 | x86_64 | arn:aws:lambda:us-east-1:778618141948:layer:SlackLibs:1 |
| 2 | Klayers-p310-mysql-connector-python | 3 | python3.10 | x86_64 | arn:aws:lambda:us-east-1:770693421928:layer:Klayers-p310-mysql-connector-python:3 |
| 3 | SQLobjectLayer-Feedback | 1 | python3.10, python3.11, python3.8, python3.9 | x86_64 | arn:aws:lambda:us-east-1:778618141948:layer:SQLobjectLayer-Feedback:1 |
| 4 | Klayers-p310-pycryptodome | 4 | python3.10 | x86_64 | arn:aws:lambda:us-east-1:770693421928:layer:Klayers-p310-pycryptodome:4 |

### Detalles de las Capas

1. **SlackLibs (Versión 1)**
   - Proporciona las bibliotecas necesarias para interactuar con la API de Slack.
   - Compatible con Python 3.8, 3.9 y 3.10.

2. **Klayers-p310-mysql-connector-python (Versión 3)**
   - Contiene el conector MySQL para Python, permitiendo la interacción con la base de datos MySQL.
   - Específicamente compatible con Python 3.10.

3. **SQLobjectLayer-Feedback (Versión 1)**
   - Proporciona la biblioteca SQLObject, utilizada para el mapeo objeto-relacional (ORM) en el proyecto.
   - Compatible con Python 3.8, 3.9, 3.10 y 3.11.

4. **Klayers-p310-pycryptodome (Versión 4)**
   - Incluye la biblioteca PyCryptodome, utilizada para la encriptación y desencriptación de datos sensibles.
   - Específicamente compatible con Python 3.10.

### Consideraciones de Compatibilidad

- Todas las capas son compatibles con la arquitectura x86_64.
- La versión de Python más compatible entre todas las capas es Python 3.10.
- Algunas capas (como las de Klayers) están específicamente optimizadas para Python 3.10.

### Implicaciones para el Desarrollo y Despliegue

1. **Versión de Python**: Se recomienda utilizar Python 3.10 para el desarrollo y despliegue de esta lambda, ya que es la versión común a todas las capas.

2. **Arquitectura**: La lambda debe desplegarse en un entorno x86_64.

3. **Actualizaciones**: Al actualizar cualquiera de estas capas, se debe verificar la compatibilidad con las demás y con el código de la lambda.

4. **Desarrollo Local**: Para el desarrollo local, se deben instalar versiones compatibles de estas bibliotecas para asegurar un comportamiento consistente entre el entorno de desarrollo y el de producción.

5. **Documentación de Dependencias**: Es importante mantener actualizada la documentación de estas capas y sus versiones para facilitar el mantenimiento y la resolución de problemas.

Estas capas de librerías son fundamentales para el funcionamiento de la lambda de feedback, proporcionando las herramientas necesarias para la interacción con Slack, el manejo de la base de datos, y la seguridad de los datos.

