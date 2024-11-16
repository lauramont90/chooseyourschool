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

