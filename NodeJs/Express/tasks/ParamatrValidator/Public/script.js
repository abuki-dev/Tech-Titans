const form = document.getElementById("searchForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Builds ?category=<selected option value>
  const params = new URLSearchParams({
    category: form.elements["category"].value,
  });

  try {
    const response = await fetch(`${form.action}?${params}`);
    const { Items, error } = await response.json();
    if (Items) {
      console.log(Items);
    }

    if (error) {
      console.error(error);
    }
  } catch (err) {
    console.error(err);
  }
});
