//creta funtion then fom object rnties filter user[1].status=="active" an store tehem at Ready to mat
//first filter or remove usere who are idele
//filte data where status==active
//teh retrive data to map ARRytopap
//map users teh if cpu usage is bouve 80
const serverCluster = {
  node_01: { status: "active", cpu: 45 },
  node_02: { status: "idle", cpu: 10 },
  node_03: { status: "active", cpu: 88 },
  node_04: { status: "active", cpu: 92 },
  node_05: { status: "idle", cpu: 5 },
};
function optimizeServers(infraData) {
  let Filtered = Object.entries(infraData).filter(
    (item) => item[1].status == "active",
  );
  let mapped = Filtered.map((data) => {
    let Value = "";
    if (data[1].cpu > 80) {
      Value = "SCALE_UP";
    } else {
      Value = "MONITOR";
    }
    return {
      nodeId: data[0],
      cpu: data[1].cpu,
      actionRequired: Value,
    };
  });
  return mapped;
}

console.log(optimizeServers(serverCluster));
console.log(serverCluster);
