// main.js — Interacciones: menú móvil y animaciones con IntersectionObserver
document.addEventListener('DOMContentLoaded', function () {
    // Toggle menú móvil
    const navToggle = document.getElementById('nav-toggle');
    const primaryNav = document.getElementById('primary-nav');

    navToggle.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        primaryNav.classList.toggle('open');
        // Si abrimos el menú, llevar foco al primer enlace (mejora a11y)
        if (primaryNav.classList.contains('open')) {
            const firstLink = primaryNav.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    });

    // Cerrar menú al hacer click en un enlace (mejora UX móvil)
    primaryNav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            primaryNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // IntersectionObserver para revelar secciones con clase .reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Añadir clase reveal a secciones y tarjetas para animar la entrada
    document.querySelectorAll('section, .card').forEach((el) => el.classList.add('reveal'));

    // Rellenar año en footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Cerrar menú con Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
            primaryNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });
});
