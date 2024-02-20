// Se você quiser adicionar alguma interatividade com JavaScript, pode fazer isso aqui.
// Por exemplo, adicionar um formulário de contato ou animações.

// Aqui está um exemplo simples de como você pode adicionar um efeito de rolagem suave para links internos na página:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});