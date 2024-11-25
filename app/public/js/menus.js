// Seleção do ícone do menu e da sidebar
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Alterna entre abrir e fechar o menu
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  sidebar.classList.toggle('open');
});
