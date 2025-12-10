<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quinielas-Pro • Jornada 17</title>
  <style>
    body {font-family:Arial,sans-serif;background:linear-gradient(135deg,#0d1b2a,#1b263b,#415a77);color:#fff;margin:0;padding:15px;}
    .contenedor {max-width:850px;margin:0 auto;background:rgba(0,0,0,0.7);border-radius:20px;padding:30px;box-shadow:0 15px 50px rgba(0,0,0,0.9);}
    h1 {text-align:center;font-size:3.2em;color:#ffd700;text-shadow:0 0 15px gold;}
    .sub {text-align:center;font-size:1.6em;color:#ffeb3b;margin:15px 0 25px;}
    input,select {width:100%;padding:16px;margin:10px 0;border-radius:12px;border:none;font-size:18px;}
    .partido {background:#fff;color:#000;margin:18px 0;padding:20px;border-radius:18px;box-shadow:0 6px 20px rgba(0,0,0,0.5);}
    .partido label {font-weight:bold;font-size:1.4em;text-align:center;display:block;margin-bottom:15px;color:#1e3c72;}
    .botones {display:flex;justify-content:center;gap:30px;}
    .botones button {width:110px;height:85px;font-size:32px;font-weight:bold;border:none;border-radius:18px;cursor:pointer;}
    
    /* COLORES NUEVOS */
    .local {background:#2e7d32;color:white;}     /* Verde */
    .empate {background:#f57c00;color:white;}    /* Naranja */
    .visita {background:#1565c0;color:white;}   /* AZUL OSCURO (Visitante) */
    
    .seleccionado {transform:scale(1.25);box-shadow:0 0 30px gold;}
    .botones-flex {display:flex;gap:15px;margin-top:40px;}
    .btn-generar,.btn-guardar {flex:1;padding:20px;font-size:22px;font-weight:bold;border:none;border-radius:50px;cursor:pointer;}
    .btn-generar {background:#ffd700;color:#000;}
    .btn-guardar {background:#4caf50;color:white;}
    .ok {color:#4caf50;text-align:center;font-size:20px;margin-top:20px;font-weight:bold;}
    
    /* Botón para abrir panel admin */
    .btn-admin-container {text-align:center;margin:20px 0;}
    .btn-admin {background:#9c27b0;color:white;padding:12px 25px;border:none;border-radius:25px;cursor:pointer;font-size:16px;font-weight:bold;}
    .btn-admin:hover {background:#7b1fa2;}
    
    /* Panel admin oculto por defecto */
    #panel-admin {display:none;background:#000;padding:20px;border-radius:15px;margin-top:40px;}
    #tabla-general {width:100%;border-collapse:collapse;margin-top:15px;}
    #tabla-general th,#tabla-general td {border:1px solid #ffd700;padding:8px;text-align:center;font-size:13px;}
    #tabla-general th {background:#ffd700;color:#000;}
    .pagado {background:#1b5e20;color:white;}
    .nopagado {background:#c62828;color:white;}
    .btn-exportar {background:#2196F3;color:white;padding:10px 20px;border:none;border-radius:8px;cursor:pointer;margin:5px;}
    .btn-limpiar-admin {background:#c62828;color:white;padding:10px 20px;border:none;border-radius:8px;cursor:pointer;margin:5px;}
    
    /* Modal de contraseña */
    .modal-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }
    .modal-contenido {
      background: #222;
      padding: 30px;
      border-radius: 15px;
      width: 90%;
      max-width: 400px;
      text-align: center;
    }
    .modal-contenido input {
      margin: 20px 0;
    }
    .modal-contenido button {
      margin: 5px;
      padding: 10px 20px;
    }
    
    @media (max-width: 768px) {
      h1 {font-size:2em;}
      .sub {font-size:1.2em;}
      .botones button {width:80px;height:65px;font-size:26px;}
      .btn-generar,.btn-guardar {font-size:18px;padding:15px;}
      #tabla-general {font-size:11px;}
    }
  </style>
</head>
<body>

<div class="contenedor">
  <h1>QUINIELAS-PRO</h1>
  <p class="sub">Jornada 17 • Apertura 2025</p>
  <input type="text" id="nombre" placeholder="Nombre completo">
  <input type="text" id="telefono" placeholder="WhatsApp">
  <select id="pago">
    <option value="">¿Ya depositaste los $300?</option>
    <option value="si">Sí, ya pagué</option>
    <option value="no">No, pago esta semana</option>
  </select>

  <!-- 14 PARTIDOS -->
  <div class="partido"><label>1. Tigres vs América</label><div class="botones"><button class="local" onclick="marcar(this,1)">L</button><button class="empate" onclick="marcar(this,1)">E</button><button class="visita" onclick="marcar(this,1)">V</button><input type="hidden" id="res1"></div></div>
  <div class="partido"><label>2. Cruz Azul vs Monterrey</label><div class="botones"><button class="local" onclick="marcar(this,2)">L</button><button class="empate" onclick="marcar(this,2)">E</button><button class="visita" onclick="marcar(this,2)">V</button><input type="hidden" id="res2"></div></div>
  <div class="partido"><label>3. Chivas vs Toluca</label><div class="botones"><button class="local" onclick="marcar(this,3)">L</button><button class="empate" onclick="marcar(this,3)">E</button><button class="visita" onclick="marcar(this,3)">V</button><input type="hidden" id="res3"></div></div>
  <div class="partido"><label>4. Pumas vs Pachuca</label><div class="botones"><button class="local" onclick="marcar(this,4)">L</button><button class="empate" onclick="marcar(this,4)">E</button><button class="visita" onclick="marcar(this,4)">V</button><input type="hidden" id="res4"></div></div>
  <div class="partido"><label>5. Atlas vs León</label><div class="botones"><button class="local" onclick="marcar(this,5)">L</button><button class="empate" onclick="marcar(this,5)">E</button><button class="visita" onclick="marcar(this,5)">V</button><input type="hidden" id="res5"></div></div>
  <div class="partido"><label>6. Santos vs Tijuana</label><div class="botones"><button class="local" onclick="marcar(this,6)">L</button><button class="empate" onclick="marcar(this,6)">E</button><button class="visita" onclick="marcar(this,6)">V</button><input type="hidden" id="res6"></div></div>
  <div class="partido"><label>7. Necaxa vs Querétaro</label><div class="botones"><button class="local" onclick="marcar(this,7)">L</button><button class="empate" onclick="marcar(this,7)">E</button><button class="visita" onclick="marcar(this,7)">V</button><input type="hidden" id="res7"></div></div>
  <div class="partido"><label>8. Mazatlán vs Puebla</label><div class="botones"><button class="local" onclick="marcar(this,8)">L</button><button class="empate" onclick="marcar(this,8)">E</button><button class="visita" onclick="marcar(this,8)">V</button><input type="hidden" id="res8"></div></div>
  <div class="partido"><label>9. San Luis vs Juárez</label><div class="botones"><button class="local" onclick="marcar(this,9)">L</button><button class="empate" onclick="marcar(this,9)">E</button><button class="visita" onclick="marcar(this,9)">V</button><input type="hidden" id="res9"></div></div>
  <div class="partido"><label>10. Necaxa vs Guadalajara</label><div class="botones"><button class="local" onclick="marcar(this,10)">L</button><button class="empate" onclick="marcar(this,10)">E</button><button class="visita" onclick="marcar(this,10)">V</button><input type="hidden" id="res10"></div></div>
  <div class="partido"><label>11. León vs Cruz Azul</label><div class="botones"><button class="local" onclick="marcar(this,11)">L</button><button class="empate" onclick="marcar(this,11)">E</button><button class="visita" onclick="marcar(this,11)">V</button><input type="hidden" id="res11"></div></div>
  <div class="partido"><label>12. Monterrey vs Tigres</label><div class="botones"><button class="local" onclick="marcar(this,12)">L</button><button class="empate" onclick="marcar(this,12)">E</button><button class="visita" onclick="marcar(this,12)">V</button><input type="hidden" id="res12"></div></div>
  <div class="partido"><label>13. América vs Pumas</label><div class="botones"><button class="local" onclick="marcar(this,13)">L</button><button class="empate" onclick="marcar(this,13)">E</button><button class="visita" onclick="marcar(this,13)">V</button><input type="hidden" id="res13"></div></div>
  <div class="partido"><label>14. Toluca vs Atlas</label><div class="botones"><button class="local" onclick="marcar(this,14)">L</button><button class="empate" onclick="marcar(this,14)">E</button><button class="visita" onclick="marcar(this,14)">V</button><input type="hidden" id="res14"></div></div>

  <div class="botones-flex">
    <button class="btn-generar" onclick="generarPDF()">DESCARGAR PDF</button>
    <button class="btn-guardar" onclick="guardarDatos()">GUARDAR DATOS</button>
  </div>

  <div class="ok" id="ok"></div>
</div>

<!-- Botón para abrir panel admin -->
<div class="btn-admin-container">
  <button class="btn-admin" onclick="mostrarModalContraseña()">ABRIR PANEL ADMIN</button>
</div>

<!-- Modal para contraseña -->
<div class="modal-overlay" id="modalContraseña">
  <div class="modal-contenido">
    <h2 style="color:#ffd700;">ACCESO ADMINISTRADOR</h2>
    <p>Ingresa la contraseña:</p>
    <input type="password" id="inputContraseña" placeholder="Contraseña" style="width:100%;">
    <div>
      <button onclick="verificarContraseña()" style="background:#4caf50;color:white;">INGRESAR</button>
      <button onclick="cerrarModal()" style="background:#c62828;color:white;">CANCELAR</button>
    </div>
    <p id="errorContraseña" style="color:#f44336;margin-top:10px;display:none;">Contraseña incorrecta</p>
  </div>
</div>

<!-- PANEL ADMIN (oculto por defecto) -->
<div id="panel-admin">
  <h2 style="color:#ffd700;text-align:center;">PANEL ADMIN - TABLA GENERAL</h2>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
    <div>
      <p style="margin:0;">Total: <span id="total">0</span> | Pagaron: <span id="pagados">0</span> | Pendientes: <span id="pendientes">0</span></p>
    </div>
    <div>
      <button class="btn-exportar" onclick="exportarExcel()">EXPORTAR EXCEL</button>
      <button class="btn-exportar" onclick="exportarPDFAdmin()">EXPORTAR PDF</button>
      <button class="btn-limpiar-admin" onclick="limpiarBaseDatos()">LIMPIAR BASE</button>
      <button class="btn-limpiar-admin" onclick="cerrarPanelAdmin()">CERRAR PANEL</button>
    </div>
  </div>
  <table id="tabla-general">
    <thead>
      <tr>
        <th>#</th><th>Nombre</th><th>Tel</th><th>Pago</th>
        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th>
        <th>10</th><th>11</th><th>12</th><th>13</th><th>14</th>
        <th>Fecha</th><th>Acciones</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script>
// Contraseña para acceder al panel admin (cambia esta por la que quieras)
const CONTRASEÑA_ADMIN = "admin123";

// Datos globales
let participantes = JSON.parse(localStorage.getItem("quinielasPro2025") || "[]");

function marcar(btn, num) {
  const grupo = btn.parentNode.querySelectorAll("button");
  grupo.forEach(b => b.classList.remove("seleccionado"));
  btn.classList.add("seleccionado");
  document.getElementById("res" + num).value = btn.innerText;
}

function guardarDatos() {
  const nombre = document.getElementById("nombre").value.trim();
  const tel = document.getElementById("telefono").value.trim();
  const pago = document.getElementById("pago").value;

  if (!nombre  !tel  !pago) {
    alert("Por favor, llena todos los datos: nombre, WhatsApp y estado de pago");
    return;
  }

  const pronos = [];
  let faltan = false;
  for (let i=1; i<=14; i++) {
    const v = document.getElementById("res"+i).value;
    if (!v) faltan = true;
    pronos.push(v || "-");
  }
  
  if (faltan) {
    if (!confirm("Faltan algunos pronósticos. ¿Deseas guardar de todos modos? (Los partidos sin seleccionar se guardarán como '-')")) {
      return;
    }
  }
  // GUARDAR EN TABLA GENERAL
  const nuevo = {
    nombre, 
    tel, 
    pago, 
    pronosticos: pronos, 
    fecha: new Date().toLocaleString("es-MX")
  };
  
  // Verificar si ya existe un participante con el mismo nombre
  const indiceExistente = participantes.findIndex(p => p.nombre.toLowerCase() === nombre.toLowerCase());
  
  if (indiceExistente !== -1) {
    if (confirm(Ya existe un participante con el nombre "${nombre}". ¿Deseas actualizar sus datos?)) {
      participantes[indiceExistente] = nuevo;
    } else {
      return;
    }
  } else {
    participantes.push(nuevo);
  }
  
  localStorage.setItem("quinielasPro2025", JSON.stringify(participantes));

  // Actualizar mensaje
  document.getElementById("ok").innerHTML = "¡Datos guardados correctamente!";
  document.getElementById("ok").style.color = "#4caf50";
  
  // Limpiar formulario después de guardar
  setTimeout(() => {
    limpiarFormulario();
  }, 1000);
}

function generarPDF() {
  const nombre = document.getElementById("nombre").value.trim();
  const tel = document.getElementById("telefono").value.trim();
  const pago = document.getElementById("pago").value;

  if (!nombre  !tel  !pago) {
    alert("Por favor, llena todos los datos antes de generar el PDF");
    return;
  }

  const pronos = [];
  let faltan = false;
  for (let i=1; i<=14; i++) {
    const v = document.getElementById("res"+i).value;
    if (!v) faltan = true;
    pronos.push(v || "-");
  }
  
  if (faltan) {
    if (!confirm("Faltan algunos pronósticos. ¿Deseas generar el PDF de todos modos? (Los partidos sin seleccionar aparecerán como '-')")) {
      return;
    }
  }

  // Crear PDF básico sin jsPDF externo (versión simplificada)
  const contenido = 
QUINIELAS-PRO - JORNADA 17
===========================

Nombre: ${nombre}
WhatsApp: ${tel}
Pago: ${pago === "si" ? "PAGADO" : "PENDIENTE"}
Fecha: ${new Date().toLocaleString("es-MX")}

PRONÓSTICOS:
------------
1. Tigres vs América: ${pronos[0]}
2. Cruz Azul vs Monterrey: ${pronos[1]}
3. Chivas vs Toluca: ${pronos[2]}
4. Pumas vs Pachuca: ${pronos[3]}
5. Atlas vs León: ${pronos[4]}
6. Santos vs Tijuana: ${pronos[5]}
7. Necaxa vs Querétaro: ${pronos[6]}
8. Mazatlán vs Puebla: ${pronos[7]}
9. San Luis vs Juárez: ${pronos[8]}
10. Necaxa vs Guadalajara: ${pronos[9]}
11. León vs Cruz Azul: ${pronos[10]}
12. Monterrey vs Tigres: ${pronos[11]}
13. América vs Pumas: ${pronos[12]}
14. Toluca vs Atlas: ${pronos[13]}
;

  // Crear archivo para descargar
  const blob = new Blob([contenido], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = ${nombre.replace(/[^a-zA-Z0-9]/g, "_")}_J17.txt;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  document.getElementById("ok").innerHTML = "Archivo generado y descargado";
  document.getElementById("ok").style.color = "#ffd700";
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("pago").value = "";
  for (let i=1; i<=14; i++) {
    document.getElementById("res"+i).value = "";
    const grupo = document.querySelector(#res${i}).parentNode.querySelectorAll("button");
    grupo.forEach(b => b.classList.remove("seleccionado"));
  }
  document.getElementById("ok").innerHTML = "";
}

// Funciones para el panel admin
function mostrarModalContraseña() {
  document.getElementById("modalContraseña").style.display = "flex";
  document.getElementById("inputContraseña").focus();
  document.getElementById("errorContraseña").style.display = "none";
}

function cerrarModal() {
  document.getElementById("modalContraseña").style.display = "none";
  document.getElementById("inputContraseña").value = "";
}
function verificarContraseña() {
  const contraseñaIngresada = document.getElementById("inputContraseña").value;
  
  if (contraseñaIngresada === CONTRASEÑA_ADMIN) {
    cerrarModal();
    document.getElementById("panel-admin").style.display = "block";
    actualizarTabla();
    // Desplazar hacia el panel admin
    document.getElementById("panel-admin").scrollIntoView({behavior: 'smooth'});
  } else {
    document.getElementById("errorContraseña").style.display = "block";
    document.getElementById("inputContraseña").value = "";
    document.getElementById("inputContraseña").focus();
  }
}

function cerrarPanelAdmin() {
  document.getElementById("panel-admin").style.display = "none";
}

function actualizarTabla() {
  const tbody = document.querySelector("#tabla-general tbody");
  tbody.innerHTML = "";
  
  participantes.forEach((p,i) => {
    let row = <tr>
      <td>${i+1}</td>
      <td>${p.nombre}</td>
      <td>${p.tel}</td>
      <td class="${p.pago==='si'?'pagado':'nopagado'}">${p.pago==='si'?'PAGADO':'NO PAGÓ'}</td>;
    
    p.pronosticos.forEach(r => row += <td><strong>${r}</strong></td>);
    
    row += 
      <td>${p.fecha}</td>
      <td>
        <button onclick="eliminarParticipante(${i})" style="background:#c62828;color:white;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;">
          Eliminar
        </button>
      </td>
    </tr>;
    
    tbody.innerHTML += row;
  });
  
  const total = participantes.length;
  const pagados = participantes.filter(p => p.pago === "si").length;
  const pendientes = total - pagados;
  
  document.getElementById("total").textContent = total;
  document.getElementById("pagados").textContent = pagados;
  document.getElementById("pendientes").textContent = pendientes;
}

function eliminarParticipante(index) {
  if (confirm(¿Estás seguro de eliminar a "${participantes[index].nombre}"?)) {
    participantes.splice(index, 1);
    localStorage.setItem("quinielasPro2025", JSON.stringify(participantes));
    actualizarTabla();
    alert("Participante eliminado correctamente");
  }
}

function exportarExcel() {
  let csv = "Nombre,WhatsApp,Pago,1,2,3,4,5,6,7,8,9,10,11,12,13,14,Fecha\n";
  
  participantes.forEach(p => {
    csv += "${p.nombre}","${p.tel}","${p.pago==='si'?'PAGADO':'NO PAGÓ'}",${p.pronosticos.join(",")},"${p.fecha}"\n;
  });
  
  const blob = new Blob(["\uFEFF" + csv], {type: "text/csv;charset=utf-8;"});
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "quinielas_jornada17.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportarPDFAdmin() {
  let contenido = "TABLA GENERAL - QUINIELAS PRO - JORNADA 17\n";
  contenido += "=".repeat(50) + "\n\n";
  
  contenido += "Total participantes: " + participantes.length + "\n";
  contenido += "Pagados: " + participantes.filter(p => p.pago === "si").length + "\n";
  contenido += "Pendientes: " + participantes.filter(p => p.pago !== "si").length + "\n\n";
  
  participantes.forEach((p, i) => {
    contenido += ${i+1}. ${p.nombre} | ${p.tel} | ${p.pago==='si'?'PAGADO':'NO PAGÓ'} | ;
    contenido += Pronósticos: ${p.pronosticos.join(" ")} | Fecha: ${p.fecha}\n;
  });
  
  const blob = new Blob([contenido], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tabla_general_quinielas.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function limpiarBaseDatos() {
  if (confirm("¿ESTÁS SEGURO DE LIMPIAR TODA LA BASE DE DATOS?\n\nEsta acción eliminará TODOS los participantes y NO se puede deshacer.")) {
    participantes = [];
    localStorage.setItem("quinielasPro2025", JSON.stringify(participantes));
    actualizarTabla();
    alert("Base de datos limpiada correctamente");
  }
}
</script>
</body>
</html>
