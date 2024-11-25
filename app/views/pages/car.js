const carrossel = document.querySelector('.carrossel');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');

let scrollAmount = 0;
const cardWidth = 320; // Largura aproximada de cada item (ajuste conforme necessário)

nextBtn.addEventListener('click', () => {
  scrollAmount += cardWidth;
  carrossel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) scrollAmount = 0;
  carrossel.style.transform = `translateX(-${scrollAmount}px)`;
});
