const form = document.getElementById("deleteItem");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!event.submitter) {
    return;
  }
  const userRole = event.submitter.value;
  console.log(userRole);
  const idType = form.elements["id_type"].value;

  try {
    const response = await fetch(`/deleteitem/${encodeURIComponent(idType)}`, {
      method: "POST",
      headers: {
        user_role: userRole,
      },
    });

    const { ERROR, message } = await response.json();

    if (ERROR) {
      console.warn(ERROR);
    }
    if (message) {
      console.log(message);
    }
  } catch (error) {
    console.error(error);
  }
});
