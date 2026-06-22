//goal count acoout types wheter subscriotion or somting
//collect mothly revenue
//catagoraize account type counts
//collect inactive ussers
//count mothly users

//create funtion
//create report empty object
//for ecah user plan price and ststus
//cretae monthy rvenue if not then add currunt price
//at plancounts if currurun tplan doesnt exist cretae then count +1
//if inactive usesr detected push then to inactive users
const subscriptions = [
  { id: "sub_1", user: "Alice", plan: "Premium", price: 49, status: "active" },
  { id: "sub_2", user: "Bob", plan: "Basic", price: 19, status: "canceled" },
  {
    id: "sub_3",
    user: "Charlie",
    plan: "Premium",
    price: 49,
    status: "active",
  },
  {
    id: "sub_4",
    user: "David",
    plan: "Enterprise",
    price: 199,
    status: "active",
  },
  { id: "sub_5", user: "Eve", plan: "Basic", price: 19, status: "cancelled" },
];
function Generatw_planrepor(accounts) {
  //inicialize report object
  const Report = {
    moth_revenue: 0,
    plans: {},
    inactiveUsers: [],
  };
  accounts.forEach(({ user, plan, price, status }) => {
    Report.moth_revenue += price;
    if (!(plan in Report.plans)) {
      Report.plans[plan] = 0;
    }
    Report.plans[plan] += 1;
    if (status !== "active") {
      Report.inactiveUsers.push(user);
    }
  });
  return Report;
}
console.log(Generatw_planrepor(subscriptions));
