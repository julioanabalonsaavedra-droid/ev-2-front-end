// 🔹 ARREGLO DE SERVICIOS
const servicios = [
    {
        nombre: "Caminata Monte Tarn",
        precio: 30000,
        descripcion: "Explora uno de los paisajes más increíbles de Punta Arenas.",
        imagen: "img/servcaminatasturisticas.png"
    },
    {
        nombre: "Caminata Parrillar",
        precio: 25000,
        descripcion: "Recorrido por el parque nacional con flora y fauna única.",
        imagen: "img/servguiaturistico.png"
    },
    {
        nombre: "Mirador Zapador Austral",
        precio: 20000,
        descripcion: "Disfruta de una vista panorámica inolvidable.",
        imagen: "img/servtransporte.png"
    }
];

// 🔹 TARJETAS EXTRA
const tarjetasExtra = [
    {
        titulo: "Guías Turísticos",
        imagen: "img/servguiaturistico.png",
        descripcion: "Guías expertos que acompañan toda la experiencia."
    },
    {
        titulo: "Ambiente Sano",
        imagen: "img/servcaminatasturisticas.png",
        descripcion: "Actividades en entornos naturales seguros y limpios."
    },
    {
        titulo: "Transporte Independiente",
        imagen: "img/servtransporte.png",
        descripcion: "Movilidad cómoda y flexible para los turistas."
    }
];


// 🔹 MOSTRAR SERVICIOS
function mostrarServicios() {
    const contenedor = document.getElementById("contenedorServicios");
    contenedor.innerHTML = "";

    servicios.forEach(servicio => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");

        tarjeta.innerHTML = `
            <h3>${servicio.nombre}</h3>
            <img src="${servicio.imagen}" alt="${servicio.nombre}">
            <p>${servicio.descripcion}</p>
            <p><strong>$${servicio.precio}</strong></p>
        `;

        contenedor.appendChild(tarjeta);
    });
}


// 🔹 MOSTRAR TARJETAS EXTRA
function mostrarTarjetasExtra() {
    const contenedor = document.getElementById("tarjetasExtra");
    contenedor.innerHTML = "";

    tarjetasExtra.forEach(item => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");

        tarjeta.innerHTML = `
            <h3>${item.titulo}</h3>
            <img src="${item.imagen}" alt="${item.titulo}">
            <p>${item.descripcion}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}


// 🔹 VALIDAR FORMULARIO
function validarFormulario(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const email = document.getElementById("email").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const consulta = document.getElementById("consulta").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (!nombre || !celular || !email || !pais || !ciudad || !consulta) {
        mensaje.textContent = "Por favor complete todos los espacios en blanco";
        mensaje.style.color = "red";
        return;
    }

    if (isNaN(celular)) {
        mensaje.textContent = "El celular debe ser numérico";
        mensaje.style.color = "red";
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        mensaje.textContent = "Ingrese un email válido";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = "Formulario enviado correctamente";
    mensaje.style.color = "green";

    limpiarFormulario();
}


// 🔹 LIMPIAR
function limpiarFormulario() {
    document.getElementById("formulario").reset();
}


// 🔹 INICIO
document.addEventListener("DOMContentLoaded", () => {
    mostrarServicios();
    mostrarTarjetasExtra();

    document
        .getElementById("formulario")
        .addEventListener("submit", validarFormulario);
});




