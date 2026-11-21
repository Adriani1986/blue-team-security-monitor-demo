# BLUE TEAM SECURITY MONITOR — DEMO

## Descripción

BLUE TEAM SECURITY MONITOR es un proyecto de aprendizaje y portafolio enfocado en ciberseguridad defensiva (Blue Team).

Esta versión pública es una demostración independiente que presenta algunas funciones e interfaces del proyecto mediante datos ficticios.

La herramienta original fue desarrollada y probada por separado para trabajar con información real del equipo local. Esta demo no consulta el ordenador, la red ni las conexiones reales.

## Funcionalidades de la demo

- Panel de monitorización SOC.
- Análisis de registros de acceso ficticios.
- Presentación de una auditoría de Windows de ejemplo.
- Monitorización de red con datos de demostración.
- Visualización de conexiones TCP ficticias.
- Inventario de software de ejemplo.
- Consulta, búsqueda y visualización de informes de demostración.

**Importante:** los datos de esta demo son fijos y ficticios. No representan una monitorización en tiempo real ni un análisis de seguridad del equipo que ejecuta la aplicación.

## Tecnologías

- Python
- Flask 3.1.3
- HTML
- CSS
- JavaScript

## Requisitos

- Python instalado.
- pip (administrador de paquetes de Python).

## Instalación y ejecución

1. Clona o descarga este repositorio.
2. Abre PowerShell en la carpeta del proyecto.
3. Crea un entorno virtual:

   ```powershell
   py -m venv .venv
   ```

4. Activa el entorno virtual:

   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```

5. Instala las dependencias:

   ```powershell
   py -m pip install -r requirements.txt
   ```

6. Ejecuta la aplicación:

   ```powershell
   py app_demo.py
   ```

7. Abre en el navegador:

   http://127.0.0.1:5001

## Estructura del proyecto

```text
web_app_demo/
│
├── app_demo.py
├── requirements.txt
├── README.md
│
├── static/
│   ├── demo.js
│   ├── style.css
│   └── favicon.svg
│
└── templates/
    └── index.html
```

## Objetivo del proyecto

Este proyecto forma parte de mi aprendizaje práctico en ciberseguridad, programación y desarrollo de herramientas defensivas.

Su objetivo es presentar conocimientos y habilidades relacionados con la monitorización, el análisis de eventos y la visualización de alertas de seguridad.

## Aviso

Este repositorio contiene una demo educativa con datos ficticios. No debe confundirse con la herramienta original de monitorización local.