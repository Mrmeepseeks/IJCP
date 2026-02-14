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


// ===== MANEJO DE FORMULARIOS =====
// Los formularios ahora usan FormSubmit, por lo que se envían directamente
// El código anterior de preventDefault ha sido removido para permitir el envío

// Opcional: Puedes agregar validación adicional aquí si lo necesitas
const formInscripcion = document.getElementById('formInscripcion');
const formContacto = document.getElementById('formContacto');

if (formInscripcion) {
  formInscripcion.addEventListener('submit', function(e) {
    // Aquí puedes agregar validaciones personalizadas antes de enviar
    // Por ejemplo, verificar que el teléfono tenga el formato correcto
    console.log('Formulario de inscripción enviándose...');
  });
}

if (formContacto) {
  formContacto.addEventListener('submit', function(e) {
    console.log('Formulario de contacto enviándose...');
  });
}


// ===== FUNCIÓN PARA DEBUGGING (opcional) =====
// Puedes descomentar esta línea para ver mensajes en la consola
// console.log('✅ Instituto José de la Cruz Puche - JavaScript cargado correctamente');
