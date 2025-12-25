// Cambio de idioma sin reload
function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es]').forEach(el => {
    el.innerHTML = lang === 'es' ? el.dataset.es : el.dataset.en;
  });
}
// Idioma por defecto
setLang('es');

// Smooth scroll
function scrollToSection(selector){
  document.querySelector(selector).scrollIntoView({behavior:'smooth'});
}

// Form submit
function handleSubmit(e){
  e.preventDefault();
  alert('¡Solicitud enviada! Te responderemos en <24 h.');
  e.target.reset();
}