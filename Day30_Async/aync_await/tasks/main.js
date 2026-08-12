class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
async function laodJson(url) {
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      return await response.json();
    } else {
      throw new HttpError(response);
    }
  } catch (error) {
    if (error instanceof HttpError && error.status == 404) {
      console.warn(error.message);
    } else {
      throw error;
    }
  }
}

async function loadGuithuuser() {
  let name = prompt("Enter file name");
  let result = await laodJson(`./${name}.json`);
  confirm(`user name ${result.name}`);
}
loadGuithuuser().catch(error=>console.warn(error.message));
