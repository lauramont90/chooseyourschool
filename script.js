document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // Cambiar la información de la card
      card.querySelector('h2').textContent = 'Nueva información';
      card.querySelector('p').textContent = 'Más detalles aquí';
    });
  });
  