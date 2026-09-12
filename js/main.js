/**
 * Main Client Scripts for DietMed Clinical Academy
 * Handles Mobile Menu Toggle, Interactive FAQ Accordion, and Form Submission
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
      }
    });

    // Close mobile menu when any mobile link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      });
    });
  }

  // 2. Interactive FAQ Accordion
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach((btn, index) => {
    // Open the first FAQ item by default
    if (index === 0) {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('i');
      if (answer) answer.classList.add('open');
      if (icon) icon.classList.add('rotate-180');
    }

    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('i');
      const isOpen = answer.classList.contains('open');

      // Close other open FAQs
      document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
        if (openAnswer !== answer) {
          openAnswer.classList.remove('open');
          const parentBtn = openAnswer.previousElementSibling;
          if (parentBtn && parentBtn.querySelector('i')) {
            parentBtn.querySelector('i').classList.remove('rotate-180');
          }
        }
      });

      // Toggle clicked FAQ
      if (isOpen) {
        answer.classList.remove('open');
        if (icon) icon.classList.remove('rotate-180');
      } else {
        answer.classList.add('open');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
});

// 3. Form Submission Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const banner = document.getElementById('form-success-banner');
  const form = document.getElementById('internship-form');

  if (banner) {
    banner.classList.remove('hidden');
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  if (form) {
    form.reset();
  }
}
