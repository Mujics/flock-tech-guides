"use strict";(self.webpackChunkfedpat_docs=self.webpackChunkfedpat_docs||[]).push([[43],{3163:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var i=n(4848),s=n(8453);const d={},c="Documentaci\xf3n de la Lambda de Feedback",l={id:"proyectos/pibot/lambda-documentacion",title:"Documentaci\xf3n de la Lambda de Feedback",description:"Introducci\xf3n",source:"@site/docs/proyectos/pibot/lambda-documentacion.md",sourceDirName:"proyectos/pibot",slug:"/proyectos/pibot/lambda-documentacion",permalink:"/flock-tech-guides/proyectos/pibot/lambda-documentacion",draft:!1,unlisted:!1,editUrl:"https://github.com/Mujics/flock-tech-guides/tree/main/flock-tech-guides/docs/proyectos/pibot/lambda-documentacion.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Capas de Librer\xedas Lambda de Feedback",permalink:"/flock-tech-guides/proyectos/pibot/capas-de-librerias"},next:{title:"AI in Security",permalink:"/flock-tech-guides/infrastructure/ibm-cibersecurity-series-2024/ai-in-security"}},r={},o=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Componentes Principales",id:"componentes-principales",level:2},{value:"1. lambda_function.py",id:"1-lambda_functionpy",level:3},{value:"Comandos Principales:",id:"comandos-principales",level:4},{value:"Funcionalidades Clave:",id:"funcionalidades-clave",level:4},{value:"2. dbhelper.py",id:"2-dbhelperpy",level:3},{value:"Modelos Principales:",id:"modelos-principales",level:4},{value:"Funcionalidades Clave:",id:"funcionalidades-clave-1",level:4},{value:"3. slack_format_helper.py",id:"3-slack_format_helperpy",level:3},{value:"Componentes Principales:",id:"componentes-principales-1",level:4},{value:"4. messages.py",id:"4-messagespy",level:3},{value:"5. errors.py",id:"5-errorspy",level:3},{value:"Flujo de Trabajo Principal",id:"flujo-de-trabajo-principal",level:2},{value:"Caracter\xedsticas de Seguridad",id:"caracter\xedsticas-de-seguridad",level:2},{value:"Consideraciones de Implementaci\xf3n",id:"consideraciones-de-implementaci\xf3n",level:2},{value:"Extensibilidad",id:"extensibilidad",level:2},{value:"Conclusi\xf3n",id:"conclusi\xf3n",level:2}];function t(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"documentaci\xf3n-de-la-lambda-de-feedback",children:"Documentaci\xf3n de la Lambda de Feedback"}),"\n",(0,i.jsx)(a.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,i.jsx)(a.p,{children:"Esta lambda implementa un sistema de feedback para Slack, permitiendo a los usuarios solicitar, dar y revisar feedbacks dentro de la plataforma. El sistema est\xe1 dise\xf1ado para fomentar el crecimiento personal y profesional a trav\xe9s de retroalimentaci\xf3n estructurada."}),"\n",(0,i.jsx)(a.h2,{id:"componentes-principales",children:"Componentes Principales"}),"\n",(0,i.jsx)(a.h3,{id:"1-lambda_functionpy",children:"1. lambda_function.py"}),"\n",(0,i.jsx)(a.p,{children:"Este es el archivo principal que contiene la l\xf3gica de la aplicaci\xf3n Slack y maneja los diferentes comandos y acciones."}),"\n",(0,i.jsx)(a.h4,{id:"comandos-principales",children:"Comandos Principales:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"/feedback-dar"}),": Permite a los usuarios dar feedback a otros que lo han solicitado."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"/feedback-pedir"}),": Permite a los usuarios solicitar feedback de sus colegas."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"/feedback-ayuda"}),": Muestra informaci\xf3n de ayuda sobre c\xf3mo usar el sistema."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"/feedback-status"}),": Muestra el estado de los feedbacks del usuario (pendientes, recibidos, dados)."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"/feedback-auto-reflexion"}),": Permite a los usuarios realizar una auto-reflexi\xf3n."]}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"funcionalidades-clave",children:"Funcionalidades Clave:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Manejo de modales para solicitar y dar feedback."}),"\n",(0,i.jsx)(a.li,{children:"Procesamiento de acciones de botones en mensajes."}),"\n",(0,i.jsx)(a.li,{children:"Integraci\xf3n con una base de datos para almacenar y recuperar informaci\xf3n de feedbacks."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"2-dbhelperpy",children:"2. dbhelper.py"}),"\n",(0,i.jsx)(a.p,{children:"Este archivo contiene las definiciones de los modelos de datos y las funciones de ayuda para interactuar con la base de datos."}),"\n",(0,i.jsx)(a.h4,{id:"modelos-principales",children:"Modelos Principales:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"User"}),": Representa a un usuario en el sistema."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Feedback"}),": Almacena la informaci\xf3n de los feedbacks."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Role"}),": Define los roles de usuario en el sistema."]}),"\n"]}),"\n",(0,i.jsx)(a.h4,{id:"funcionalidades-clave-1",children:"Funcionalidades Clave:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Encriptaci\xf3n y desencriptaci\xf3n de mensajes de feedback para garantizar la privacidad."}),"\n",(0,i.jsx)(a.li,{children:"M\xe9todos para obtener feedbacks pendientes, recibidos y dados."}),"\n",(0,i.jsx)(a.li,{children:"Manejo de relaciones jer\xe1rquicas entre usuarios (supervisores)."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"3-slack_format_helperpy",children:"3. slack_format_helper.py"}),"\n",(0,i.jsx)(a.p,{children:"Este archivo contiene funciones y estructuras para formatear mensajes y modales en Slack."}),"\n",(0,i.jsx)(a.h4,{id:"componentes-principales-1",children:"Componentes Principales:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Definiciones de modales para pedir y dar feedback."}),"\n",(0,i.jsx)(a.li,{children:"Funciones para formatear listas de feedbacks y mensajes de notificaci\xf3n."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"4-messagespy",children:"4. messages.py"}),"\n",(0,i.jsx)(a.p,{children:"Contiene constantes y funciones para generar mensajes utilizados en la aplicaci\xf3n."}),"\n",(0,i.jsx)(a.h3,{id:"5-errorspy",children:"5. errors.py"}),"\n",(0,i.jsx)(a.p,{children:"Define las clases de excepciones personalizadas y mensajes de error utilizados en la aplicaci\xf3n."}),"\n",(0,i.jsx)(a.h2,{id:"flujo-de-trabajo-principal",children:"Flujo de Trabajo Principal"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Un usuario inicia una acci\xf3n usando un comando de slash en Slack."}),"\n",(0,i.jsxs)(a.li,{children:["La lambda procesa el comando y realiza la acci\xf3n correspondiente:","\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Abrir un modal para solicitar o dar feedback."}),"\n",(0,i.jsx)(a.li,{children:"Mostrar el estado de los feedbacks del usuario."}),"\n",(0,i.jsx)(a.li,{children:"Proporcionar informaci\xf3n de ayuda."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.li,{children:"Si es necesario, se interact\xfaa con la base de datos para almacenar o recuperar informaci\xf3n."}),"\n",(0,i.jsx)(a.li,{children:"Se env\xeda una respuesta formateada al usuario a trav\xe9s de la API de Slack."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"caracter\xedsticas-de-seguridad",children:"Caracter\xedsticas de Seguridad"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Los mensajes de feedback se encriptan antes de almacenarse en la base de datos."}),"\n",(0,i.jsx)(a.li,{children:"Se utilizan roles de usuario para controlar el acceso a ciertas funcionalidades."}),"\n",(0,i.jsx)(a.li,{children:"Se implementan validaciones para prevenir solicitudes de feedback duplicadas o no autorizadas."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"consideraciones-de-implementaci\xf3n",children:"Consideraciones de Implementaci\xf3n"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"La lambda est\xe1 dise\xf1ada para funcionar en un entorno AWS Lambda."}),"\n",(0,i.jsx)(a.li,{children:"Se requiere una base de datos MySQL para almacenar la informaci\xf3n de usuarios y feedbacks."}),"\n",(0,i.jsx)(a.li,{children:"Las credenciales de la base de datos y las claves de encriptaci\xf3n se manejan a trav\xe9s de variables de entorno por seguridad."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"extensibilidad",children:"Extensibilidad"}),"\n",(0,i.jsx)(a.p,{children:"El sistema est\xe1 dise\xf1ado para ser f\xe1cilmente extensible:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Nuevos comandos pueden ser agregados implementando nuevas funciones en ",(0,i.jsx)(a.code,{children:"lambda_function.py"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["El formato de los mensajes y modales puede ser modificado en ",(0,i.jsx)(a.code,{children:"slack_format_helper.py"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:["Se pueden agregar nuevos tipos de feedbacks o campos adicionales extendiendo el modelo ",(0,i.jsx)(a.code,{children:"Feedback"})," en ",(0,i.jsx)(a.code,{children:"dbhelper.py"}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"conclusi\xf3n",children:"Conclusi\xf3n"}),"\n",(0,i.jsx)(a.p,{children:"Esta lambda proporciona una robusta soluci\xf3n para manejar feedbacks dentro de Slack, fomentando una cultura de mejora continua y comunicaci\xf3n abierta dentro de las organizaciones. Su dise\xf1o modular y uso de buenas pr\xe1cticas de seguridad la hacen ideal para implementaciones en entornos empresariales."})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>c,x:()=>l});var i=n(6540);const s={},d=i.createContext(s);function c(e){const a=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(d.Provider,{value:a},e.children)}}}]);