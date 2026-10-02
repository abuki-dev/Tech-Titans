// Run: node server.js   then open http://localhost:3000
// No npm install needed. Requires Node 14+.
const http = require("http");
const crypto = require("crypto");

const PORT = 3000;

function buildCsp(nonce, reportOnly) {
  const parts = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'`,
    `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ];
  if (reportOnly) parts.push("report-uri /csp-report");
  return parts.join("; ");
}

function page(nonce, mode) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>CSP + Permissions-Policy test</title>
<style nonce="${nonce}">
  body { font-family: system-ui, sans-serif; max-width: 760px; margin: 2rem auto; padding: 0 1rem; }
  li { margin: .6rem 0; }
  .ok   { color: #0a7d2c; font-weight: 600; }
  .bad  { color: #b3261e; font-weight: 600; }
  .wait { color: #777; }
  code  { background: #eee; padding: 1px 5px; border-radius: 4px; }
</style>
</head>
<body>
<h1>CSP + Permissions-Policy test</h1>
<p>Mode: <b>${mode}</b>. Open DevTools (Console + Network) to see the violation messages.
Switch: <a href="/">enforced</a> | <a href="/report-only">report-only</a></p>

<ol>
  <li><b>Inline script WITHOUT nonce</b> (should be blocked):
      <span id="t1" class="ok">not executed (blocked)</span></li>
  <li><b>Inline script WITH nonce</b> (should run):
      <span id="t2" class="bad">did not run</span></li>
  <li><b>External script from example.com</b> (should be blocked):
      <span id="t3" class="wait">testing...</span></li>
  <li><b>External image from picsum.photos</b> (should be blocked):
      <span id="t4" class="wait">testing...</span></li>
  <li><b>fetch() to api.github.com</b> (blocked by <code>connect-src</code>):
      <span id="t5" class="wait">testing...</span></li>
  <li><b>Geolocation</b> (blocked by <code>geolocation=()</code>):
      <span id="t6" class="wait">testing...</span></li>
  <li><b>Camera</b> (blocked by <code>camera=()</code>):
      <span id="t7" class="wait">testing...</span></li>
  <li><b>Microphone</b> (blocked by <code>microphone=()</code>):
      <span id="t8" class="wait">testing...</span></li>
</ol>

<!-- 1. No nonce: CSP blocks this. If it ran, it would flip t1 to "EXECUTED (bad)". -->
<script>
  document.getElementById('t1').textContent = 'EXECUTED (CSP did not block!)';
  document.getElementById('t1').className = 'bad';
</script>

<!-- Everything below is allowed to run because it carries the nonce -->
<script nonce="${nonce}">
  function show(id, blocked, msg) {
    const el = document.getElementById(id);
    el.textContent = (blocked ? 'BLOCKED: ' : 'ALLOWED: ') + msg;
    el.className = blocked ? 'ok' : 'bad';
  }

  // 2. Nonce'd inline script
  const t2 = document.getElementById('t2');
  t2.textContent = 'ran (nonce matched)';
  t2.className = 'ok';

  // 3. External script from an unapproved origin
  const s = document.createElement('script');
  s.src = 'https://example.com/evil.js';
  s.onload  = () => show('t3', false, 'script loaded');
  s.onerror = () => show('t3', true, 'script refused');
  document.head.appendChild(s);

  // 4. External image
  const img = new Image();
  img.onload  = () => show('t4', false, 'image loaded');
  img.onerror = () => show('t4', true, 'image refused');
  img.src = 'https://picsum.photos/50';

  // 5. fetch to another origin
  fetch('https://api.github.com/zen')
    .then(() => show('t5', false, 'request went through'))
    .catch(e => show('t5', true, e.message));

  // 6. Geolocation
  navigator.geolocation.getCurrentPosition(
    () => show('t6', false, 'got a position (or user was prompted)'),
    err => show('t6', err.code === 1, 'code ' + err.code + ' - ' + err.message)
  );

  // 7 + 8. Camera / microphone
  function media(id, constraints) {
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => { stream.getTracks().forEach(t => t.stop()); show(id, false, 'access granted'); })
      .catch(e => show(id, true, e.name + ' - ' + e.message));
  }
  media('t7', { video: true });
  media('t8', { audio: true });
</script>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  const url = req.url.split("?")[0];

  // Endpoint that receives CSP violation reports (report-only mode)
  if (url === "/csp-report" && req.method === "POST") {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      console.log("\n[CSP REPORT]", body);
      res.writeHead(204).end();
    });
    return;
  }

  if (url === "/" || url === "/report-only") {
    const reportOnly = url === "/report-only";
    const nonce = crypto.randomBytes(16).toString("base64"); // new nonce per request

    res.setHeader(
      reportOnly
        ? "Content-Security-Policy-Report-Only"
        : "Content-Security-Policy",
      buildCsp(nonce, reportOnly),
    );
    res.setHeader(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=()",
    );
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(
      page(
        nonce,
        reportOnly
          ? "REPORT-ONLY (nothing blocked, violations reported)"
          : "ENFORCED",
      ),
    );
    return;
  }

  res.writeHead(404).end("Not found");
});

server.listen(PORT, () => console.log(`Open http://localhost:${PORT}`));
