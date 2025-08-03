AOS.init({
    mirror: false,
    once: true
});

window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        AOS.refresh();
    }
});