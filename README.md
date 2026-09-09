# SIGH V2 - Frontend Modular de Emergencia y Archivos

Capa de presentación desacoplada para el monitoreo de atenciones médicas en tiempo real, trazabilidad de expedientes y reporte estadístico hospitalario.

## 🔗 Repositorio Backend (API REST)
El backend que alimenta esta interfaz fue desarrollado en **Go (Fiber)** y se encuentra disponible en:  
👉 [MIDDLEWARE-EMERGENCIA-GO](https://github.com/LYONIKKI/MIDDLEWARE-EMERGENCIA-GO)

---

## 🏛️ Diagrama de Arquitectura
[ Cliente Web / Navegador ]
│
├───> (Puerto 80 / Apache)  ──> Sirve Vistas HTML, Tailwind CSS v2.2.19 y JS Modulares
│
└───> (Puerto 8080 / Fiber) ──> Endpoints JSON (SQL Server & Postgres Auth)
 ---

## ⚙️ Guía de Integración y Despliegue

### 1. Despliegue del Frontend (Apache / Nginx)
Clonar este repositorio dentro del directorio público del servidor web:
```bash
cd /var/www/html
git clone [https://github.com/LYONIKKI/FRONTEND-EMERGENCIA-HTML-JS.git](https://github.com/LYONIKKI/FRONTEND-EMERGENCIA-HTML-JS.git) emergencia_go

const API_URL = "http://IP_DEL_SERVIDOR:8080/api";
3. Ejecución del Backend
Clonar el repositorio MIDDLEWARE-EMERGENCIA-GO.

Configurar las variables en el archivo .env.

Compilar e iniciar el servicio en Ubuntu:

Bash
go build -o emergencia_api main.go
sudo systemctl start emergencia-go
📄 Licencia y Derechos de Autor
Copyright (c) 2026 Ing. Anhgelo Smith Vega Poma (CIP N° 381913). Todos los derechos reservados.

Uso restringido a exhibición de portafolio y evaluación técnica.

📸 Evidencias del Proyecto
Nota de confidencialidad y ética: Las capturas de pantalla de este proyecto han sido difuminadas para proteger la confidencialidad de la información médica de los pacientes y los sistemas de la entidad pública, cumpliendo con la normativa vigente sobre el manejo de datos personales.

📊 Módulo de Emergencias & Dashboard
Dashboard Estadístico: Visualización de métricas clave (KPIs) sobre el volumen de atenciones por día/mes y la demanda por servicio de emergencia.

Atenciones Hoy: Monitoreo en tiempo real de ingresos por hora, tipo de seguro y servicio asignado.

Módulo de Ticketera: Generación e impresión de comprobantes de atención adaptados a la normativa de SuSalud para garantizar el derecho a la información del paciente.

Historial de Atenciones: Permite la re-impresión de tickets (recuperación de número de cuenta en caso de pérdida) con un histórico de hasta 2 meses de datos.

Exportación de Reportes: Módulo enfocado en la generación de reportes de producción de pacientes en observación.

📁 Gestión de Historias Clínicas (Archivo Central)
Pre-despacho y Custodia: Control del flujo diario de salida y entrega de expedientes clínicos hacia Consulta Externa.

Localizador y Trazabilidad: Seguimiento en tiempo real de la ubicación física y estado de préstamo de cada historia clínica.

Gestión Autónoma de Registros: Interfaz para que el personal administrativo actualice los números de historia clínica de forma segura, eliminando la necesidad de consultas manuales a la base de datos por parte de administradores de sistemas.


