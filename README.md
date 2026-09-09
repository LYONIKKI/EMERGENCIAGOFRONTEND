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


                                          ********========================******
                                          ********* ======EVIDENCIAS===== ******
                                          ********========================******

POR ÚLTIMO LAS EVIDENCIAS DEL PROYECTO LAS DEJO EN LA CARPETA IMAGENES DIFUMINADAS PARA QUE SE RESPETE LA DATA REAL YA QUE
AL PERTENECER A UNA ENTIDAD NACIONAL LA DATA DE LOS PACIENTES ES CONFIDENCIAL Y NO SE ES POSIBLE MOSTRARLAS PARA VALIDAR MI CAPACIDAD DE ARQUITECTURA
DE SOFTWARE
*EN EL DASHBORAD SE MUESTRA LA CANTIDAD DE USUARIOS REGISTRADOS EN EL MES, UN FILTRO PARA CADA MES KPIS PARA VER QUE SERVICIO DE EMERGENCIA HACE MÁS ATENCIONES
POR DÍA Y MES
* EN ATENCIONES HOY SE JALA EN UNA TABLA POR HORA DE INGRESO AL PACIENTE Y SE MUESTRA DE MANERA DIDACTICA EL SERVICIO Y TIPO DE SEGURO Y SE EMPLEA LA FUNCIONALIDAD PARA IMPRIMIR UN TICKET
* EL TICKET IMPRESO SE DA DE ACUERDO A LAS NORMATIVAS DE SuSalud MANTENIENDO EL DERECHO A LA INFORMACIÓN DEL PACIENTE
* EL HISTORIAL DE ATENCIONES SIRVE PARA VOLVER A IMPRIMIR EL TICKET CON LA FINALIDAD DE QUE SE IMPRIMA OTRA VEZ EL NUMERO DE CUENTA POR SI EL USUARIO LO PIERDA; SE JALA LA DATA DE HASTA 2 MESES POR SI SE NECESITA
* LA PARTE DE EXPORTAR REPORTES SE HACE CON LA FINALIDAD DE VER LA PRODUCCÓN DEL NUMERO DE PACIENTES OBSERVADOS
POR LA PARTE DE ARCHIVOS PARA VER LAS HISTORIAS CLÍNICAS Y EL FLUJO
LOS MÓDULOS
* HISTORIAS CLINICAS SE BASA EN REALIZAR EL FLUJO DE SALIDAS Y ENTREGAS DE LAS HISTORIAS CLÍNICAS QUE SALEN A DIARIO A CONSULTA EXTERNA
* LOCALIZADOR / CUSTODIA ESTE MODULO SIRVE PARA CAPTURAR EL LUGAR EN DONDE SE HA GUARDADO LA HISTORIA CLINICA O DONDE SE HA DEJADO
* Y POR ULTIMO ACTUALIZAR HISTORIAS CLINICAS SIRVE PARA ACTUALIZAR MEDIANTE LA APP EL NUMERO DE HISTORIA CLINICA PARA QUE NO SE USE LA BASE DE DATOS COMO SYSADMIN SINO QUE SE DEJA EN MANOS DE LA GENTE QUE TRABAJA CON ESTOS ARCHIVOS LEGALES A DIARIO



