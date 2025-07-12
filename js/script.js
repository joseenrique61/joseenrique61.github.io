document.addEventListener('DOMContentLoaded', function() {

    // --- ANIMACIÓN DE ESCRITURA PARA EL SUBTÍTULO ---
    const typingTextElement = document.getElementById('typing-text');
    const textToType = "Estudiante de Ingeniería en Software";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            typingTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 70); // Velocidad de escritura
        }
    }
    type(); // Iniciar la animación al cargar la página

    // --- SMOOTH SCROLL PARA LOS ENLACES DE NAVEGACIÓN ---
    const navLinks = document.querySelectorAll('.nav-link, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Solo prevenir el comportamiento por defecto si es un ancla
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- ANIMACIÓN DE APARICIÓN AL HACER SCROLL (Intersection Observer) ---
    const animatedSections = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar el elemento una vez que es visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // El elemento se animará cuando el 10% sea visible
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

});
