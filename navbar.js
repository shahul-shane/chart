document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const navHam = document.querySelector('.nav-ham');
  const navLinks = document.querySelector('.nav-links');
  const icon = navHam.querySelector('i');
  const links = document.querySelectorAll('.nav-links a');

  // Toggle navigation menu on hamburger icon click
  navHam.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close nav menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeNav();
    });
  });

  // Function to open nav menu
  function openNav() {
    navLinks.classList.add('show');
    icon.classList.remove('fa-bars'); // Remove hamburger icon
    icon.classList.add('fa-times');   // Add close (X) icon
  }

  // Function to close nav menu
  function closeNav() {
    navLinks.classList.remove('show');
    icon.classList.remove('fa-times'); // Remove close (X) icon
    icon.classList.add('fa-bars');     // Add hamburger icon
  }
});


