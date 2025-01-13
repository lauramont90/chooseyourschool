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

