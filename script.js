// Scroll Animations
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
hiddenElements.forEach(el => observer.observe(el));

// Animate Skills
const skillBars = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillFill = entry.target;
      skillFill.style.width = skillFill.dataset.skill;
    }
  });
});
skillBars.forEach(bar => skillObserver.observe(bar));

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    dots[i].classList.remove('active');
  });
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentTestimonial = i;
    showTestimonial(currentTestimonial);
  });
});

// Auto-rotate testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000);

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Simple validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate form submission (replace with actual backend call)
  alert('Thank you for your message! I will get back to you soon.');

  // Reset form
  contactForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Typing Animation for Hero
const heroText = document.querySelector('.hero h2');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
function typeWriter() {
  if (i < text.length) {
    heroText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing animation after page load
window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Project Hover Effects
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'translateY(-10px) rotateX(5deg)';
  });

  project.addEventListener('mouseleave', () => {
    project.style.transform = 'translateY(0) rotateX(0)';
  });
});

// Service Card Hover Effects
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) rotateY(5deg)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateY(0)';
  });
});

// Loading Animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Add loading class to body initially
document.body.classList.add('loading');

// Prevent right-click (optional)
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// Console message
console.log('🚀 Portfolio loaded successfully! Created by Owen');

const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    alert("Thank you! Your message has been sent.");
  });
document.addEventListener("DOMContentLoaded", function() {
  let selected = document.querySelector(".select-selected");
  let items = document.querySelector(".select-items");
  let hiddenInput = document.getElementById("country_code");

  selected.addEventListener("click", () => {
    selected.classList.toggle("active");
    items.classList.toggle("select-hide");
  });

  items.querySelectorAll("div").forEach(option => {
    option.addEventListener("click", () => {
      selected.textContent = option.textContent;
      hiddenInput.value = option.getAttribute("data-value");
      selected.classList.remove("active");
      items.classList.add("select-hide");
    });
  });

  // Close if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      selected.classList.remove("active");
      items.classList.add("select-hide");
    }
  });
});