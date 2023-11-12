# Entrega Kraken Node Escenarios

En la carpeta de cada herramienta, se especifican los requisitos e instrucciones de ejecución de las pruebas.

### Herramientas

- Kraken (GHOST 5.71.2)

## Requerimientos

|                | Version                  |
| -------------- | ------------------------ |
| NPM            | 6.13.14                  |
| Node           | 16.20.2                  |
| Android Studio | Giraffe 2022.3.1 Patch 2 |
| Ghost          | 5.71.2                   |

- Asegurese de tener instalado Ghost
- Ghost 5.71.2 debe estar iniciado y corriendo en http://localhost:2368/
- Tener un usuario creado en su ambiente local de Ghost

### Escenarios

En el siguiente enlace se encuentran los escenarios descritos a detalle:

https://github.com/OrangeScript/proyecto_misw4103/wiki/Funcionalidades-y-escenarios-a-probar

## Instalación

En caso de no tener instalada la herramienta kraken, lo puede hacer abriendo una terminal e ingresando el siguiente comando:

```bash
npm install kraken-node -g
```

_Fuente: [Cómo utilizar la herramienta kraken](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#2) de Software Design Lab_
**Instalación del proyecto**

1. Instale las siguientes dependendencias dentro la carpeta "Kraken"

```bash
npm install chai
```

2. Exporte en PATH (Linux) o incluya en el PATH de las varables de entorno (Windows) la ruta bin del SDK de Android, sobre todo el directorio platform-tools

_Nota: Si es conocida la ruta de instalación del SDK de Android, abra Android Studio e ingrese a File > Settings, en la seccion Languages & Frameworks seleccione la subsección Android SDK. Allí encontrará la ruta donde se encuentra instalado el SDK en el campo Android SDK Location._ 3. Dentro de la carpeta Kraken de este proyecto, encontrará el archivo _properties.json_, reemplace en este archivo los valores de las propiedades _EMAIL_, _PASSWORD_, _LOGIN_URL_ y _GHOST_VERSION_ con el usuario, contraseña, url y version de ghost que tiene en su máquina.

## Ejecución

Para la ejecución se debe utilizar _kraken-node_ que se instaló de manera global. Debe usar la ruta relativa de la instalación, ejecutandolo desde la carpeta Kraken de éste proyecto.

```bash
./node_modules/kraken-node/bin/kraken-node run

```
