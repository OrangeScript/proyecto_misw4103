# BackstopJs

## Instrucciones de uso:

Acceder a la carpeta:

```bash
cd BackstopJs
```

Descargar las dependencias necesarias:

```bash
npm i -g backstop
```

Ejecutar el reporte para todos los pasos del escenario 1

```bash
backstop test
```

Luego

```bash
backstop approve
```

Estos dos comandos deben realizarse con esta configuración en backstop.json:

```JSON
{
  "id": "backstop_default",
  "viewports": [
    {
      "label": "default",
      "width": 800,
      "height": 600
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "label": "Step 1",
      "url": "./comparativeImages/kraken_Scenario1_4480_step_1.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_4480_step_1.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Step 2",
      "url": "./comparativeImages/kraken_Scenario1_4480_step_2.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_4480_step_2.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Step 3",
      "url": "./comparativeImages/kraken_Scenario1_4480_step_3.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_4480_step_3.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Step 4",
      "url": "./comparativeImages/kraken_Scenario1_4480_step_4.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_4480_step_4.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Step 5",
      "url": "./comparativeImages/kraken_Scenario1_4480_step_5.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_4480_step_5.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
```

Luego cambiar la configuración a este JSON:

```JSON
{
  "id": "backstop_default",
  "viewports": [
    {
      "label": "default",
      "width": 800,
      "height": 600
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "label": "Step 1",
      "url": "./comparativeImages/kraken_Scenario1_5712_step_1.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_5712_step_1.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Step 2",
      "url": "./comparativeImages/kraken_Scenario1_5712_step_2.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_5712_step_2.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Step 3",
      "url": "./comparativeImages/kraken_Scenario1_5712_step_3.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_5712_step_3.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Step 4",
      "url": "./comparativeImages/kraken_Scenario1_5712_step_4.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_5712_step_4.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "Step 5",
      "url": "./comparativeImages/kraken_Scenario1_5712_step_5.png",
      "referenceUrl": "./comparativeImages/kraken_Scenario1_5712_step_5.png",
      "misMatchThreshold": 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
```

Y ejecutar este comando:

```bash
backstop test
```

En la carpeta de comparativeImages, se pusieron todas las imágenes resultantes de los screenshots de todos los pasos del escenario 1, por eso, la primera comparación se realiza con las imágenes de la versión: 4.48.0 y la segunda, cuando se sustituye el JSON de configuración de nuevo, con la versión: 5.71.2.
