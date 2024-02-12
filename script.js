document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const sidebarOffset = sidebar.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= sidebarOffset) {
            sidebar.classList.add('fixed');
        } else {
            sidebar.classList.remove('fixed');
        }
    });
});