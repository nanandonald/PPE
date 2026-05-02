// JavaScript pour le projet PPE

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page chargée');
    initializeApp();
});

function initializeApp() {
    // Gestion du formulaire
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Navigation smooth scroll
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    
    // Récupérer les données
    const formData = new FormData(form);
    console.log('Formulaire envoyé:', Object.fromEntries(formData));
    
    // Afficher un message de confirmation
    alert('Merci ! Votre message a été envoyé.');
    
    // Réinitialiser le formulaire
    form.reset();
}

// Initialisation réussie
console.log('Application PPE initialisée');
