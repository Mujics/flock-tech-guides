"use strict";(self.webpackChunkfedpat_docs=self.webpackChunkfedpat_docs||[]).push([[673],{4699:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var s=n(4848),i=n(8453);const d={},t="Redhat Dependency Analitycs",c={id:"development/redhat-dependency-analitycs/redhat-dependency-analitycs",title:"Redhat Dependency Analitycs",description:"La extensi\xf3n Dependency Analytics (RHDA) de Red Hat te ayuda a identificar problemas de seguridad en el ciclo de vida de software mientras desarrollas la aplicaci\xf3n. Esta herramienta utiliza bases de datos de vulnerabilidades para ofrecerte la informaci\xf3n m\xe1s actualizada sobre posibles riesgos de seguridad.",source:"@site/docs/development/redhat-dependency-analitycs/redhat-dependency-analitycs.md",sourceDirName:"development/redhat-dependency-analitycs",slug:"/development/redhat-dependency-analitycs/",permalink:"/flock-tech-guides/development/redhat-dependency-analitycs/",draft:!1,unlisted:!1,editUrl:"https://github.com/Mujics/flock-tech-guides/tree/main/flock-tech-guides/docs/development/redhat-dependency-analitycs/redhat-dependency-analitycs.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Guia de Uso Postman",permalink:"/flock-tech-guides/development/postman-use-guide"},next:{title:"Cursor Guide",permalink:"/flock-tech-guides/development/cursor/cursor-guide"}},l={},o=[{value:"Soporte del plugin IDE",id:"soporte-del-plugin-ide",level:3},{value:"Instalacion",id:"instalacion",level:3}];function r(e){const a={h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"redhat-dependency-analitycs",children:"Redhat Dependency Analitycs"}),"\n",(0,s.jsxs)(a.p,{children:["La extensi\xf3n ",(0,s.jsx)(a.strong,{children:"Dependency Analytics (RHDA)"})," de Red Hat te ayuda a identificar problemas de seguridad en el ciclo de vida de software mientras desarrollas la aplicaci\xf3n. Esta herramienta utiliza bases de datos de vulnerabilidades para ofrecerte la informaci\xf3n m\xe1s actualizada sobre posibles riesgos de seguridad."]}),"\n",(0,s.jsx)(a.h3,{id:"soporte-del-plugin-ide",children:"Soporte del plugin IDE"}),"\n",(0,s.jsx)(a.p,{children:"El plugin IDE de an\xe1lisis de dependencias est\xe1 disponible para VS Code, Eclipse y cualquier IDE de JetBrains, incluidos IntelliJ y PyCharm."}),"\n",(0,s.jsx)(a.p,{children:"Esta extension permite desde el IDE realizar una analisis de vulnerabilidades sobre las dependencias que estemos usando en el \u201cpom.xml\u201d"}),"\n",(0,s.jsx)(a.h3,{id:"instalacion",children:"Instalacion"}),"\n",(0,s.jsx)(a.p,{children:"La extension es sencila de agregar, simplemente buscamos en el Marketplace de Extensiones \u201cRedhat Dependency Analitycs\u201d"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(8721).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Veamos un ejemplo:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(1e3).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Ahi podemos ver que la dependencia de la base de datos H2 tiene algun alerta"}),"\n",(0,s.jsx)(a.p,{children:"Le damos Clic con boton derecho sobre el area de trabajo del pom.xml y seleccionamos del menu contextual la opcion de Redhat Dependency Analytics Report"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(5491).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Realiza un escaneo en la base de conocimiento"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(4730).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Luego de unos segundos nos devuelve el analisis realizado"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(9397).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Buscamos abajo la que estaba alertada"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(1884).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Desplegamos la que dice Direct Vulnerabilities / Remediation"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(615).A+"",width:"1364",height:"813"})}),"\n",(0,s.jsx)(a.p,{children:"Alli nos lleva a la Base de conocimientos y su solucion"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(6974).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"En este caso es necesario especificar una version 2.2.220 o posterior de H2 Database Dependency"}),"\n",(0,s.jsx)(a.p,{children:"Se puede configurar manual o tambien ayudarse de Copilot"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(2537).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Como Copilot sugiere una modificacion por debajo unicamente modificamos el valor de la version"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(6784).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Agregamos 2.2.220"}),"\n",(0,s.jsx)(a.p,{children:"Ahi vemos que dejo de alertar"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"image.png",src:n(2602).A+"",width:"1920",height:"1020"})}),"\n",(0,s.jsx)(a.p,{children:"Todo este proceso permite adelantarse a las vulnerabilidades que pueden surgir en los Stages de Analisis de Dependencias de los Pipelines de CI/CD"})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},1e3:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 1-1a3f6fb6c38b0b653de87184de662db3.png"},2602:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 10-6ff85d9b53dc8b77cec7053f71a82f7e.png"},5491:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 2-72f891b855f5a7e706fa52385e9ca0dc.png"},4730:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 3-d8123a9eceef6fefcd9f38a1770b4dbf.png"},9397:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 4-b133636aa7d9989169c5a692948aaa2c.png"},1884:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 5-4d1895fe198afc52a90662cd4aa5cd65.png"},615:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 6-8e799c566b66b54fa4b56656d7dd8b5e.png"},6974:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 7-d93dde23ee32f7ca79e4b805035dfde6.png"},2537:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 8-b8502d5f8e1c4eea42a7f29bf6f52d07.png"},6784:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image 9-083c445d6a3cba2b51ec5d6e82f73e79.png"},8721:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/image-94dcc257ee9bb92c6ea6a5459d7c5304.png"},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>c});var s=n(6540);const i={},d=s.createContext(i);function t(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);