document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const targetId = link.getAttribute('href');
          const targetSection = document.querySelector(targetId);

          sections.forEach((section) => {
              section.classList.remove('active');
          });

          targetSection.classList.add('active');

          targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          });
      });
  });

  const form = document.getElementById('contact-form');

  if (form) {
      form.addEventListener('submit', (event) => {
          event.preventDefault();

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          console.log('Form submitted:', { name, email, message });

          form.reset();
      });
  }
});
