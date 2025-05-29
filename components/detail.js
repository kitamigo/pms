const params = new URLSearchParams(window.location.search);
document.getElementById("template-title").textContent = params.get("name") || "Template Name";
document.getElementById("creator-name").textContent = params.get("creator") || "Unknown";
