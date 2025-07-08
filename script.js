function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<p>Página no encontrada.</p>";
    });
}

// Detecta el hash actual o carga 'inicio' por defecto
function router() {
  const page = location.hash.substring(1) || "inicio";
  loadPage(page);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
