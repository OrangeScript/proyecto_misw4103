const playwright = require("playwright");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");
const {
  getFormattedTimestamp,
  getArgValue,
  createArrayFromNumber,
} = require("./utils.js");
const { options } = config;

let scenarioIndex = getArgValue("scenario");
let stepsNumber = getArgValue("steps");
let steps = createArrayFromNumber(stepsNumber);

const resultFolderRoute = `./results/scenario-${scenarioIndex}-${getFormattedTimestamp()}`;
const compareImageV1Route = (step) =>
  `../v4.48.0/kraken-node-scenarios/screenshots/kraken_Scenario${scenarioIndex}_4480_step_${step}.png`;
const compareImageV2Route = (step) =>
  `../v5.71.2/kraken-node-scenarios/screenshots/kraken_Scenario${scenarioIndex}_5712_step_${step}.png`;

async function executeTest() {
  if (steps.length === 0) {
    return;
  }
  let resultInfo = {};

  for (let step of steps) {
    const compareImageRoute = `${resultFolderRoute}/compare-Scenario${scenarioIndex}_step_${step}.png`;

    if (!fs.existsSync(resultFolderRoute)) {
      fs.mkdirSync(resultFolderRoute, {
        recursive: true,
      });
    }

    const data = await compareImages(
      fs.readFileSync(compareImageV1Route(step)),
      fs.readFileSync(compareImageV2Route(step)),
      options
    );

    resultInfo[step] = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime,
    };

    fs.writeFileSync(compareImageRoute, data.getBuffer());
    fs.writeFileSync(
      `${resultFolderRoute}/report.html`,
      createReport(resultInfo)
    );
  }
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report under the results folder");
  return resultInfo;
}

function browser(scenario, step, info) {
  const nestedScreenshotsLevel = "../../../";
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Step: ${step}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${nestedScreenshotsLevel}v4.48.0/kraken-node-scenarios/screenshots/kraken_Scenario${scenario}_4480_step_${step}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${nestedScreenshotsLevel}v5.71.2/kraken-node-scenarios/screenshots/Kraken_Scenario${scenario}_5712_step_${step}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-Scenario${scenario}_step_${step}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(resInfo) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="../../index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <h2>Scenario: ${scenarioIndex}</h2>
            <p>Executed: ${JSON.stringify(new Date())}</p>
            <div id="visualizer">
                ${steps.map((step) =>
                  browser(scenarioIndex, step, resInfo[step])
                )}
            </div>
        </body>
    </html>`;
}
(async () => console.log(await executeTest()))();
