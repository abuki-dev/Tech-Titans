let sendbutton = document.getElementById("create_clinet");
let Cilients = document.getElementById("Cilients");
const Allclients = [];

sendbutton.addEventListener("click", () => {
  try {
    creatNewclient();
    console.log("New client created");
  } catch (error) {
    console.log(error.message);
  }
});

function creatNewclient() {
  const client = new WebSocket("ws://localhost:4000"); // Fixed protocol typo ws: -> ws://

  client.mark = Allclients.length + 1;

  // Create main card wrapper for this client using Tailwind classes
  const div = document.createElement("div");
  div.className =
    "client flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50";

  // Left side info (Title + status badge container)
  const infoWrapper = document.createElement("div");
  infoWrapper.className = "flex items-center gap-3 flex-wrap";

  const titleSpan = document.createElement("span");
  titleSpan.className = "font-semibold text-slate-200 text-sm tracking-wide";
  titleSpan.textContent = "Connected Client #" + client.mark;

  infoWrapper.appendChild(titleSpan);
  div.append(infoWrapper);

  // Event when message arrives from server
  client.onmessage = (event) => {
    const message = document.createElement("span");
    message.className =
      "px-3 py-1 text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full cursor-pointer animate-pulse hover:bg-emerald-500/20 transition-colors";
    message.textContent = "New Msg 🟢";
    infoWrapper.append(message);

    console.log(event.data);

    message.addEventListener("click", (evnt) => {
      evnt.stopImmediatePropagation();
      message.remove(); // Dismiss notification badge on click
    });
  };

  // Button Action Container
  const actionWrapper = document.createElement("div");
  actionWrapper.className =
    "flex items-center gap-2 w-full sm:w-auto justify-end";

  // Request message button
  let requestmsg = document.createElement("button");
  requestmsg.className =
    "request_msg px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer shadow-sm";
  requestmsg.textContent = "Request Msg";

  requestmsg.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    client.send(
      JSON.stringify({
        message: "Hello Im client => [ " + client.mark + " ]",
        mark: client.mark,
      }),
    );
  });

  // Disconnect button
  let disconnectbtn = document.createElement("button");
  disconnectbtn.className =
    "disconnect px-3.5 py-2 text-xs font-semibold rounded-lg bg-rose-600/80 hover:bg-rose-600 text-white transition-colors cursor-pointer shadow-sm";
  disconnectbtn.textContent = "Disconnect";

  disconnectbtn.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    client.close();
  });

  actionWrapper.append(requestmsg, disconnectbtn);
  div.append(actionWrapper);

  // Handle close event
  client.onclose = () => {
    disconnectbtn.textContent = "Disconnected";
    disconnectbtn.className =
      "px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-700 text-slate-400 cursor-not-allowed";
    requestmsg.remove();

    div.classList.add("opacity-50", "border-rose-900/50");
    Allclients.splice(client.mark - 1, 1);

    setTimeout(() => {
      div.remove();
    }, 1500);
  };

  Cilients.append(div);
  Allclients.push(client);
}
