/* ===================================
   INSTITUTO JOSÉ DE LA CRUZ PUCHE
   Archivo JavaScript principal
   =================================== */

// ===== ANIMACIONES AL HACER SCROLL =====
// Este código detecta cuando un elemento entra en la pantalla y le agrega la clase 'visible'
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

// Observar todos los elementos con la clase 'fade-in'
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// ===== NAVEGACIÓN ACTIVA =====
// Resalta el link del menú según la sección en la que estés
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  // Encuentra la sección actual basada en el scroll
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  // Actualiza el estilo del link activo
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#ffffff';
    }
  });
});


// ===== MANEJO DE FORMULARIO DE INSCRIPCIÓN =====
const formInscripcion = document.getElementById('formInscripcion');

if (formInscripcion) {
  formInscripcion.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    // Obtener los datos del formulario
    const formData = new FormData(this);
    const datos = Object.fromEntries(formData);
    
    // Por ahora solo mostramos un mensaje
    // Más adelante conectaremos esto a un backend real
    console.log('Datos de inscripción:', datos);
    
    alert('¡Gracias por tu solicitud! 🎉\n\nEn un ambiente real, estos datos se enviarían al servidor.\n\nPor ahora solo es una demostración.');
    
    // Limpiar el formulario
    this.reset();
  });
}


// ===== MANEJO DE FORMULARIO DE CONTACTO =====
const formContacto = document.getElementById('formContacto');

if (formContacto) {
  formContacto.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const datos = Object.fromEntries(formData);
    
    console.log('Mensaje de contacto:', datos);
    
    alert('¡Mensaje enviado! 📧\n\nEn un ambiente real, este mensaje llegaría al correo del colegio.\n\nPor ahora solo es una demostración.');
    
    this.reset();
  });
}


// ===== FUNCIÓN PARA DEBUGGING (opcional) =====
// Puedes descomentar esta línea para ver mensajes en la consola
// console.log('✅ Instituto José de la Cruz Puche - JavaScript cargado correctamente');
