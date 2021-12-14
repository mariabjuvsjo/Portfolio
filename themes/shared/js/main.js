const pointer = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    pointer.style.left = e.pageX + 'px';

    pointer.style.top = e.pageY + 'px';
    pointer.setAttribute('data-fromTop', (pointer.offsetTop - scrollY));
    console.log(e.pageX, e.pageY)
});

window.addEventListener('scroll', () => {
    const fromTop = parseInt(pointer.getAttribute('data-fromTop'))
    pointer.style.top = scrollY + fromTop + 'px';
})

window.addEventListener('click', () => {
    if (pointer.classList.contains('click')) {
        pointer.classList.remove('click')
        void pointer.offsetWidth;
        pointer.classList.add('click')
    } else {
        pointer.classList.add('click')
    }
})