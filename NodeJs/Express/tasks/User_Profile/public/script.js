// --- POST /users : create a user, username derived from the email ---
const postUsersForm = document.getElementById("postUsersForm");

postUsersForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = postUsersForm.elements["name"].value;
  const email = postUsersForm.elements["email"].value;
  const username = email.split("@")[0];

  try {
    const response = await fetch(postUsersForm.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, username }),
    });

    const { message, err } = await response.json();

    if (message) {
      console.log(message);
    }
    if (err) {
      console.error(err);
    }
  } catch (error) {
    console.error(error.message);
  }
});

// --- GET /register?mockusers=<selected value> ---
const getUsersForm = document.getElementById("getUsersForm");

getUsersForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const params = new URLSearchParams({
    mockusers: getUsersForm.elements["source"].value,
  });

  try {
    const response = await fetch(`${getUsersForm.action}?${params}`);
    const { users, err } = await response.json();

    if (users) {
      if (Array.isArray(users)) {
        users.forEach((user) => console.log(user));
      } else {
        console.log(users);
      }
    }
    if (err) {
      console.error(err);
    }
  } catch (error) {
    console.error(error);
  }
});
