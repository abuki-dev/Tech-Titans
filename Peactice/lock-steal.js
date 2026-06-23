const systemSettings = {
  env: {
    port: 8080,
    database: "prod_db",
  },
  ui: {
    theme: "light",
    fontSize: "14px",
  },
};

//loking teh properties inside uing freez nd steal
//steal allows updatuing but not ading freex lokes everytin
//freeze teh env and stela the ui
function secureConfigurations(appState) {
  for (const key in appState) {
    if (key == "env") {
      Object.freeze(appState[key]);
    } else if (key == "ui") {
      Object.seal(appState[key]);
    }
  }
  return appState;
}
let secured = secureConfigurations(systemSettings);
secured.env.port = 9090; // Should fail/be ignored!
secured.ui.theme = "red"; // Should work perfectly!
secured.ui.sidebar = "open";
console.log(secured);
