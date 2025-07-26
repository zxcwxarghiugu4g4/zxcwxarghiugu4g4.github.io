document.addEventListener('DOMContentLoaded', () => {
  const imagenes = [
    "htt"
  ];

  const galeria = document.querySelector('.gallery');
  if (!galeria) return;

  imagenes.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    galeria.appendChild(img);
  });
});
