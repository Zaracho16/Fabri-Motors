
const autos = [
  { nombre: 'Vitz Rs 2001', precio: 'GS 0', imagenes: ['img/vitzrs/vitz1.jpeg', 'img/vitzrs/vitz2.jpeg', 'img/vitzrs/vitz3.jpeg', 'img/vitzrs/vitz4.jpeg', 'img/vitzrs/vitz5.png', 'img/vitzrs/vitz6.jpeg', 'img/vitzrs/vitz7.jpeg', 'img/vitzrs/vitz8.jpeg', 'img/vitzrs/vitz9.jpeg', 'img/vitzrs/vitz10.jpeg'] },
  { nombre: 'Honda Civic', precio: 'USD 14.500', imagenes: ['https://picsum.photos/800/500?4', 'https://picsum.photos/800/500?5', 'https://picsum.photos/800/500?6'] },
  { nombre: 'Volkswagen Golf', precio: 'USD 17.000', imagenes: ['https://picsum.photos/800/500?7', 'https://picsum.photos/800/500?8', 'https://picsum.photos/800/500?9'] },
  { nombre: 'Hyundai Tucson', precio: 'USD 22.000', imagenes: ['https://picsum.photos/800/500?10', 'https://picsum.photos/800/500?11', 'https://picsum.photos/800/500?12'] },
  { nombre: 'Kia Sportage', precio: 'USD 19.000', imagenes: ['https://picsum.photos/800/500?13', 'https://picsum.photos/800/500?14', 'https://picsum.photos/800/500?15'] },
  { nombre: 'Chevrolet Cruze', precio: 'USD 16.000', imagenes: ['https://picsum.photos/800/500?16', 'https://picsum.photos/800/500?17', 'https://picsum.photos/800/500?18'] }
];

const TELEFONO_WHATSAPP = "5491112345678"; 

const cont = document.getElementById('autos');
const modal = document.getElementById('modal');

// Renderizar catálogo
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

// Cerrar Modal
const cerrarModal = () => {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
};

document.getElementById('cerrar').onclick = cerrarModal;
window.onclick = (e) => { if (e.target === modal) cerrarModal(); }