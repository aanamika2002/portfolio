document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Message sent! (This is a demo form)';
  status.style.color = 'green';
  this.reset();
});
