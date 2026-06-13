
const autos = [
  { nombre: 'Vitz Rs 2001', 
    precio: 'GS 0', imagenes: ['img/vitzrs/vitz1.jpeg', 'img/vitzrs/vitz2.jpeg', 'img/vitzrs/vitz3.jpeg', 'img/vitzrs/vitz4.jpeg', 'img/vitzrs/vitz5.png', 'img/vitzrs/vitz6.jpeg', 'img/vitzrs/vitz7.jpeg', 'img/vitzrs/vitz8.jpeg', 'img/vitzrs/vitz9.jpeg', 'img/vitzrs/vitz10.jpeg'],
    descripcion: 'Excelente estado, aire congela.',
    detalles: { ano: '2001', km: '0 km', motor: '1.5', caja: 'Mecánica'}
  },

  { nombre: 'Kia Sportage', 
    precio: 'GS 0', 
    imagenes: ['img/kiasport/ks1.png', 'img/kiasport/ks2.jpeg', 'img/kiasport/ks3.jpeg','img/kiasport/ks4.jpeg', 'img/kiasport/ks5.jpeg', 'img/kiasport/ks6.jpeg', 'img/kiasport/ks7.jpeg', 'img/kiasport/ks8.jpeg', 'img/kiasport/ks9.jpeg', 'img/kiasport/ks10.jpeg', 'img/kiasport/ks10.jpeg'],
    descripcion: 'Tren delantero y trasero sin ruidos. Interior negro cuero. Título CV Todo en orden',
    detalles: { ano: '2007', km: '0 km', motor: '2.0cc', caja: 'Automática'}
  },


  { nombre: 'Toyota Voxy', 
    precio: 'GS 0', 
    imagenes: ['img/toyotavoxy/tv1.jpeg', 'img/toyotavoxy/tv2.jpeg', 'img/toyotavoxy/tv3.jpeg', 'img/toyotavoxy/tv4.jpeg', 'img/toyotavoxy/tv5.jpeg', 'img/toyotavoxy/tv6.jpeg', 'img/toyotavoxy/tv7.jpeg', 'img/toyotavoxy/tv8.jpeg', 'img/toyotavoxy/tv9.jpeg'],
    descripcion: 'Título y cédula verte en mano. OFERTA-COVERSABLE CONTADO',
    detalles: { ano: '2002', km: '0 km', motor: '2.0', caja: 'Automática'}
  },

  { nombre: 'Toyota Clavia', 
    precio: 'GS 23.000.000', 
    imagenes: ['img/toyotaclavia/tc1.jpeg', 'img/toyotaclavia/tc2.jpeg', 'img/toyotaclavia/tc3.jpeg', 'img/toyotaclavia/tc4.jpeg', 'img/toyotaclavia/tc5.jpeg', 'img/toyotaclavia/tc6.jpeg', 'img/toyotaclavia/tc7.jpeg', 'img/toyotaclavia/tc8.jpeg', 'img/toyotaclavia/tc9.jpeg', 'img/toyotaclavia/tc10.jpeg'],
    descripcion: 'Radio con Bluetooth. Motor y tren delantero sin detalles. Cubiertas en perfectas condiciones',
    detalles: { ano: '2002', km: '0 km', motor: '1.3', caja: 'Automática'}
  },

  { nombre: 'Mitsubishi Tritón GLS', 
    precio: 'GS 0', 
    imagenes: ['img/mitt/mt1.jpeg', 'img/mitt/mt2.jpeg', 'img/mitt/mt3.jpeg', 'img/mitt/mt4.jpeg', 'img/mitt/mt5.jpeg', 'img/mitt/mt6.jpeg', 'img/mitt/mt7.jpeg'],
    descripcion: 'Radio con Bluetooth. Motor y tren delantero sin detalles. Cubiertas en perfectas condiciones',
    detalles: { ano: '2002', km: '0 km', motor: '1.3', caja: 'Automática'}
  },

  { nombre: 'Toyota Runx', 
    precio: 'GS 36.000.000', 
    imagenes: ['img/trunx/tr1.jpeg', 'img/trunx/tr2.jpeg', 'img/trunx/tr3.jpeg', 'img/trunx/tr4.jpeg', 'img/trunx/tr5.jpeg', 'img/trunx/tr6.jpeg', 'img/trunx/tr7.jpeg', 'img/trunx/tr8.jpeg', 'img/trunx/tr9.jpeg', 'img/trunx/tr10.jpeg', 'img/trunx/tr11.jpeg'],
    descripcion: '4x2. Chaperia y pintura sin detalles. Llantas deportivas. Batería nueva. Radio con Bluetooth. Aire acondicionado andando',
    detalles: { ano: '2003', km: '0 km', motor: '1.5cc', caja: 'Automática'}
  },


];

const TELEFONO_WHATSAPP = "+595983859315"; // Dejar sin espacio porque si le das espacio deja de funcionar jajasks
const cont = document.getElementById('autos');
const modal = document.getElementById('modal');

// Renderizar catálogo inicial
autos.forEach(auto => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${auto.imagenes[0]}" alt="${auto.nombre}">
    <div class="card-body">
      <h3>${auto.nombre}</h3>
      <p>${auto.precio}</p>
    </div>
  `;
  card.onclick = () => abrir(auto);
  cont.appendChild(card);
});

function abrir(auto) {
  document.getElementById('titulo').textContent = auto.nombre;
  document.getElementById('precio').textContent = auto.precio;
  
  // Inyectar descripción e info técnica (NUEVO)
  document.getElementById('descripcion').textContent = auto.descripcion || 'Sin descripción disponible.';
  
  // Si el auto tiene detalles, los cargamos en las etiquetas correspondientes
  if(auto.detalles) {
    document.getElementById('det-ano').textContent = auto.detalles.ano;
    document.getElementById('det-km').textContent = auto.detalles.km;
    document.getElementById('det-motor').textContent = auto.detalles.motor;
    document.getElementById('det-caja').textContent = auto.detalles.caja;
  }

  const imgPrincipal = document.getElementById('principal');
  imgPrincipal.src = auto.imagenes[0];
  imgPrincipal.alt = `Foto de ${auto.nombre}`;

  const mensaje = encodeURIComponent(`Hola! Estoy interesado en el ${auto.nombre} que vi en la web (${auto.precio}). Me podrías dar más información?`);
  document.getElementById('btn-whatsapp').href = `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`;

  const minis = document.getElementById('miniaturas');
  minis.innerHTML = '';

  auto.imagenes.forEach((img, index) => {
    const i = document.createElement('img');
    i.src = img;
    i.alt = `Miniatura ${index + 1} de ${auto.nombre}`;
    if(index === 0) i.className = 'active';

    i.onclick = () => {
      imgPrincipal.src = img;
      document.querySelectorAll('#miniaturas img').forEach(m => m.classList.remove('active'));
      i.classList.add('active');
    };
    minis.appendChild(i);
  });

  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
}

const cerrarModal = () => {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
};

document.getElementById('cerrar').onclick = cerrarModal;
window.onclick = (e) => { if (e.target === modal) cerrarModal(); }