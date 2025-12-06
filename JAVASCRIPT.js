const originalData = {
    nombre: "GERMAN SANTOS ALDUCIN",
    matricula: "E1607H09042",
    institucion: 'Servicio Nacional de Bachillerato en Línea, "Prepa en Línea-SEP"',
    plantel: 'Servicio Nacional de Bachillerato en Línea, "Prepa en Línea-SEP"',
    clave: "09DBH0001D",
    planEstudios: "Bachillerato, con formación básica para el trabajo",
    promedio: "8.5 OCHO PUNTO CINCO",
    creditos: "276 de un total de 276",
    periodo: "16 DE 07 DE 2014 al 16 DE 07 DE 2016",
    tipoDocumento: "Certificado de Terminación de Estudios",
    estatus: "Registrado en el SIGED",
    folio: "T5cQSL7H-Rsoi-cyms-vzU4-7qHJDlxFpWjr"
};

function saveData() {
    const data = getFormData();
    localStorage.setItem('certificateData', JSON.stringify(data));
    document.getElementById('alertSuccess').style.display = 'block';
    setTimeout(() => document.getElementById('alertSuccess').style.display = 'none', 3000);
    return data;
}

function resetForm() {
    Object.keys(originalData).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.value = originalData[key];
    });
    localStorage.removeItem('certificateData');
}

// Lee los datos directamente del formulario
function getFormData() {
    return {
        nombre: document.getElementById('nombre').value.trim(),
        matricula: document.getElementById('matricula').value.trim(),
        institucion: document.getElementById('institucion').value.trim(),
        plantel: document.getElementById('plantel').value.trim(),
        clave: document.getElementById('clave').value.trim(),
        planEstudios: document.getElementById('planEstudios').value.trim(),
        promedio: document.getElementById('promedio').value.trim(),
        creditos: document.getElementById('creditos').value.trim(),
        periodo: document.getElementById('periodo').value.trim(),
        tipoDocumento: document.getElementById('tipoDocumento').value.trim(),
        estatus: document.getElementById('estatus').value,
        folio: document.getElementById('folio').value.trim()
    };
}

// Datos actuales (primero los guardados, si no hay → del formulario)
function getCurrentData() {
    const saved = localStorage.getItem('certificateData');
    if (saved) return JSON.parse(saved);
    return getFormData();
}

// HTML completo del certificado (idéntico al oficial de la SEP)
function generateCertificateHTML(data) {
    const estatusTag = data.estatus === "Registrado en el SIGED"
        ? '<span class="tag is-success">Registrado en el SIGED</span>'
        : `<span class="tag is-info">${data.estatus}</span>`;

    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Certificado de Terminación de Estudios</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="https://prepaenlinea.sep.gob.mx/validacion/public/images/logos/svg/prepa-en-linea.svg" />
    <link rel="stylesheet" type="text/css" href="https://prepaenlinea.sep.gob.mx/validacion/public/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://prepaenlinea.sep.gob.mx/validacion/public/css/estilos.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
    <link rel="stylesheet" type="text/css" href="https://prepaenlinea.sep.gob.mx/validacion/public/css/style.css">
    <link rel="stylesheet" type="text/css" href="https://prepaenlinea.sep.gob.mx/validacion/public/css/css2.css">
</head>
<body>
    <div class="gobierno" style="background-color:#0b231e!important; padding-top:10px; padding-bottom:10px;">
        <div style="width:100%; max-width:1600px; margin:0 auto;">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.gob.mx">
                        <img src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg" alt="logo gobierno de méxico" width="128px">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="https://www.gob.mx/tramites">Trámites</a></li>
                            <li class="nav-item"><a class="nav-link" href="https://www.gob.mx/gobierno">Gobierno</a></li>
                            <li class="nav-item pt-2"><a class="text-white" href="https://www.gob.mx/busqueda?utf8=✓"><i class="fas fa-search"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="main-menu">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://prepaenlinea.sep.gob.mx"><i class="fas fa-home"></i></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="https://prepaenlinea.sep.gob.mx">Inicio</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <div class="header">
        <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center">
                <div class="col-8">
                    <h1 style="font-size: 36px;">Certificado de Terminación de Estudios</h1>
                </div>
            </div>
        </div>
    </div>

    <section id="detalle-folio">
        <div class="container">
            <div class="row col-md-8 offset-md-2">
                <div class="panel">
                    <table class="table">
                        <tr><td class="notification is-info is-light title is-5" colspan="2" style="border-style: none">Datos del estudiante</td></tr>
                        <tr><td><b>Nombre y apellidos:</b></td><td>${data.nombre}</td></tr>
                        <tr><td><b>Matrícula:</b></td><td>${data.matricula}</td></tr>
                        <tr><td class="notification is-info is-light title is-5" colspan="2" style="border-style: none">Datos del plantel o servicio educativo</td></tr>
                        <tr><td><b>Institución educativa emisora:</b></td><td>${data.institucion}</td></tr>
                        <tr><td><b>Plantel o servicio educativo:</b></td><td>${data.plantel}</td></tr>
                        <tr><td><b>Clave de Centro de Trabajo:</b></td><td>${data.clave}</td></tr>
                        <tr><td class="notification is-info is-light title is-5" colspan="2" style="border-style: none">Trayectoria académica y datos del documento</td></tr>
                        <tr><td><b>Plan de estudios:</b></td><td>${data.planEstudios}</td></tr>
                        <tr><td><b>Promedio:</b></td><td>${data.promedio}</td></tr>
                        <tr><td><b>Créditos obtenidos:</b></td><td>${data.creditos}</td></tr>
                        <tr><td><b>Periodo de estudios:</b></td><td>${data.periodo}</td></tr>
                        <tr><td><b>Tipo de documento:</b></td><td>${data.tipoDocumento}</td></tr>
                        <tr><td><b>Estatus:</b></td><td>${estatusTag}</td></tr>
                        <tr><td><b>Folio:</b></td><td>${data.folio}</td></tr>
                    </table>
                    <pre class="center text ok"><h4>Documento Validado.</h4></pre>
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </section>

    <div class="footer_gobierno mt-5">
        <div class="container-fluid">
            <div style="width:100%; max-width:1600px; margin: 0 auto;">
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <img src="https://framework-gb.cdn.gob.mx/landing/img/logofooter.svg" alt="logo gobierno de méxico" style="width:100%; max-width:200px">
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <h6>Enlaces</h6>
                        <ul class="list-unstyled">
                            <li><a href="http://www.participa.gob.mx" target="_blank">Participa</a></li>
                            <li><a href="https://www.gob.mx/publicaciones" target="_blank">Publicaciones Oficiales</a></li>
                            <li><a href="http://www.ordenjuridico.gob.mx" target="_blank">Marco Jurídico</a></li>
                            <li><a href="https://consultapublicamx.inai.org.mx/vut-web/" target="_blank">Plataforma Nacional de Transparencia</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <h6>¿Qué es gob.mx?</h6>
                        <p>Es el portal único de trámites, información y participación ciudadana. <a href="https://www.gob.mx/que-es-gobmx"><u>Leer más</u></a></p>
                        <ul class="list-unstyled">
                            <li><a href="https://datos.gob.mx">Portal de datos abiertos</a></li>
                            <li><a href="https://www.gob.mx/accesibilidad">Declaración de accesibilidad</a></li>
                            <li><a href="https://www.gob.mx/privacidadintegral">Aviso de privacidad integral</a></li>
                            <li><a href="https://www.gob.mx/privacidadsimplificado">Aviso de privacidad simplificado</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
}

// ======================= EVENTOS =======================
document.getElementById('btnSave').addEventListener('click', saveData);

document.getElementById('btnReset').addEventListener('click', () => {
    if (confirm('¿Restablecer los valores originales?')) resetForm();
});

// Generar página + descargar el HTML puro (para subir a internet)
document.getElementById('btnGeneratePage').addEventListener('click', () => {
    const data = saveData();  // Guarda los cambios
    const htmlCompleto = generateCertificateHTML(data);

    // Abrir en nueva pestaña
    const win = window.open('', '_blank');
    win.document.write(htmlCompleto);
    win.document.close();

    // Descargar automáticamente el archivo HTML listo para subir
    const blob = new Blob([htmlCompleto], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `certificado_${data.matricula || 'prepa'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('¡Certificado generado!\nSe abrió en una nueva pestaña y se descargó el archivo HTML listo para subir a internet.');
});

// Generar código QR
document.getElementById('btnGenerateQR').addEventListener('click', () => {
    const data = getCurrentData();

    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';

    const qrContent = JSON.stringify({
        tipo: data.tipoDocumento,
        nombre: data.nombre,
        matricula: data.matricula,
        folio: data.folio,
        estatus: data.estatus,
        fecha_generacion: new Date().toLocaleDateString('es-MX')
    }, null, 2);

    QRCode.toCanvas(qrContainer, qrContent, {
        width: 280,
        margin: 2,
        color: { dark: '#0b231e', light: '#ffffff' }
    }, (error) => {
        if (error) console.error(error);
    });

    document.getElementById('qrSection').style.display = 'block';
    document.getElementById('qrSection').scrollIntoView({ behavior: 'smooth' });
});

// Descargar QR
document.getElementById('btnDownloadQR').addEventListener('click', () => {
    const canvas = document.querySelector('#qrcode canvas');
    if (canvas) {
        const link = document.createElement('a');
        link.download = `qr_${document.getElementById('matricula').value || 'certificado'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
});

// Cargar datos guardados al abrir la página
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('certificateData');
    if (saved) {
        const d = JSON.parse(saved);
        Object.keys(d).forEach(key => {
            const el = document.getElementById(key);
            if (el) el.value = d[key];
        });
    }
});