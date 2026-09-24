//
const form = document.getElementById("tierForm");

form.addEventListener("submit", async (event) => {
  // now we haave the form submited and teh button clikked
  event.preventDefault();
  const button = event.submitter;
  const userTier = document.getElementById("user-tier");
  console.log(button.value, userTier.value);
  // function that sends request and recives the response
  const { message, error, UnAutorized, MissingSubscriptionError } =
    await requestTierPage(button.value, userTier.value).catch((err) => {
      console.warn(err.message);
    });

  if (message) {
    console.log(message);
  } else if (error) {
    console.warn(error);
  } else if (UnAutorized) {
    console.warn(UnAutorized);
  } else if (MissingSubscriptionError) {
    console.warn(MissingSubscriptionError);
  } else {
    console.error("Unkown error");
  }
});
// request resnder funtion for eaxh button
async function requestTierPage(reqTier, userTier) {
  return await fetch("/requestTier", {
    method: "POST",
    headers: { "content-type": "application/json", userTier: userTier },
    body: JSON.stringify({ requestTier: reqTier }),
  })
    .then((response) => response.json())
    .catch((err) => {
      throw new Error("Fetching error may be connection lost");
    });
}
