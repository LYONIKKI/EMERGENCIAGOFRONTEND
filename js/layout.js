document.addEventListener("DOMContentLoaded", async () => {
    const sidebarContainer = document.getElementById("sidebar-container");
    if (!sidebarContainer) return;

    try {
        // 1. Inyectar el HTML del sidebar
        const resHtml = await fetch("sidebar.html");
        sidebarContainer.innerHTML = await resHtml.text();

        // 2. Aplicar permisos según el rol
        await procesarPermisos();

        // 3. Marcar link activo
        marcarItemActivo();
    } catch (e) {
        console.error("Error inicializando sidebar:", e);
    }
});

async function procesarPermisos() {
    try {
        const res = await fetch("session_info.php");
        if (!res.ok) {
            window.location.href = "../login.php?error=sesion_expirada";
            return;
        }

        const data = await res.json();
        const rol = (data.rol || "").trim();

        const bEmg = document.getElementById("bloque-emergencia");
        const bArch = document.getElementById("bloque-archivos");
        const bAdm = document.getElementById("bloque-admin");
        const pagina = window.location.pathname.split("/").pop();

        if (rol === "go_admin_emg") {
            // Administrador: Acceso total
            if (bEmg) bEmg.style.display = "block";
            if (bArch) bArch.style.display = "block";
            if (bAdm) bAdm.style.display = "block";

        } else if (rol === "archivos_go") {
            // Archivos: Oculta Emergencia, muestra Servicio Externo y Admin
            if (bEmg) bEmg.style.display = "none";
            if (bArch) bArch.style.display = "block";
            if (bAdm) bAdm.style.display = "block";

            // Restricción de acceso a vistas de emergencia
            const prohibidasArchivos = ["dashboard.html", "pacientes_hoy.html", "relases.html", "index.html", ""];
            if (prohibidasArchivos.includes(pagina)) {
                window.location.href = "citas_hoy_manana.html";
            }

        } else if (rol === "emergencia_go") {
            // Emergencia: Muestra Emergencia y Admin, oculta Servicio Externo
            if (bEmg) bEmg.style.display = "block";
            if (bArch) bArch.style.display = "none";
            if (bAdm) bAdm.style.display = "block";

            // Restricción de acceso a vistas de archivos
            const prohibidasEmergencia = ["citas_hoy_manana.html", "localizador_hc.html"];
            if (prohibidasEmergencia.includes(pagina)) {
                window.location.href = "dashboard.html";
            }
        }
    } catch (err) {
        console.error("Error al validar permisos de rol:", err);
    }
}

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