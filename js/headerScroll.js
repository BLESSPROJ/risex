window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
