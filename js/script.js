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
