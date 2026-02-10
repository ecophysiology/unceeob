document.getElementById("lastUpdated").textContent =
  new Date().toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
