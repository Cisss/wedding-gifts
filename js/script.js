/**
 * Wedding Gift Website - Francisca & Magdalena
 * Minimal JavaScript for enhanced user experience
 */

// Wedding countdown
function updateCountdown() {
  const weddingDate = new Date('2026-08-22T13:00:00').getTime();
  const now = new Date().getTime();
  const distance = weddingDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minutesEl = document.getElementById('countdown-minutes');
  const secondsEl = document.getElementById('countdown-seconds');
  
  if (daysEl) daysEl.textContent = days;
  if (hoursEl) hoursEl.textContent = hours;
  if (minutesEl) minutesEl.textContent = minutes;
  if (secondsEl) secondsEl.textContent = seconds;
  
  if (distance < 0) {
    const countdownEl = document.querySelector('.countdown');
    if (countdownEl) {
      countdownEl.innerHTML = '<p style="text-align: center; font-size: 1.5rem; color: var(--color-gold);">We\'re married! 💍</p>';
    }
  }
}

// Smooth scroll for anchor links (if needed in future)
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize countdown
  if (document.querySelector('.countdown')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Hamburger menu toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Scroll to bottom when clicking a link that targets the footer
    navLinks.querySelectorAll('.nav-link[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target && target.tagName.toLowerCase() === 'footer') {
          e.preventDefault();
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.main-nav')) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Transparent nav: become opaque after scrolling past hero
  const mainNav = document.querySelector('.main-nav');
  if (mainNav) {
    const onScroll = function() {
      if (window.scrollY > 20) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load in case page is already scrolled
  }

  // Active nav link highlighting
  const allNavLinks = document.querySelectorAll('.nav-links .nav-link');

  // 1. Mark the current page link active based on URL (skip anchor-only links)
  const currentPath = window.location.pathname;
  allNavLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    // Only check non-anchor links (i.e. not "#section" or "page.html#section")
    if (href && !href.includes('#')) {
      const linkPath = new URL(link.href, window.location.href).pathname;
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    }
  });

  // 2. On index pages: highlight section links as user scrolls
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0) {
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;

    const sectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          allNavLinks.forEach(function(link) {
            const href = link.getAttribute('href');
            // Match both "#id" and "index.html#id" patterns
            const isMatch = href === '#' + id || href.endsWith('#' + id);
            link.classList.toggle('active', isMatch);
          });
        }
      });
    }, {
      rootMargin: '-' + navHeight + 'px 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(function(section) {
      sectionObserver.observe(section);
    });
  }
  // Add fade-in animation on scroll (optional enhancement)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe all cards for animation
  const cards = document.querySelectorAll('.dream-card, .card, .dream-description');
  cards.forEach(card => observer.observe(card));
  
  
  // Console message for developers
  console.log('%c💝 Wedding Gift Website', 'color: #D4AF37; font-size: 16px; font-weight: bold;');
  console.log('%cMade with love for Francisca & Magdalena', 'color: #8B7355; font-size: 12px;');
  
  
  // Optional: Confetti effect on thank-you page (you can add a library later if desired)
  if (window.location.pathname.includes('thank-you.html')) {
    console.log('🎉 Thank you for your contribution!');
  }
  
});


/**
 * Optional: Add subtle hover effect sounds or animations
 * You can expand this file with additional interactive features as needed
 */
