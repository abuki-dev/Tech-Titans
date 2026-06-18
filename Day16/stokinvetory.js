//resok arrays aregenerated whe therold is low
//chekif the currunt stok if it less of thetsold
//if true push currun titems name to restocklists
//add currunt costs to totalResokck
//chek if teh catgeory exist in lsis of stock names if no creat enew
//else push currun item to category
//catagory add teh cuurunt by the items nedded items
function generte_sock_alert(invData) {
  const Report = {
    restockList: [],
    totalRestockCost: 0,
    byCategory: {},
  };
  invData.forEach(({ item, category, stock, minTelshold, costPerUnit }) => {
    if (stock < minTelshold) {
      Report.restockList.push(item);
      Report.totalRestockCost += minTelshold * 2 - stock * costPerUnit;
      if (!(category in Report.byCategory)) {
        Report.byCategory[category] = [];
      }
      Report.byCategory[category].push(item);
    }
  });
}
