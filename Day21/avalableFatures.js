const featureFlags = {
  darkMode: { allowedRoles: ["Admin", "Developer", "Guest"], betaOnly: false },
  billingDashboard: { allowedRoles: ["Admin", "Finance"], betaOnly: false },
  aiCodeAssistant: { allowedRoles: ["Developer"], betaOnly: true },
  analyticsTab: {
    allowedRoles: ["Admin", "Developer", "Finance"],
    betaOnly: false,
  },
};

//get avalabel futes fo tehentered users
//funtion acepts object an ruser
//first generate array form ntries
//teh distructure them   using [futes,[[role],[betaonly]]]
//if user inclides at alowed return him to teh resukt to be returnnde
function getAvailableFeatures(config, userRole) {
  let toMapThen = Object.entries(config);

  let output = [];
  toMapThen.map(([feture, allowed]) => {
    if (allowed.allowedRoles.includes(userRole)) {
      output.push(feture);
    }
  });
  return output;
}
console.log(getAvailableFeatures(featureFlags, "Finance"));
