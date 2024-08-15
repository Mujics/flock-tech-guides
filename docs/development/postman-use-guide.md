# Guia Postman 
## Introducción 

La siguiente guia tiene como objetivo explicar el uso de la herramienta [Postman](https://www.postman.com/) 

Es una herramienta conocida y usada por muchos pero el obejtivo sera explicar algunas funcionalidades no tan usadas que pueden ayudarnos en nuestro dia a dia tanto como desarrolladores asi como QAs.

Cualquiera de las cosas aca mencionadas asi como muchas otras cuestiones pueden verse en detalle en la [documentacion oficial](https://learning.postman.com/docs/introduction/overview/) 

## Alternativas a Postman 
Si bien vamos a abordar toda la explicacion en base a postman, esto deberia poder trasaladarse sin demasiada modificacion a una aplicacion de testeo de Apis que soporte scripts. 

[Bruno](https://www.usebruno.com/) es la alternativa que durante mi investigacion tenia mayor funcionalidad con un modelo de pago flexible 

Comparto este [articulo](https://www.paradigmadigital.com/dev/postman-vs-bruno-pruebas-apis/) que habla sobre la comparativa y puede servir para el futuro si el modelo de pago en Postman se vuelve mas restrictivo. 


## Creacion de Ambientes 
Los ambientes en Postman son configuraciones que uno puede cargar, asignar un nombre y guardar en ellos variables con valores estativos o dinamicos. 

Estan pensandos para representar los ambientes que un proyecto tiene, normalmente llamdos Desarrollo (Dev), QA y Produccion (Prod) pero se pueden usar de forma flexible para otro tipo de situaciones como por ejemplo diferentes instancias de los ambientes que tiene un servicio externo con el que integrarnos.

En la siguiente imagen podemos ver que presionando el boton a la derecha con un archivo y un ojo se abre el panel que lista los ambientes existentes y la forma de agregar mas
[![Captura-de-pantalla-2024-07-23-a-la-s-17-26-03.png](https://i.postimg.cc/0NKG4KkN/Captura-de-pantalla-2024-07-23-a-la-s-17-26-03.png)](https://postimg.cc/kV9t64tr)

Creamos un ambiente que contendra la url del servicio externo que vamos a usar de ejemplo, generando dentro de el una variable que contenga dicha url
[![Captura-de-pantalla-2024-07-23-a-la-s-17-51-57.png](https://i.postimg.cc/L6d5pytR/Captura-de-pantalla-2024-07-23-a-la-s-17-51-57.png)](https://postimg.cc/Btg45B7w)

Luego con el ambiente seleccionado en el selector de ambientes podemos hacer uso de la variable y hacer una llamada sin tener que poner manualmente la url, esto no solo permite usarla en multiples request sin tener que ingresarla manualmente si no que su edicion, de ser necesaria se haria solo en la variable de ambiente y no en cada request generada 
[![Captura-de-pantalla-2024-07-23-a-la-s-17-52-06.png](https://i.postimg.cc/Y2vRVS3Z/Captura-de-pantalla-2024-07-23-a-la-s-17-52-06.png)](https://postimg.cc/rzL5RM7N)

Otro ejemplo que les va a ser muy util es usar una variable para la Autenticacion, cargando el token en el ambiente podemos setearle la variable una sola vez y luego todas nuestras request usuarian una variable para utilizarlo

En la siguiente imagen podemos ver como seleccionamos la variable con el token
[![Captura-de-pantalla-2024-08-12-a-la-s-10-17-37.png](https://i.postimg.cc/qMMyFKXr/Captura-de-pantalla-2024-08-12-a-la-s-10-17-37.png)](https://postimg.cc/JtvsDG2Y)

## Variables incluidas en Postman

Otra feature de Postman no tan conocida son las variables ya incluidas en el sistema, a las que se accede por sus nombres siempre iniciando con random..
Estas variables generan un valor al azar en un monton de areas, sea numericas, texto o incluso imagenes. 

Son especialmente utiles para hacer llamadas y que cada una pueda tener un valor diferente sin nosotros tener que preocuparnos por completarlas individualmente.
[![Captura-de-pantalla-2024-08-12-a-la-s-10-24-55.png](https://i.postimg.cc/13sQZp5W/Captura-de-pantalla-2024-08-12-a-la-s-10-24-55.png)](https://postimg.cc/2VcJQLWv)

Si necesitamos variables con fechas es posiblemente pedirle a postman tanto una fecha al azar en el futuro, en el pasado o cerca al presente 
Pero tambien si necesitamos la fecha actual a la hora de hacer la request postman tiene incorporada la variable isoTimestamp que nos permite pedirle este dato

## Variables Globales y de Ambiente 

Como vimos en al imagen mas arriba, existen dos tipos de variables globales y de ambiente

Variables de ambiente: existen dentro de un ambiente, al cambiar el mismo dejan de existir o pasan a tener otro valor dependiente de como este configurado el ambiente

Variables globales: pueden ser usadas sin importar el ambiente seleccionado y son solamente una forma de evitar repetir valores en las diferentes llamadas
 
## Codigo de la Request

[![Capturadepantalla2024-07-23alas21-07-47-ezgif-com-crop.png](https://i.postimg.cc/JzjGRsm0/Capturadepantalla2024-07-23alas21-07-47-ezgif-com-crop.png)](https://postimg.cc/FYs9ZsYX)

Pequeño tip, en la seccion de la derecha esta el siguiente simbolo que te permite ver el codigo de la request, esto puede ayudar si tenes dudas sobre que request postman esta armando y si es la correcta

[![Captura-de-pantalla-2024-07-23-a-la-s-21-11-36.png](https://i.postimg.cc/kg7BXn5y/Captura-de-pantalla-2024-07-23-a-la-s-21-11-36.png)](https://postimg.cc/ykrVLCcJ)

## Pre-Request Scripts 
Dentro de una request tenemos la pestaña de scripts, con dos secciones Pre-request y Pre-response.

Vamos a ver primero la seccion de Pre-request en donde vamos a poder ejecutar codigo antes de hacer la request sobre la que estamos trabajando

[![Captura-de-pantalla-2024-08-05-a-la-s-11-48-40.png](https://i.postimg.cc/xdXRSk6L/Captura-de-pantalla-2024-08-05-a-la-s-11-48-40.png)](https://postimg.cc/06qmYNRN)

Aca podemos ver las siguientes llamadas, primero con el codigo siguiente
`pm.sendRequest("URL", function (err, response) {`
`  "Codigo a ejecutar con la informacion de la request" });`

Ejecutamos una request con la url solicitada, en el ejemplo una llamada a la siguiente url _https://restful-booker.herokuapp.com/booking_

Luego preguntamos si hay algo en la variable _err_, si es asi logueamos un error el cual se puede ver en la consola de postman la cual se puede acceder desde el costado izquiero inferior de la aplicacion
[![Captura-de-pantalla-2024-08-05-a-la-s-16-38-12.png](https://i.postimg.cc/pXnmQ5R6/Captura-de-pantalla-2024-08-05-a-la-s-16-38-12.png)](https://postimg.cc/D8nfnZWr)

Si todo salio bien, tomamos el cuerpo de la respuesta y extraemos el valor del _bookingId_ para loguearlo en consola y a la vez setearlo en una variable de ambiente 
 
## Post-Request Scripts 
La seccion de Post-Request nos va a ayudar a validar la respuestas de la request. 
A continuacion vamos a ver un pequeño codigo para validar diferentes campos de la request

Primero podemos validar el status code de la respuesta con la siguiente linea 

`pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});`

* En el lado izquierdo del igual estamos declarando el nombre del test
* En el lado derecho comparamos el responseCode con el valor 200 de exito

Vamos a validar ahora el contenido del cuerpo o body de la request
Para esto vamos a usar el siguiente codigo que analiza el contenido de Body usando json y guarda el resultado en la variable data

`var data = JSON.parse(pm.response.text());`

Ahora podemos hacer comprobaciones similares a la hecha con el código en el primer caso. 

* Primero haremos una comprobación del mensaje recibido en el resultado message, que se obtiene de la variable data con los resultados diseccionados. 
* En el segundo caso, se comprueba que responseBody contiene la cadena “clientId”. 

Si se cumple, en cada comprobación se pondrá PASS y si alguna no se cumple se pondrá FAIL.


`pm.test("Body is correct", function () {
    pm.response.to.have.body("Client successfully created!");
});`

`pm.test("Body has serviceId", function () {
    pm.expect(pm.response.text()).to.include("serviceId");
});`

Hasta ahora, todas las lineas de código han servido para hacer comprobaciones de que los resultados devueltos en la petición son correctos. 
La siguiente linea obtiene el identificador del cliente y lo guarda en una variable de entorno, para su posterior uso en otras peticiones.

`pm.environment.set("CLIENT_ID_1", data.clientId);`

Aca estamos guardando la informacion del clientId en la variable CLIENT ID 1, si dicha variable no existe, se crea, y si ya existe, se sobreescribe su valor.

[![Captura-de-pantalla-2024-08-15-a-la-s-15-03-00.png](https://i.postimg.cc/ZRDJd0qj/Captura-de-pantalla-2024-08-15-a-la-s-15-03-00.png)](https://postimg.cc/JDZwwrZB)

## PostBot y Code Snippets
Otras dos herramientas que nos brinda Postman y que nos ayuda a crear los scripts

Los Code Snippets nos brindan pequeños framentos de codigo que realizan una funcion puntual, hay un gran listado y ayudan no solo a crear los scripts mas rapidos si no tambien enseñan como escribir el codigo necesario
[![Captura-de-pantalla-2024-07-23-a-la-s-21-29-56.png](https://i.postimg.cc/mgMJVHWb/Captura-de-pantalla-2024-07-23-a-la-s-21-29-56.png)](https://postimg.cc/G4LXm9pN)

A la vez Postman ya incoporo un [bot](https://www.postman.com/product/postbot/) que entre muchas otras funcionalidades nos puede ayudar a la generacion de scripts 
![](https://voyager.postman.com/gif/postbot-streamline-testing.gif)

## Mock server
Otra feature de Postman tal vez no tan utilizada es el [Mock Server](https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)
![mock-server](https://media.geeksforgeeks.org/wp-content/uploads/20231223102507/Url-of-Private.png)

No voy a entrar tanto en detalle aca, pero es una feature para de manera muy simple tener disponible un servidor que responda una respuesta mockeada, se puede generar para multiples endpoints, con diferentes estados y condiciones
[![Captura-de-pantalla-2024-07-25-a-la-s-15-20-42.png](https://i.postimg.cc/qRvmXvtK/Captura-de-pantalla-2024-07-25-a-la-s-15-20-42.png)](https://postimg.cc/2qgFCm7j)

Lamentablemente la funcionalidad para compartir estos mock servers entre el equipo es algo solo disponible para los usuarios pagos, a pesar de esto puedo ser una feature util para mockear servidores externos y por ejemplo evitar momentos de no disponibilidad o para mockear el backend rapidamente y desarrollar el frontend sin dependencia

![mock-request](https://media.geeksforgeeks.org/wp-content/uploads/20231223103154/Run-api.png)

## Ejecucion de coleccion

Con todo lo aprendido es posible crear una colección de peticiones concatenadas en las que resultados de unas pueden ser usadas en otras. Esto, junto con la posibilidad de creación de datos de manera dinámica, nos permite realizar un test de regresión completo que comprueba la funcionalidad principal de una API

Lamentablemente en la version gratis de Postman no tenemos acceso al Collection Runner, pero si es posible correr un grupo de request con cierto orden dandole run a la carpeta que las contiene 

[![Captura-de-pantalla-2024-08-05-a-la-s-16-12-14.png](https://i.postimg.cc/1X2BFrWR/Captura-de-pantalla-2024-08-05-a-la-s-16-12-14.png)](https://postimg.cc/D4Q1kLkR)

Supuestamente el free plan tiene limitado cuantas veces puede correr colecciones, por lo que hay que tener esto presente tambien 

[![Captura-de-pantalla-2024-08-05-a-la-s-16-31-38.png](https://i.postimg.cc/YSGfYs45/Captura-de-pantalla-2024-08-05-a-la-s-16-31-38.png)](https://postimg.cc/sBzhRK4m)

Al correr una coleccion podemos ver una pantalla de resultado con todas las request hechas y las validaciones ejecutadas para cada una entre otros datos que nos pueden ser util 

## Importar coleccion Swagger

Otro pequeño tip es la posiblidad de importar toda la coleccion de SwaggerUI a Postman 
Desde el sitio de swagger tenemos que buscar la url del json, aca podemos verlo en la parte superior marcada en azul por la seleccion del mouse
[![Captura-de-pantalla-2024-08-14-a-la-s-15-35-50.png](https://i.postimg.cc/ZKpfM6zm/Captura-de-pantalla-2024-08-14-a-la-s-15-35-50.png)](https://postimg.cc/RNCQ360p)

Luego en postman simplemente tenemos que darle al boton de _Import_ y pegar esa misma url en la ventana que aparece, esto va a permitir importar toda la coleccion completa
[![Captura-de-pantalla-2024-08-12-a-la-s-11-20-51.png](https://i.postimg.cc/rm5zhPXw/Captura-de-pantalla-2024-08-12-a-la-s-11-20-51.png)](https://postimg.cc/mz2bkVgv)

## Recursos Extra


* [Un buen video explicativo en español de los temas vistos y ejemplos ](https://www.youtube.com/watch?v=oSAjVfm2RRM)

* [Tambien la documentacion de Postman esta muy bien armada](https://learning.postman.com/docs/introduction/overview/)

* [Video se Santi explicando como importar la coleccion y pedir el token](https://accionait-my.sharepoint.com/:v:/r/personal/lucas_mujica_flockit_com_ar/Documents/Llamada%20con%20Santiago%20y%201%20ma%CC%81s-20240715_111647-Grabacio%CC%81n%20de%20la%20reunio%CC%81n.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=G3agr3)
 
 

 

 