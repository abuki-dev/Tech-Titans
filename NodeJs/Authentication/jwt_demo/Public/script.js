const out = document.getElementById("out");
const show = (data) => (out.textContent = JSON.stringify(data, null, 2));

// LOGIN: send credentials, then save the token in localStorage (option B).
// The server has ALSO set an httpOnly cookie (option A) which JS cannot see.
document.getElementById("login").addEventListener("click", async () => {
  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  });
  const data = await res.json();
  if (res.ok) localStorage.setItem("token", data.token);
  show(data);
});

// Call the protected route using ONLY the cookie (browser sends it automatically).
document.getElementById("profileCookie").addEventListener("click", async () => {
  const res = await fetch("/profile");
  show({ status: res.status, ...(await res.json()) });
});

// Call the protected route using the token from localStorage in the Authorization header.
document.getElementById("profileBearer").addEventListener("click", async () => {
  const token = localStorage.getItem("token");
  const res = await fetch("/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  show({ status: res.status, ...(await res.json()) });
});

// Decode (NOT verify) the token. A JWT is only encoded, anyone can read the payload.
document.getElementById("decode").addEventListener("click", () => {
  const token = localStorage.getItem("token");
  if (!token) return show({ error: "No token in localStorage" });
  const [header, payload] = token.split(".");
  const decode = (part) =>
    JSON.parse(atob(part.replace(/-/g, "+").replace(/_/g, "/")));
  show({ header: decode(header), payload: decode(payload) });
});

// LOGOUT: clear the cookie on the server and the token in localStorage.
document.getElementById("logout").addEventListener("click", async () => {
  localStorage.removeItem("token");
  const res = await fetch("/logout", { method: "POST" });
  show(await res.json());
});
