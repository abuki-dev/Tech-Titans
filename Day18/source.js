const users = [
  { id: 1, username: "alex_d", email: "alex@example.com", isLoggedIn: true },
  { id: 2, username: "sarah_k", email: "sarah@example.com", isLoggedIn: true },
  { id: 3, username: "jake_m", email: "jake@example.com", isLoggedIn: true },
  { id: 4, username: "emma_w", email: "emma@example.com", isLoggedIn: false },
];

function delete_useraccount() {
  users[0] = null;
}
module.exports = { users, delete_useraccount };
