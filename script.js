document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // Cambiar la información de la card
      card.querySelector('h2').textContent = 'Nueva información';
      card.querySelector('p').textContent = 'Más detalles aquí';
    });
  });
  
  const botonForm = document.getElementById("botonForm");

  // Agrega un manejador de eventos al botón
botonForm.addEventListener("click", function() {
  // URL de WhatsApp que deseas abrir
  const urlFormGoogle = "https://forms.gle/fBD2BqyLytFbD8nT6";

  // Redirige a la URL de WhatsApp
  window.open(urlFormGoogle, "_blank");
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navtop');
  let lastScrollY = window.scrollY;

  // Abrir y cerrar el menú hamburguesa
  menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('nav-open');
  });

  // Detectar scroll para ocultar o hacer transparente el menú
  window.addEventListener('scroll', function () {
      if (window.scrollY > lastScrollY) {
          // Ocultar el menú al hacer scroll hacia abajo
          navMenu.style.opacity = '0';
          navMenu.style.transition = 'opacity 0.3s ease';
      } else {
          // Mostrar el menú al hacer scroll hacia arriba
          navMenu.style.opacity = '1';
      }
      lastScrollY = window.scrollY;
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > lastScrollY) {
      navMenu.style.display = 'none'; // Ocultar completamente
  } else {
      navMenu.style.display = 'flex'; // Mostrar el menú
  }
  lastScrollY = window.scrollY;
});


// Selecciona el header
const header = document.getElementById('header');

// Agrega un evento para detectar el scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Si se ha hecho scroll más de 50px
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const botonWhatsapp = document.getElementById("botonWhatsapp");
// Agrega un manejador de eventos al botón
botonWhatsapp.addEventListener("click", function() {
  // URL de WhatsApp que deseas abrir
  const urlWhatsapp = "https://wa.me/+541144446992?text=¡Gracias%20por%20la%20invitación!%20Mi%20nombre%20y%20apellido%20es...";

  // Redirige a la URL de WhatsApp
  window.open(urlWhatsapp, "_blank");
});

const botonWhatsappFooter = document.getElementById("botonWhatsappFooter");
// Agrega un manejador de eventos al botón
botonWhatsapp.addEventListener("click", function() {
  // URL de WhatsApp que deseas abrir
  const urlWhatsapp = "https://wa.me/+541144446992?text=¡Gracias%20por%20la%20invitación!%20Mi%20nombre%20y%20apellido%20es...";

  // Redirige a la URL de WhatsApp
  window.open(urlWhatsapp, "_blank");
});

