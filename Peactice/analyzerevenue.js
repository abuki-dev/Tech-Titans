//Grouping by Braches
//for objects of the objectitems
// chek if the total using reduce
//if total gereterthat 2000
//push curunt object with  total at the report object
//when finish retunrn
const branchSales = {
  AddisAbaba: [500, 800, 900], // Total: 2200 (Keep)
  Dessie: [300, 400, 200], // Total: 900  (Skip)
  BahirDar: [1000, 1200, 1000], // Total: 2700 (Keep)
  Mekelle: [400, 600, 3000], // Total: 1500 (Skip)
};
function abakyzeData(sales) {
  const report = [];
  for (const element in sales) {
    let totalrev = sales[element].reduce((sum, item) => (sum += item), 0);
    if (totalrev >= 2000) {
      report.push({
        branch: element,
        totalRevenue: totalrev,
      });
    }
  }
  return report;
}
console.log(abakyzeData(branchSales));
