const securityLogs = [
  {
    id: 101,
    event: {
      serverId: "srv-01",
      alertType: "UNAUTHORIZED_ACCESS",
      level: "CRITICAL",
    },
  },
  {
    id: 102,
    event: {
      serverId: "srv-02",
      alertType: "HIGH_MEMORY_USAGE",
      level: "WARNING",
    },
  },
  {
    id: 103,
    event: { serverId: "srv-01", alertType: "PORT_SCAN", level: "CRITICAL" },
  }, // Same server, same level, different alert!
  {
    id: 104,
    event: { serverId: "srv-03", alertType: "DISK_FAILURE", level: "CRITICAL" },
  },
  {
    id: 105,
    event: {
      serverId: "srv-02",
      alertType: "HIGH_MEMORY_USAGE",
      level: "WARNING",
    },
  }, // Network duplicate log entry!
];

function processSecurityLogs(logs) {
  const alertTypes = new Set();
  const serverIncidentTracker = new Map();
  logs.forEach(({ event: { serverId, alertType, level } }) => {
    alertTypes.add(alertType);
    if (!serverIncidentTracker.has(serverId)) {
      serverIncidentTracker.set(serverId, []);
    }
    !serverIncidentTracker.get(serverId).includes(level) &&
      serverIncidentTracker.get(serverId).push(level);
  });
  return { alertTypes, serverIncidentTracker };
}
console.log(processSecurityLogs(securityLogs));
