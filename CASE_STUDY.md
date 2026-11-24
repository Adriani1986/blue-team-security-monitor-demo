# Case Study — Blue Team Security Monitor

## Resumen

Desarrollé una herramienta local de monitorización y análisis de seguridad para Windows utilizando Python y Flask.

El proyecto integra análisis de registros, auditoría de Windows, monitorización de red, conexiones TCP, informes, alertas, monitorización del sistema y análisis de vulnerabilidades.

## Qué demuestra

- Desarrollo de una aplicación funcional orientada a ciberseguridad.
- Uso de Python para interactuar con información del sistema.
- Comprensión práctica de redes y servicios Windows.
- Separación entre aplicación, laboratorio y demo pública.
- Capacidad para investigar controles de seguridad mediante evidencia.
- Aplicación de un ciclo de remediación y validación.

## Validación de seguridad

El proyecto dispone de un laboratorio separado donde se realizan pruebas controladas.

Un ejemplo fue la revisión de SMB:

1. Se enumeró el servicio desde Kali.
2. Se comprobó el estado de SMB signing.
3. Se identificó que estaba habilitado pero no era obligatorio.
4. Se aplicó hardening en el Windows del laboratorio.
5. Se volvió a comprobar el servicio desde Kali.
6. El resultado final indicó que SMB signing estaba habilitado y era obligatorio.

## Resultado

El proyecto evolucionó desde una herramienta personal de monitorización hacia una plataforma de práctica que permite combinar desarrollo, defensa, análisis y validación de seguridad.

La versión pública utiliza datos ficticios y permanece separada de los entornos locales utilizados durante el desarrollo y las pruebas.
