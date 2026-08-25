document.addEventListener("DOMContentLoaded", () => {
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer) {
        fetch("/emergencia_go/sidebar.html")
            .then(res => {
                if (!res.ok) throw new Error("Error al obtener sidebar");
                return res.text();
            })
            .then(html => {
                sidebarContainer.innerHTML = html;
                marcarItemActivo();
            })
            .catch(err => console.error("Error al cargar sidebar:", err));
    }

    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        fetch("/emergencia_go/footer.html")
            .then(res => res.ok ? res.text() : "")
            .then(html => {
                if (html) footerContainer.innerHTML = html;
            });
    }
});

function marcarItemActivo() {
    const path = window.location.pathname.split("/").pop();
    const links = {
        "": "nav-dashboard",
        "index.html": "nav-dashboard",
        "dashboard.html": "nav-dashboard",
        "pacientes_hoy.html": "nav-pacientes",
        "relases.html": "nav-relases",
        "citas_hoy_manana.html": "nav-citas",
        "localizador_hc.html": "nav-localizador",
        "hist_clinicas.html": "nav-hist-clinicas"
    };

    const activeId = links[path];
    if (activeId) {
        const el = document.getElementById(activeId);
        if (el) {
            el.classList.remove("text-gray-300", "hover:bg-gray-800");
            el.classList.add("bg-red-600", "text-white", "font-semibold", "shadow-md");
        }
    }
}