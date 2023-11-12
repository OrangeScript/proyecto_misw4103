# Entrega Cypress Escenarios
En la carpeta de cada herramienta, se especifican los requisitos e instrucciones de ejecución de las pruebas.

### Herramientas
- Cypress (GHOST 5.71.2)

## Requerimientos

|                  | Version          |
|------------------|------------------|
| NPM              | v10.2.3          |
| Node             | 16.20.2          |
| Ghost            | 5.71.2           |
| Cypress          | v13.3.2          |

- Asegurese de tener instalado Ghost
- Ghost 5.71.2 debe estar iniciado y corriendo en http://localhost:2368/ghost
- Tener un usuario creado en su ambiente local de Ghost
- Dentro de la carpeta de nuestro proyecto en cypress > fixtures > ``` credentials.json ``` ajustar las propiedades url, email y password para poder ejecutar las pruebas con las credenciales de su instalación local de Ghost

### Escenarios

En el siguiente enlace se encuentran los escenarios descritos a detalle:

https://github.com/OrangeScript/proyecto_misw4103/wiki/Funcionalidades-y-escenarios-a-probar


## Instalación 
Para instalar cypress de manera global, lo podemos hacer abriendo una terminal e ingresando el siguiente comando:
```bash
npm install -g cypress
```
*Fuente: [Cómo automatizar pruebas a interfaces web con Cypress](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html) de Software Design Lab*

**Ejcución del proyecto**

A continuación las formas de ejecutar el código:

A. A través de la interfaz gráfica de Cypress siguiendo los pasos continuación:
      
      1.- Bajar el proyecto de Github y estando dentro del directorio de este proyecto
      2.- Abrir una terminal de consola de comandos y teclear:
```bash
cypress open
```
      3.- Una vez que abre la pantalla principal de Projects dar clic en el boton  + Add project
      4.- Arrastrar la carpeta del proyecto que bajamos o bién navegar manualmente hasta agregar dicho directorio.
      5.- Una vez que se agrega el proyecto dar clic sobre el mismo
      6.- Seleccionar la opción E2E Testing
      7.- Seleccionar el navegador (en este caso Chrome)
      8.- Dar clic en el boton Start E2E Testing in Chrome
      9.- Aparece nuestros archivos specs y damos clic sobre la prueba que deseamos ejecutar y damos click
      10.- En seguida veremos la ejecución de los eventos aleatorios.

B. A través de la linea de comandos siguiendo los pasos a continuación:
      
      1.- Bajar el proyecto de Github y estando dentro del directorio de este proyecto
      2.- Abrir una terminal de consola de comandos.
      3.- Colocarnos hasta el directorio que descomprimimos
      4.- Ejecutar el comando:
```bash
cypress run --headless
```      
      5.- En seguida veremos los resultados de la ejecución así como los pantallazos.