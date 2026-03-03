# Flock Style and Linting Guide  


## Introducción  

El propósito de la siguiente guía definir para cada una de las tecnologias trabajadas en Flock cual serian las herramientas de Linteo y Formateo incluyendo guia de instalacion y configuracion. 

Un linter o también conocido como analizador de código estático, es una herramienta de software que verifica y analiza el código fuente de un programa en busca de posibles errores, problemas de estilo y violaciones de las convenciones de codificación.

Tanto las herramientas de Linteo como las de formateo que vamos a usar aplican sus reglas las cuales son configurables si asi lo requirieramos 

![https://i.giphy.com/media/l2JejvPDaGGUaeEb6/giphy.gif](https://i.giphy.com/media/l2JejvPDaGGUaeEb6/giphy.gif)

## Java  

Para Java recomendamos usar el IDE IntelliJ Community Edition

### Formateo   

#### IntelliJ Save Action Plugin 

Usamos el plugin de IntelliJ "Save Action" para formatear codigo al guardar, organizar imports y metodos. 

  

Segui estas instrucciones para instalarlo: 

  

1. File > Settings > Plugins. 

2. Busca “Save Actions X” and dale click a install. 

3. Busca “Actions on Save” en el panel Settings and configuralo como muestra la imagen 

  

[![Captura-de-pantalla-2024-07-11-a-la-s-14-10-21.png](https://i.postimg.cc/ZqBBxMgr/Captura-de-pantalla-2024-07-11-a-la-s-14-10-21.png)](https://postimg.cc/SX4xyDms) 

  

#### Google xml Code Style 

  

Seguimos el Google Java code style y la mejor forma de implementarlo es usabdo el formateo automatico de IntelliJ. 

Para lograr esto necesitamos configurar el code style en IntelliJ usando el archivo xml de configuracion  

  

Lo podes encontrar [aca](https://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml) 

  

Y seguir estas instrucciones para importarlo: 

  

1. Bajar el .xml. 

2. Ir a File > Settings > Editor > Code style. 

3. Importar el .xml: 

4. Ir a la seccion de Java y cambiar el tamaño de indentado a 4. 

  

![code style](https://image.ibb.co/jRB9k0/code-style.png) 

  

### Linteo 

#### SonarLint en IntelliJ 

SonarLint es un plugin para IntelliJ para linteo.  

Para configurarlo vamos a seguir las siguientes instrucciones  

  

1. Ir a File > Settings > Plugins. 
2. Buscar "Sonarlint" y seleccionar "Browse repositories". La siguiente imagen va a aparecer: 
3. Presinar Install 

  

![sonarlint plugin](https://image.ibb.co/gvDxsf/sonarlint1.png) 

  

  

Esta tool va a ser configurada automaticamente por IntelliJ 

Cuando estemos escribiendo codigo las areas problematicas van a ser marcadas y la tool va a proveer sugerencias de posibles arreglos al error. 

  

![sonarlint highlight](https://image.ibb.co/bFriXf/sonarlint2.png) 

  

La tool puede ser customizada para cambiar el color del resaltado si se desea. Para hacer esto ir a  

  

File > Settings SonarLint: 

  

![sonarlint colors](https://image.ibb.co/b5O8yL/sonarlint3.png) 

  

  

## NetCore  

  

### Formateo  

En NetCore lo que vamos a usar para el formateo automatico es seguir las especificaciones de Visual Studio Code. 

Para esto vamos a activar el code cleanup on save que tambien va a formatear el codigo 
[![Captura-de-pantalla-2024-07-15-a-la-s-10-06-13.png](https://i.postimg.cc/SstfcXPM/Captura-de-pantalla-2024-07-15-a-la-s-10-06-13.png)](https://postimg.cc/WFgZv4TN)

  
### Linteo 

Como herramienta de Linteo en NetCore vamos a usar Sonar, al igual que en Java
para instalarlo se puede hacer por el siguiente [link](https://marketplace.visualstudio.com/items?itemName=SonarSource.SonarLintforVisualStudio2022
)  
 

## Tecnologias Basadas en Javascript  
### EsLint 

Todas las tecnologias basadas en Javascript usaran el mismo Linter, [EsLint](https://eslint.org/) es por mucho el linter más popular para Javascript pudiendo extender su funcionalidad con plugins y configuraciones para mejorar su uso en tecnologias como Angular, React o NodeJs             

ESLint puede ser instalado de forma global ( aunque esto puede generar complicaciones si estamos trabajando con mas de una tecnologia que lo use ) o Local dentro de la carpeta de proyecto sobre el que queremos correrlo

Mas adelante en este documento vas a poder ver la forma de instalar EsLint con las configuraciones para cada tech 

### Configuracion en Visual Studio Code
Para integrar ESLint a nuestro desarrollo vamos a instalar la extension en Visual Studio Code que se llama ESLint la cual nos provee feedback constante sobre las correcciones

1. Ir a Plugins en el sidebar. 
2. Buscar "ESLint", la siguiente imagen va a aparecer: 
3. Presinar Instalar 

[![Visual Studio Code ESLint](https://i.postimg.cc/8CXQZ4FD/Captura-de-pantalla-2024-07-11-a-la-s-17-14-04.png)](https://postimg.cc/gwhTJvqB)

### Prettier
Para el Formateo de todas las tecnologias basadas en Javascript vamos a usar Prettier, un formateador opineonado, ya que no solo formatea si no que estipula un estilo de codigo, que si bien es configurable, nosotros vamos a aplicar sin modificar

[Aca](https://prettier.io/docs/en/rationale) podes ver una guia de ellos en donde explican su logica de estilo

La forma mas facil de instalarlo es mediente nuestro IDE Visual Studio Code, haciendo uso de los plugins

1. Ir a Plugins en el sidebar. 
2. Buscar "Prettier", la siguiente imagen va a aparecer: 
3. Presinar Instalar 

[![Captura-de-pantalla-2024-07-15-a-la-s-12-45-36.png](https://i.postimg.cc/SNZXBmDZ/Captura-de-pantalla-2024-07-15-a-la-s-12-45-36.png)](https://postimg.cc/Ln16fFdf)

Luego para su uso la mejor forma es automatizarlo y activar el formateo al guardar, esto lo podemos activar en VSCode en las opciones como muestra la imagen 
![format-on-save](https://doimages.nyc3.cdn.digitaloceanspaces.com/006Community/prettier-in-vs-code/prettier-in-vscode5.png)


Pero al tener instalado EsLint pueden existir algunas reglas que conflictuen o generacion errores, ante esta situacion en lo que es formateo siempre vamos a seguir el estilo de Prettier. 
Para lograr esto vamos a mandar a deshabilitar algunas reglas de EsLint de la siguiente manera
[![Captura-de-pantalla-2024-07-15-a-la-s-11-24-30.png](https://i.postimg.cc/6QBY3gjP/Captura-de-pantalla-2024-07-15-a-la-s-11-24-30.png)](https://postimg.cc/18Yp7CZ0)
[Aca](https://github.com/prettier/eslint-config-prettier) podes encontrar la explicacion completa


## ESLint para Angular con Typescript  

Para correr ESLint en Angular vamos a usar la propia herramienta de Angular CLI la cual va a configurar todo correctamente
Corriendo el siguiente codigo en la consola se realiza la instalacion 

`ng add @angular-eslint/schematics`


## React  
Para instalar ESLint en angular vamos a usar el siguiente comando en al terminal del proyecto, el mismo tambien va a configurar el linteo en la tech 

`npm install eslint eslint-plugin-react --save-dev`

## NodeJs  
Para instalar ESLint en NodeJs vamos a usar el Wizard de configuracion, primero instalando eslint base con el siguiente comando en la consola del proyecto

`npm install eslint --save-dev`

Luego el siguiente comando corre el wizard de configuracion

`./node_modules/.bin/eslint --init`

Aca un ejemplo de posibles respuestas para desarrollo en NodeJs
[![Captura-de-pantalla-2024-07-17-a-la-s-15-40-30.png](https://i.postimg.cc/j5QcHPLp/Captura-de-pantalla-2024-07-17-a-la-s-15-40-30.png)](https://postimg.cc/njrqZsK2) 