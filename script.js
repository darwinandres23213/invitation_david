// Efectos especiales y animaciones
document.addEventListener('DOMContentLoaded', function() {
    // Crear más partículas dinámicamente
    createFloatingParticles();
    
    // Efecto de hover en las rosas
    addRoseHoverEffects();
    
    // Animación de entrada de la tarjeta
    animateCardEntry();
    
    // Efecto de confeti cuando dice "Sí"
    setupConfettiEffect();
});

// Crear partículas flotantes adicionales
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Efectos de hover en Hello Kitty y Spider-Man
function addRoseHoverEffects() {
    const roses = document.querySelectorAll('.rose-emoji');
    
    roses.forEach(rose => {
        rose.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(10deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        rose.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Animación de entrada de la tarjeta
function animateCardEntry() {
    const card = document.querySelector('.invitation-card');
    const elements = card.querySelectorAll('.title, .message, .date-section, .rose-field, .buttons');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Función para mostrar respuesta
function showResponse(response) {
    const responseMessage = document.getElementById('responseMessage');
    const buttons = document.querySelectorAll('.btn');
    
    // Deshabilitar botones
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });
    
    // Mostrar mensaje según la respuesta
    if (response === 'yes') {
        responseMessage.innerHTML = '¡Qué alegría! 🐱🕷️<br>¡Será una aventura de Hello Kitty y Spider-Man! 💕';
        responseMessage.className = 'response-message response-yes show';
        
        // Efecto de confeti
        createConfetti();
        
        // Animación especial
        setTimeout(() => {
            animateCats();
        }, 500);
        
    } else if (response === 'maybe') {
        responseMessage.innerHTML = '¡No hay problema! 😊<br>Pensémoslo juntos 🐱🕷️';
        responseMessage.className = 'response-message response-maybe show';
    }
    
    // Scroll suave al mensaje
    setTimeout(() => {
        responseMessage.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 300);
}

// Crear efecto de confeti con tema Hello Kitty y Spider-Man
function createConfetti() {
    const colors = ['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#C71585'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        
        document.body.appendChild(confetti);
        
        // Animación de caída
        confetti.animate([
            { 
                transform: 'translateY(0px) rotate(0deg)', 
                opacity: 1 
            },
            { 
                transform: `translateY(${window.innerHeight + 100}px) rotate(360deg)`, 
                opacity: 0 
            }
        ], {
            duration: 3000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            confetti.remove();
        };
    }
}

// Animar gatitos cuando dice "Sí"
function animateCats() {
    const cats = document.querySelectorAll('.rose-emoji');
    
    cats.forEach((cat, index) => {
        setTimeout(() => {
            cat.style.animation = 'none';
            cat.offsetHeight; // Trigger reflow
            cat.style.animation = 'bounce 0.6s ease-in-out 3';
        }, index * 100);
    });
}

// Configurar efecto de confeti
function setupConfettiEffect() {
    // Agregar estilos para el confeti
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(-100px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Efecto de parallax en el scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const roses = document.querySelectorAll('.rose');
    
    roses.forEach((rose, index) => {
        const speed = 0.5 + (index * 0.1);
        rose.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Efecto de click en la tarjeta
document.querySelector('.invitation-card').addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) return;
    
    // Crear efecto de ondas
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 215, 0, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = (e.clientX - this.offsetLeft) + 'px';
    ripple.style.top = (e.clientY - this.offsetTop) + 'px';
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Funciones interactivas
function createHearts() {
    const colors = ['💕', '💖', '💗', '💝', '💘', '💞'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = '2rem';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'heartFloat 3s ease-out forwards';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

function playSound() {
    // Crear efecto visual de sonido
    const soundEffect = document.createElement('div');
    soundEffect.innerHTML = '🎵';
    soundEffect.style.position = 'fixed';
    soundEffect.style.fontSize = '3rem';
    soundEffect.style.left = '50%';
    soundEffect.style.top = '50%';
    soundEffect.style.transform = 'translate(-50%, -50%)';
    soundEffect.style.pointerEvents = 'none';
    soundEffect.style.zIndex = '1000';
    soundEffect.style.animation = 'soundWave 1s ease-out forwards';
    
    document.body.appendChild(soundEffect);
    
    setTimeout(() => {
        soundEffect.remove();
    }, 1000);
}

function showMagic() {
    const magicTexts = [
        '🐱 ¡Hello Kitty Magic! 🐱',
        '🕷️ ¡Spider-Powers! 🕷️',
        '🌟 ¡Eres mi superhéroe! 🌟',
        '💫 ¡Laura Valentina, eres mi Hello Kitty! 💫',
        '🎪 ¡La aventura continúa! 🎪'
    ];
    
    const randomText = magicTexts[Math.floor(Math.random() * magicTexts.length)];
    
    // Crear efecto de magia
    const magic = document.createElement('div');
    magic.innerHTML = randomText;
    magic.style.position = 'fixed';
    magic.style.fontSize = '1.5rem';
    magic.style.fontWeight = 'bold';
    magic.style.color = '#FF69B4';
    magic.style.left = '50%';
    magic.style.top = '30%';
    magic.style.transform = 'translate(-50%, -50%)';
    magic.style.pointerEvents = 'none';
    magic.style.zIndex = '1000';
    magic.style.animation = 'magicAppear 2s ease-out forwards';
    magic.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
    
    document.body.appendChild(magic);
    
    setTimeout(() => {
        magic.remove();
    }, 2000);
}

// Agregar estilos para el efecto ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
