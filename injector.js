document.addEventListener('DOMContentLoaded', () => {
  const imagenes = [
    "https://t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t.netlify.app/jajajaja/Imagen_de_WhatsApp_2025-07-26_a_las_01.22.22_0090782d.jpg"
  ];

  const galeria = document.querySelector('.gallery');
  if (!galeria) return;

  imagenes.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    galeria.appendChild(img);
  });
});