
const menuButton = document.querySelector('.menu-button');
const sideBar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.video-grid');

menuButton.addEventListener('click', () => {
    sideBar.classList.toggle('hidden');
    mainContent.classList.toggle('full-width');
})