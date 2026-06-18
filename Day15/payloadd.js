const userReceived = {
  username: "abuki_dev",
  email: "abuki@example.com",
  password: "superSecretPassword123",
  isAdmin: false,
  country: "Ethiopia",
};
function payloadUser(securData) {
  //coping teh data by technical way
  const { isAdmin, password, ...toBeimported } = securData;
  return {
    ...toBeimported,
    isVerfied: true,
  };
}
let Updated = payloadUser(userReceived);
console.log(Updated);
const badApiData = {
  user_name: "abuki_dev",
};
function normalize(apiData) {
  this.username = apiData.username;
  this.access = "scroll";
  return apiData;
}
let update = normalize(badApiData);
console.log(update);
