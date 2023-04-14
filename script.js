/* ===== Loader =====*/
window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.container_load');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
})

/*===== Header =====*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});