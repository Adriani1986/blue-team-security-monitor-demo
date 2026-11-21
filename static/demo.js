
document.addEventListener("DOMContentLoaded", () => {
    // DATOS FICTICIOS: NO SE CONSULTA EL EQUIPO REAL.

    const demo = {
        registros: [
            { ip: "192.0.2.10", fallidos: 8, exitosos: 1, prioridad: "ALTA", alerta: true },
            { ip: "192.0.2.20", fallidos: 4, exitosos: 3, prioridad: "MEDIA", alerta: false },
            { ip: "192.0.2.30", fallidos: 0, exitosos: 6, prioridad: "SIN ALERTA", alerta: false }
        ],

        informes: [
            {
                tipo: "Blue Team",
                fecha: "2026-11-19",
                nombre: "demo_analisis_registros.txt",
                contenido: "BLUE TEAM SECURITY MONITOR\n\nANÁLISIS DE REGISTROS\n\n18 registros válidos.\n1 registro inválido.\n1 alerta simulada de prioridad ALTA.\n\nTodos los datos son ficticios."
            },
            {
                tipo: "Windows",
                fecha: "2026-11-18",
                nombre: "demo_auditoria_windows.txt",
                contenido: "BLUE TEAM SECURITY MONITOR\n\nAUDITORÍA DE WINDOWS\n\nFirewall: ACTIVADO (simulado).\nMicrosoft Defender: ACTIVO (simulado).\n\nEste informe no consulta Windows real."
            },
            {
                tipo: "TCP",
                fecha: "2026-11-17",
                nombre: "demo_conexiones_tcp.txt",
                contenido: "BLUE TEAM SECURITY MONITOR\n\nCONEXIONES TCP\n\n3 conexiones ficticias.\nEstado: DEMOSTRACIÓN.\n\nNo se consultaron conexiones reales."
            }
        ]
    };

    const elementos = {
        lista: document.getElementById("lista-informes"),
        buscar: document.getElementById("buscar-informe"),
        filtro: document.getElementById("filtro-tipo-informe"),
        paginacion: document.getElementById("paginacion-informes"),
        modal: document.getElementById("modal-informe"),
        titulo: document.getElementById("titulo-modal-informe"),
        contenido: document.getElementById("contenido-informe"),
        cerrar: document.getElementById("cerrar-modal-informe")
    };

    const informesPorPagina = 2;
    let paginaActual = 1;
    let informesFiltrados = [];

    function texto(id, valor) {
        const elemento = document.getElementById(id);
        if (elemento) elemento.textContent = valor;
    }

    // PANEL PRINCIPAL

    function mostrarDemo() {
        texto("stat-validos", "18");
        texto("stat-invalidos", "1");
        texto("stat-alertas", "1");
        texto("stat-ips", "3");

        texto("soc-cpu", "24.5 %");
        texto("soc-ram", "61.2 %");
        texto("soc-processes", "142");
        texto("soc-network", "ACTIVA (SIMULADA)");
        texto("soc-uptime", "4 horas y 32 minutos");

        texto("soc-alert-count", "1 alerta");
        texto("alerts-module-count", "1");
        texto("monitoring-module-status", "24.5%");
        texto("monitoring-module-detail", "Datos de demostración");

        const cpu = document.getElementById("soc-cpu-bar");
        const ram = document.getElementById("soc-ram-bar");

        if (cpu) cpu.style.setProperty("--porcentaje", "24.5%");
        if (ram) ram.style.setProperty("--porcentaje", "61.2%");

        texto("soc-alerts",
            "ALTA - Actividad de acceso simulada. Evento ficticio para demostración.");

        texto("soc-events",
            "14:30 - Monitor iniciado | 14:29 - Registro analizado | 14:28 - Evento simulado");

        texto("soc-system-chart",
            "CPU: 24.5 % | RAM: 61.2 % (datos simulados)");

        texto("soc-network-chart",
            "Entrada: 2.4 Mbps | Salida: 0.8 Mbps (datos simulados)");
    }

    // ANÁLISIS SIMULADO DE REGISTROS

    function mostrarRegistros() {
        texto("estado-analisis",
            "Análisis de registros de demostración completado.");

        const tabla = document.getElementById("tabla-resultados");
        if (!tabla) return;

        tabla.replaceChildren();

        demo.registros.forEach(registro => {
            const fila = document.createElement("tr");

            [
                registro.ip,
                registro.fallidos,
                registro.exitosos,
                registro.prioridad,
                registro.alerta ? "ALERTA" : "Sin alerta"
            ].forEach(valor => {
                const celda = document.createElement("td");
                celda.textContent = valor;
                fila.appendChild(celda);
            });

            tabla.appendChild(fila);
        });

        texto("errores-analisis",
            "1 registro inválido simulado. No contiene datos reales.");
    }

    function mostrarResultado(id, mensaje) {
        const contenedor = document.getElementById(id);
        if (contenedor) contenedor.textContent = mensaje;
    }

function mostrarConexionesTCP() {
    const contenedor = document.getElementById("resultados-conexiones-tcp");

    if (!contenedor) return;

    const conexiones = [
        {
            local: "192.0.2.10:51520",
            remota: "192.0.2.20:443",
            estado: "ESTABLISHED",
            proceso: "navegador-demo"
        },
        {
            local: "192.0.2.10:51521",
            remota: "192.0.2.30:443",
            estado: "ESTABLISHED",
            proceso: "servicio-demo"
        },
        {
            local: "192.0.2.10:51522",
            remota: "192.0.2.20:80",
            estado: "TIME_WAIT",
            proceso: "proceso-demo"
        }
    ];

    const tabla = document.createElement("table");
    tabla.className = "results-table";

    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");

    ["Dirección local", "Dirección remota", "Estado", "Proceso"]
        .forEach(titulo => {
            const th = document.createElement("th");
            th.textContent = titulo;
            filaEncabezado.appendChild(th);
        });

    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    const cuerpo = document.createElement("tbody");

    conexiones.forEach(conexion => {
        const fila = document.createElement("tr");

        Object.values(conexion).forEach(valor => {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
        });

        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);

    contenedor.replaceChildren(tabla);

    mostrarResultado(
        "estado-conexiones-tcp",
        "DEMO: 3 conexiones TCP ficticias. No se consultaron conexiones reales."
    );
}


    // INFORMES: BÚSQUEDA, FILTROS Y PAGINACIÓN

    function obtenerInformesFiltrados() {
        const busqueda = elementos.buscar?.value.trim().toLowerCase() || "";
        const tipo = elementos.filtro?.value || "";

        return demo.informes.filter(informe => {
            const coincideBusqueda =
                informe.nombre.toLowerCase().includes(busqueda) ||
                informe.tipo.toLowerCase().includes(busqueda);

            const coincideTipo = !tipo || informe.tipo === tipo;

            return coincideBusqueda && coincideTipo;
        });
    }

    function mostrarInformes() {
        if (!elementos.lista) return;

        informesFiltrados = obtenerInformesFiltrados();

        const totalPaginas = Math.max(
            1,
            Math.ceil(informesFiltrados.length / informesPorPagina)
        );

        paginaActual = Math.min(paginaActual, totalPaginas);

        const inicio = (paginaActual - 1) * informesPorPagina;
        const informesPagina = informesFiltrados.slice(
            inicio,
            inicio + informesPorPagina
        );

        elementos.lista.replaceChildren();

        if (informesPagina.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.textContent = "No se encontraron informes.";
            elementos.lista.appendChild(mensaje);
        }

        informesPagina.forEach(informe => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "report-item";

            const titulo = document.createElement("h4");
            titulo.textContent = informe.tipo;

            const fecha = document.createElement("p");
            fecha.textContent = `Fecha: ${informe.fecha}`;

            const nombre = document.createElement("small");
            nombre.textContent = informe.nombre;

            const boton = document.createElement("button");
            boton.type = "button";
            boton.textContent = "Consultar informe";

            boton.addEventListener("click", () => abrirInforme(informe));

            tarjeta.append(titulo, fecha, nombre, boton);
            elementos.lista.appendChild(tarjeta);
        });

        mostrarPaginacion(totalPaginas);

        texto("estado-informes",
            `${informesFiltrados.length} informe(s) ficticio(s) encontrado(s).`);
    }

    function mostrarPaginacion(totalPaginas) {
        if (!elementos.paginacion) return;

        elementos.paginacion.replaceChildren();

        if (informesFiltrados.length <= informesPorPagina) return;

        const anterior = document.createElement("button");
        anterior.type = "button";
        anterior.textContent = "Anterior";
        anterior.disabled = paginaActual === 1;

        anterior.addEventListener("click", () => {
            paginaActual--;
            mostrarInformes();
        });

        const estado = document.createElement("span");
        estado.textContent = `Página ${paginaActual} de ${totalPaginas}`;

        const siguiente = document.createElement("button");
        siguiente.type = "button";
        siguiente.textContent = "Siguiente";
        siguiente.disabled = paginaActual === totalPaginas;

        siguiente.addEventListener("click", () => {
            paginaActual++;
            mostrarInformes();
        });

        elementos.paginacion.append(anterior, estado, siguiente);
    }

    // VENTANA DE LECTURA DEL INFORME

    function abrirInforme(informe) {
        if (!elementos.modal || !elementos.titulo || !elementos.contenido) {
            return;
        }

        elementos.titulo.textContent = informe.nombre;

        const contenido = document.createElement("pre");
        contenido.className = "report-content";
        contenido.textContent = informe.contenido;

        elementos.contenido.replaceChildren(contenido);
        elementos.modal.hidden = false;
        elementos.cerrar?.focus();
    }

    function cerrarInforme() {
        if (elementos.modal) {
            elementos.modal.hidden = true;
        }
    }

    elementos.cerrar?.addEventListener("click", cerrarInforme);

    elementos.modal?.addEventListener("click", evento => {
        if (evento.target === elementos.modal) {
            cerrarInforme();
        }
    });

    document.addEventListener("keydown", evento => {
        if (evento.key === "Escape" && elementos.modal && !elementos.modal.hidden) {
            cerrarInforme();
        }
    });

    // BOTONES DE LOS MÓDULOS SIMULADOS

    document.getElementById("btn-analizar")
        ?.addEventListener("click", mostrarRegistros);

    document.getElementById("btn-auditoria-windows")
        ?.addEventListener("click", () => {
            mostrarResultado("estado-auditoria-windows",
                "DEMO: Firewall activado y Microsoft Defender activo (datos ficticios).");
        });

    document.getElementById("btn-monitor-red")
        ?.addEventListener("click", () => {
            mostrarResultado("estado-monitor-red",
                "DEMO: 2 adaptadores simulados. No se consultó la red real.");
        });

    document.getElementById("btn-conexiones-tcp")
    ?.addEventListener("click", mostrarConexionesTCP);

    document.getElementById("btn-analizar-vulnerabilidades")
        ?.addEventListener("click", () => {
            mostrarResultado("estado-vulnerabilidades",
                "DEMO: inventario ficticio de software. No es un escáner de vulnerabilidades.");
            texto("vulnerability-gauge-value", "DEMO");
        });

    document.getElementById("btn-cargar-informes")
        ?.addEventListener("click", () => {
            paginaActual = 1;
            mostrarInformes();
        });

    elementos.buscar?.addEventListener("input", () => {
        paginaActual = 1;
        mostrarInformes();
    });

    elementos.filtro?.addEventListener("change", () => {
        paginaActual = 1;
        mostrarInformes();
    });

    // INICIALIZACIÓN

    mostrarDemo();
    mostrarRegistros();
    mostrarInformes();

    console.info(
        "Blue Team Demo Mode: datos ficticios. Sin consultas al equipo."
    );
});
