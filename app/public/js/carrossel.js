let currentIndex = 0;
 
function moveCarrossel(step) {
    const carrossel = document.querySelector('.carrossel');
    const totalItems = carrossel.children.length;
    currentIndex += step;
 
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
 
    const itemWidth = carrossel.children[0].offsetWidth;
    const newOffset = -currentIndex * (itemWidth + 20); // 20 é o espaço entre os itens
    carrossel.style.transform = `translateX(${newOffset}px)`;
}