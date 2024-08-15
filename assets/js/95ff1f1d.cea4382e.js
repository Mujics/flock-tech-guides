"use strict";(self.webpackChunkfedpat_docs=self.webpackChunkfedpat_docs||[]).push([[727],{9413:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var n=s(4848),o=s(8453);const r={},i="Guia Postman",t={id:"development/postman-use-guide",title:"Guia Postman",description:"Introducci\xf3n",source:"@site/docs/development/postman-use-guide.md",sourceDirName:"development",slug:"/development/postman-use-guide",permalink:"/flock-tech-guides/development/postman-use-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/Mujics/flock-tech-guides/tree/main/flock-tech-guides/docs/development/postman-use-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Flock Style and Linting Guide",permalink:"/flock-tech-guides/development/style-guide"},next:{title:"java",permalink:"/flock-tech-guides/backend/java/"}},l={},c=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Alternativas a Postman",id:"alternativas-a-postman",level:2},{value:"Creacion de Ambientes",id:"creacion-de-ambientes",level:2},{value:"Variables incluidas en Postman",id:"variables-incluidas-en-postman",level:2},{value:"Variables Globales y de Ambiente",id:"variables-globales-y-de-ambiente",level:2},{value:"Codigo de la Request",id:"codigo-de-la-request",level:2},{value:"Pre-Request Scripts",id:"pre-request-scripts",level:2},{value:"Post-Request Scripts",id:"post-request-scripts",level:2},{value:"PostBot y Code Snippets",id:"postbot-y-code-snippets",level:2},{value:"Mock server",id:"mock-server",level:2},{value:"Ejecucion de coleccion",id:"ejecucion-de-coleccion",level:2},{value:"Importar coleccion Swagger",id:"importar-coleccion-swagger",level:2},{value:"Recursos Extra",id:"recursos-extra",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"guia-postman",children:"Guia Postman"}),"\n",(0,n.jsx)(a.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,n.jsxs)(a.p,{children:["La siguiente guia tiene como objetivo explicar el uso de la herramienta ",(0,n.jsx)(a.a,{href:"https://www.postman.com/",children:"Postman"})]}),"\n",(0,n.jsx)(a.p,{children:"Es una herramienta conocida y usada por muchos pero el obejtivo sera explicar algunas funcionalidades no tan usadas que pueden ayudarnos en nuestro dia a dia tanto como desarrolladores asi como QAs."}),"\n",(0,n.jsxs)(a.p,{children:["Cualquiera de las cosas aca mencionadas asi como muchas otras cuestiones pueden verse en detalle en la ",(0,n.jsx)(a.a,{href:"https://learning.postman.com/docs/introduction/overview/",children:"documentacion oficial"})]}),"\n",(0,n.jsx)(a.h2,{id:"alternativas-a-postman",children:"Alternativas a Postman"}),"\n",(0,n.jsx)(a.p,{children:"Si bien vamos a abordar toda la explicacion en base a postman, esto deberia poder trasaladarse sin demasiada modificacion a una aplicacion de testeo de Apis que soporte scripts."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://www.usebruno.com/",children:"Bruno"})," es la alternativa que durante mi investigacion tenia mayor funcionalidad con un modelo de pago flexible"]}),"\n",(0,n.jsxs)(a.p,{children:["Comparto este ",(0,n.jsx)(a.a,{href:"https://www.paradigmadigital.com/dev/postman-vs-bruno-pruebas-apis/",children:"articulo"})," que habla sobre la comparativa y puede servir para el futuro si el modelo de pago en Postman se vuelve mas restrictivo."]}),"\n",(0,n.jsx)(a.h2,{id:"creacion-de-ambientes",children:"Creacion de Ambientes"}),"\n",(0,n.jsx)(a.p,{children:"Los ambientes en Postman son configuraciones que uno puede cargar, asignar un nombre y guardar en ellos variables con valores estativos o dinamicos."}),"\n",(0,n.jsx)(a.p,{children:"Estan pensandos para representar los ambientes que un proyecto tiene, normalmente llamdos Desarrollo (Dev), QA y Produccion (Prod) pero se pueden usar de forma flexible para otro tipo de situaciones como por ejemplo diferentes instancias de los ambientes que tiene un servicio externo con el que integrarnos."}),"\n",(0,n.jsxs)(a.p,{children:["En la siguiente imagen podemos ver que presionando el boton a la derecha con un archivo y un ojo se abre el panel que lista los ambientes existentes y la forma de agregar mas\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/kV9t64tr",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/0NKG4KkN/Captura-de-pantalla-2024-07-23-a-la-s-17-26-03.png",alt:"Captura-de-pantalla-2024-07-23-a-la-s-17-26-03.png"})})]}),"\n",(0,n.jsxs)(a.p,{children:["Creamos un ambiente que contendra la url del servicio externo que vamos a usar de ejemplo, generando dentro de el una variable que contenga dicha url\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/Btg45B7w",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/L6d5pytR/Captura-de-pantalla-2024-07-23-a-la-s-17-51-57.png",alt:"Captura-de-pantalla-2024-07-23-a-la-s-17-51-57.png"})})]}),"\n",(0,n.jsxs)(a.p,{children:["Luego con el ambiente seleccionado en el selector de ambientes podemos hacer uso de la variable y hacer una llamada sin tener que poner manualmente la url, esto no solo permite usarla en multiples request sin tener que ingresarla manualmente si no que su edicion, de ser necesaria se haria solo en la variable de ambiente y no en cada request generada\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/rzL5RM7N",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/Y2vRVS3Z/Captura-de-pantalla-2024-07-23-a-la-s-17-52-06.png",alt:"Captura-de-pantalla-2024-07-23-a-la-s-17-52-06.png"})})]}),"\n",(0,n.jsx)(a.p,{children:"Otro ejemplo que les va a ser muy util es usar una variable para la Autenticacion, cargando el token en el ambiente podemos setearle la variable una sola vez y luego todas nuestras request usuarian una variable para utilizarlo"}),"\n",(0,n.jsxs)(a.p,{children:["En la siguiente imagen podemos ver como seleccionamos la variable con el token\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/JtvsDG2Y",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/qMMyFKXr/Captura-de-pantalla-2024-08-12-a-la-s-10-17-37.png",alt:"Captura-de-pantalla-2024-08-12-a-la-s-10-17-37.png"})})]}),"\n",(0,n.jsx)(a.h2,{id:"variables-incluidas-en-postman",children:"Variables incluidas en Postman"}),"\n",(0,n.jsx)(a.p,{children:"Otra feature de Postman no tan conocida son las variables ya incluidas en el sistema, a las que se accede por sus nombres siempre iniciando con random..\nEstas variables generan un valor al azar en un monton de areas, sea numericas, texto o incluso imagenes."}),"\n",(0,n.jsxs)(a.p,{children:["Son especialmente utiles para hacer llamadas y que cada una pueda tener un valor diferente sin nosotros tener que preocuparnos por completarlas individualmente.\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/2VcJQLWv",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/13sQZp5W/Captura-de-pantalla-2024-08-12-a-la-s-10-24-55.png",alt:"Captura-de-pantalla-2024-08-12-a-la-s-10-24-55.png"})})]}),"\n",(0,n.jsx)(a.p,{children:"Si necesitamos variables con fechas es posiblemente pedirle a postman tanto una fecha al azar en el futuro, en el pasado o cerca al presente\nPero tambien si necesitamos la fecha actual a la hora de hacer la request postman tiene incorporada la variable isoTimestamp que nos permite pedirle este dato"}),"\n",(0,n.jsx)(a.h2,{id:"variables-globales-y-de-ambiente",children:"Variables Globales y de Ambiente"}),"\n",(0,n.jsx)(a.p,{children:"Como vimos en al imagen mas arriba, existen dos tipos de variables globales y de ambiente"}),"\n",(0,n.jsx)(a.p,{children:"Variables de ambiente: existen dentro de un ambiente, al cambiar el mismo dejan de existir o pasan a tener otro valor dependiente de como este configurado el ambiente"}),"\n",(0,n.jsx)(a.p,{children:"Variables globales: pueden ser usadas sin importar el ambiente seleccionado y son solamente una forma de evitar repetir valores en las diferentes llamadas"}),"\n",(0,n.jsx)(a.h2,{id:"codigo-de-la-request",children:"Codigo de la Request"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://postimg.cc/FYs9ZsYX",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/JzjGRsm0/Capturadepantalla2024-07-23alas21-07-47-ezgif-com-crop.png",alt:"Capturadepantalla2024-07-23alas21-07-47-ezgif-com-crop.png"})})}),"\n",(0,n.jsx)(a.p,{children:"Peque\xf1o tip, en la seccion de la derecha esta el siguiente simbolo que te permite ver el codigo de la request, esto puede ayudar si tenes dudas sobre que request postman esta armando y si es la correcta"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://postimg.cc/ykrVLCcJ",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/kg7BXn5y/Captura-de-pantalla-2024-07-23-a-la-s-21-11-36.png",alt:"Captura-de-pantalla-2024-07-23-a-la-s-21-11-36.png"})})}),"\n",(0,n.jsx)(a.h2,{id:"pre-request-scripts",children:"Pre-Request Scripts"}),"\n",(0,n.jsx)(a.p,{children:"Dentro de una request tenemos la pesta\xf1a de scripts, con dos secciones Pre-request y Pre-response."}),"\n",(0,n.jsx)(a.p,{children:"Vamos a ver primero la seccion de Pre-request en donde vamos a poder ejecutar codigo antes de hacer la request sobre la que estamos trabajando"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://postimg.cc/06qmYNRN",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/xdXRSk6L/Captura-de-pantalla-2024-08-05-a-la-s-11-48-40.png",alt:"Captura-de-pantalla-2024-08-05-a-la-s-11-48-40.png"})})}),"\n",(0,n.jsxs)(a.p,{children:["Aca podemos ver las siguientes llamadas, primero con el codigo siguiente\n",(0,n.jsx)(a.code,{children:'pm.sendRequest("URL", function (err, response) {'}),"\n",(0,n.jsx)(a.code,{children:'  "Codigo a ejecutar con la informacion de la request" });'})]}),"\n",(0,n.jsxs)(a.p,{children:["Ejecutamos una request con la url solicitada, en el ejemplo una llamada a la siguiente url ",(0,n.jsx)(a.em,{children:(0,n.jsx)(a.a,{href:"https://restful-booker.herokuapp.com/booking",children:"https://restful-booker.herokuapp.com/booking"})})]}),"\n",(0,n.jsxs)(a.p,{children:["Luego preguntamos si hay algo en la variable ",(0,n.jsx)(a.em,{children:"err"}),", si es asi logueamos un error el cual se puede ver en la consola de postman la cual se puede acceder desde el costado izquiero inferior de la aplicacion\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/D8nfnZWr",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/pXnmQ5R6/Captura-de-pantalla-2024-08-05-a-la-s-16-38-12.png",alt:"Captura-de-pantalla-2024-08-05-a-la-s-16-38-12.png"})})]}),"\n",(0,n.jsxs)(a.p,{children:["Si todo salio bien, tomamos el cuerpo de la respuesta y extraemos el valor del ",(0,n.jsx)(a.em,{children:"bookingId"})," para loguearlo en consola y a la vez setearlo en una variable de ambiente"]}),"\n",(0,n.jsx)(a.h2,{id:"post-request-scripts",children:"Post-Request Scripts"}),"\n",(0,n.jsx)(a.p,{children:"La seccion de Post-Request nos va a ayudar a validar la respuestas de la request.\nA continuacion vamos a ver un peque\xf1o codigo para validar diferentes campos de la request"}),"\n",(0,n.jsx)(a.p,{children:"Primero podemos validar el status code de la respuesta con la siguiente linea"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:'pm.test("Status code is 200", function () {     pm.response.to.have.status(200); });'})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"En el lado izquierdo del igual estamos declarando el nombre del test"}),"\n",(0,n.jsx)(a.li,{children:"En el lado derecho comparamos el responseCode con el valor 200 de exito"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Vamos a validar ahora el contenido del cuerpo o body de la request\nPara esto vamos a usar el siguiente codigo que analiza el contenido de Body usando json y guarda el resultado en la variable data"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"var data = JSON.parse(pm.response.text());"})}),"\n",(0,n.jsx)(a.p,{children:"Ahora podemos hacer comprobaciones similares a la hecha con el c\xf3digo en el primer caso."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Primero haremos una comprobaci\xf3n del mensaje recibido en el resultado message, que se obtiene de la variable data con los resultados diseccionados."}),"\n",(0,n.jsx)(a.li,{children:"En el segundo caso, se comprueba que responseBody contiene la cadena \u201cclientId\u201d."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Si se cumple, en cada comprobaci\xf3n se pondr\xe1 PASS y si alguna no se cumple se pondr\xe1 FAIL."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:'pm.test("Body is correct", function () {     pm.response.to.have.body("Client successfully created!"); });'})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:'pm.test("Body has serviceId", function () {     pm.expect(pm.response.text()).to.include("serviceId"); });'})}),"\n",(0,n.jsx)(a.p,{children:"Hasta ahora, todas las lineas de c\xf3digo han servido para hacer comprobaciones de que los resultados devueltos en la petici\xf3n son correctos.\nLa siguiente linea obtiene el identificador del cliente y lo guarda en una variable de entorno, para su posterior uso en otras peticiones."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:'pm.environment.set("CLIENT_ID_1", data.clientId);'})}),"\n",(0,n.jsx)(a.p,{children:"Aca estamos guardando la informacion del clientId en la variable CLIENT ID 1, si dicha variable no existe, se crea, y si ya existe, se sobreescribe su valor."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://postimg.cc/JDZwwrZB",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/ZRDJd0qj/Captura-de-pantalla-2024-08-15-a-la-s-15-03-00.png",alt:"Captura-de-pantalla-2024-08-15-a-la-s-15-03-00.png"})})}),"\n",(0,n.jsx)(a.h2,{id:"postbot-y-code-snippets",children:"PostBot y Code Snippets"}),"\n",(0,n.jsx)(a.p,{children:"Otras dos herramientas que nos brinda Postman y que nos ayuda a crear los scripts"}),"\n",(0,n.jsxs)(a.p,{children:["Los Code Snippets nos brindan peque\xf1os framentos de codigo que realizan una funcion puntual, hay un gran listado y ayudan no solo a crear los scripts mas rapidos si no tambien ense\xf1an como escribir el codigo necesario\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/G4LXm9pN",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/mgMJVHWb/Captura-de-pantalla-2024-07-23-a-la-s-21-29-56.png",alt:"Captura-de-pantalla-2024-07-23-a-la-s-21-29-56.png"})})]}),"\n",(0,n.jsxs)(a.p,{children:["A la vez Postman ya incoporo un ",(0,n.jsx)(a.a,{href:"https://www.postman.com/product/postbot/",children:"bot"})," que entre muchas otras funcionalidades nos puede ayudar a la generacion de scripts\n",(0,n.jsx)(a.img,{src:"https://voyager.postman.com/gif/postbot-streamline-testing.gif",alt:""})]}),"\n",(0,n.jsx)(a.h2,{id:"mock-server",children:"Mock server"}),"\n",(0,n.jsxs)(a.p,{children:["Otra feature de Postman tal vez no tan utilizada es el ",(0,n.jsx)(a.a,{href:"https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/",children:"Mock Server"}),"\n",(0,n.jsx)(a.img,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20231223102507/Url-of-Private.png",alt:"mock-server"})]}),"\n",(0,n.jsxs)(a.p,{children:["No voy a entrar tanto en detalle aca, pero es una feature para de manera muy simple tener disponible un servidor que responda una respuesta mockeada, se puede generar para multiples endpoints, con diferentes estados y condiciones\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/2qgFCm7j",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/qRvmXvtK/Captura-de-pantalla-2024-07-25-a-la-s-15-20-42.png",alt:"Captura-de-pantalla-2024-07-25-a-la-s-15-20-42.png"})})]}),"\n",(0,n.jsx)(a.p,{children:"Lamentablemente la funcionalidad para compartir estos mock servers entre el equipo es algo solo disponible para los usuarios pagos, a pesar de esto puedo ser una feature util para mockear servidores externos y por ejemplo evitar momentos de no disponibilidad o para mockear el backend rapidamente y desarrollar el frontend sin dependencia"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20231223103154/Run-api.png",alt:"mock-request"})}),"\n",(0,n.jsx)(a.h2,{id:"ejecucion-de-coleccion",children:"Ejecucion de coleccion"}),"\n",(0,n.jsx)(a.p,{children:"Con todo lo aprendido es posible crear una colecci\xf3n de peticiones concatenadas en las que resultados de unas pueden ser usadas en otras. Esto, junto con la posibilidad de creaci\xf3n de datos de manera din\xe1mica, nos permite realizar un test de regresi\xf3n completo que comprueba la funcionalidad principal de una API"}),"\n",(0,n.jsx)(a.p,{children:"Lamentablemente en la version gratis de Postman no tenemos acceso al Collection Runner, pero si es posible correr un grupo de request con cierto orden dandole run a la carpeta que las contiene"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://postimg.cc/D4Q1kLkR",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/1X2BFrWR/Captura-de-pantalla-2024-08-05-a-la-s-16-12-14.png",alt:"Captura-de-pantalla-2024-08-05-a-la-s-16-12-14.png"})})}),"\n",(0,n.jsx)(a.p,{children:"Supuestamente el free plan tiene limitado cuantas veces puede correr colecciones, por lo que hay que tener esto presente tambien"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://postimg.cc/sBzhRK4m",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/YSGfYs45/Captura-de-pantalla-2024-08-05-a-la-s-16-31-38.png",alt:"Captura-de-pantalla-2024-08-05-a-la-s-16-31-38.png"})})}),"\n",(0,n.jsx)(a.p,{children:"Al correr una coleccion podemos ver una pantalla de resultado con todas las request hechas y las validaciones ejecutadas para cada una entre otros datos que nos pueden ser util"}),"\n",(0,n.jsx)(a.h2,{id:"importar-coleccion-swagger",children:"Importar coleccion Swagger"}),"\n",(0,n.jsxs)(a.p,{children:["Otro peque\xf1o tip es la posiblidad de importar toda la coleccion de SwaggerUI a Postman\nDesde el sitio de swagger tenemos que buscar la url del json, aca podemos verlo en la parte superior marcada en azul por la seleccion del mouse\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/RNCQ360p",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/ZKpfM6zm/Captura-de-pantalla-2024-08-14-a-la-s-15-35-50.png",alt:"Captura-de-pantalla-2024-08-14-a-la-s-15-35-50.png"})})]}),"\n",(0,n.jsxs)(a.p,{children:["Luego en postman simplemente tenemos que darle al boton de ",(0,n.jsx)(a.em,{children:"Import"})," y pegar esa misma url en la ventana que aparece, esto va a permitir importar toda la coleccion completa\n",(0,n.jsx)(a.a,{href:"https://postimg.cc/mz2bkVgv",children:(0,n.jsx)(a.img,{src:"https://i.postimg.cc/rm5zhPXw/Captura-de-pantalla-2024-08-12-a-la-s-11-20-51.png",alt:"Captura-de-pantalla-2024-08-12-a-la-s-11-20-51.png"})})]}),"\n",(0,n.jsx)(a.h2,{id:"recursos-extra",children:"Recursos Extra"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://www.youtube.com/watch?v=oSAjVfm2RRM",children:"Un buen video explicativo en espa\xf1ol de los temas vistos y ejemplos "})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://learning.postman.com/docs/introduction/overview/",children:"Tambien la documentacion de Postman esta muy bien armada"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://accionait-my.sharepoint.com/:v:/r/personal/lucas_mujica_flockit_com_ar/Documents/Llamada%20con%20Santiago%20y%201%20ma%CC%81s-20240715_111647-Grabacio%CC%81n%20de%20la%20reunio%CC%81n.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=G3agr3",children:"Video se Santi explicando como importar la coleccion y pedir el token"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>t});var n=s(6540);const o={},r=n.createContext(o);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);