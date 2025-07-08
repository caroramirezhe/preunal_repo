function loadPage(page) {
  const loading = document.getElementById("loading");
  const content = document.getElementById("content");

  loading.style.display = "block";
  content.style.display = "none";

  fetch(`pages/${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error("No encontrado");
      return response.text();
    })
    .then(html => {
      content.innerHTML = html;
      loading.style.display = "none";
      content.style.display = "block";
      updateActiveNav(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(() => {
      content.innerHTML = "<p style='color: white;'>Página no encontrada.</p>";
      loading.style.display = "none";
      content.style.display = "block";
    });
}

function router() {
  const page = location.hash.substring(1) || "inicio";
  loadPage(page);
}

function updateActiveNav(currentPage) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentPage}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
