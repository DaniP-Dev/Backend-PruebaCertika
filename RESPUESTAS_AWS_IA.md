## Nota personal
En esta entrega priorice terminar todo funcionando de punta a punta y cumplir tiempos.  
El backend lo deje en Render porque mi cuenta de AWS estaba bloqueada por un pago pendiente de unas practicas personales.  
Sobre JavaScript vs TypeScript, ahi fui sincero conmigo: al inicio entendi mal el enunciado y pense que JavaScript era obligatorio.  
Cuando me di cuenta, el proyecto ya iba avanzado y por tiempos decidi terminarlo en JavaScript.

# Parte 3 - AWS (Conceptos basicos)

## 1) Donde desplegarias una aplicacion React o Next.js?
En este caso usaria Vercel, que fue donde desplegue el frontend de este proyecto, por su facilidad para conectar y desplegar desde GitHub.

## 2) Donde desplegarias una API Node.js?
Para una API Node.js me quede con Render porque fue la opcion mas practica y rapida para esta entrega.  
Pude haberlo hecho en AWS, pero tenia la cuenta bloqueada por un pago pendiente de unas practicas personales y por tiempo lo deje en Render.

## 3) Que servicio usarias para almacenar archivos?
He usado mucho Firebase Storage y es el que mas me gusta para almacenar archivos.

## 4) Que es Amazon S3?
S3 es un servicio de AWS para guardar archivos en la nube (imagenes, docs, backups, etc.).  
Se guarda todo en "buckets" y en general es confiable para almacenar datos.
## 5) Que es Amazon EC2?
EC2 son servidores virtuales en AWS.  
Tu eliges el tipo de maquina, el sistema operativo y lo configuras segun lo que necesite tu app.

## 6) Como protegerias las variables de entorno en AWS?
No las subiria al repo ni las dejaria escritas en el codigo.  
En AWS las guardaria en Secrets Manager y daria acceso solo a los servicios que realmente las necesiten.

---

# Parte 4 - Uso de Inteligencia Artificial

## Que herramienta utilice
Use Cursor como apoyo durante el desarrollo.

## Como me ayudo
Me ayudo bastante para avanzar mas rapido, sobre todo con estructura del proyecto, validaciones y redaccion del README.  
Tambien lo use para revisar errores puntuales y dejar mas claras las respuestas de la API.

## Dos ejemplos de prompts que use
1. "Revisa este controller de Express y dime que validaciones me faltan o que podria romperse."
2. "Ayudame a dejar un README claro para deploy en Render/Vercel con pasos para probar el CRUD."

## Como verifique que el codigo era correcto
Lo fui validando por partes: primero healthcheck del backend, despues probar endpoints en Swagger, y al final el flujo completo desde el frontend (crear, editar, completar y eliminar).  
Tambien corri tests del backend y revise variables/CORS en Render y Vercel para confirmar que en produccion funcionaba igual.
