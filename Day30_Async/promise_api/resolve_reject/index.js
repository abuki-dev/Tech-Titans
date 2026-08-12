// Resolve and .Rejecet conscuetevelt creates
let cache = new Map();
function leadched(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url));
  }
  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      cache.set(url, text);
      return text;
    });
}
leadched("./index.js").then((result) => console.log(result));
