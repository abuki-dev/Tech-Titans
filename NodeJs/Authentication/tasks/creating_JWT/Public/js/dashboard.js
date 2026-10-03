// 1. Greeting based on the visitor's local time
const hour = new Date().getHours();
const greeting =
  hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
document.getElementById("greeting").textContent = greeting;

// 2. Live clock, updates every second
const clock = document.getElementById("clock");
function tick() {
  clock.textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
tick();
setInterval(tick, 1000);

// 3. If the avatar image fails to load, show the user's initials instead.
// (We use addEventListener, not onerror="..." in the HTML, because inline
// handlers are blocked by a strict CSP.)
const avatar = document.getElementById("avatar");
avatar.addEventListener("error", () => {
  const initials = avatar.dataset.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const fallback = document.createElement("div");
  fallback.className = "avatar-fallback";
  fallback.textContent = initials;
  avatar.replaceWith(fallback);
});
