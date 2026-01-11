// main.js - Elegant Salon Interactive JS

// Ensure the script runs only after the DOM is fully loaded
window.onload = () => {

  try {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if(menuBtn && mobileMenu){
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Animate Sections and Cards on Scroll
    const animateSections = document.querySelectorAll('.animate-section');
    const animateCards = document.querySelectorAll('.animate-card');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      animateSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < windowHeight - 100){
          section.classList.add('show');
        }
      });
      animateCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < windowHeight - 50){
          card.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run on load

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target){
          target.scrollIntoView({behavior:'smooth'});
        }
        if(mobileMenu && !mobileMenu.classList.contains('hidden')){
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // Contact Form Submission
    const appointmentForm = document.getElementById('appointmentForm');
    if(appointmentForm){
      appointmentForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        appointmentForm.reset();
      });
    }

    // WhatsApp Button Hover Effect
    const whatsappBtn = document.querySelector('a[aria-label="Chat on WhatsApp"]');
    if(whatsappBtn){
      whatsappBtn.addEventListener('mouseenter', () => whatsappBtn.classList.add('scale-125'));
      whatsappBtn.addEventListener('mouseleave', () => whatsappBtn.classList.remove('scale-125'));
    }

  } catch(err){
    console.error('Error initializing Elegant Salon JS:', err);
  }

};
