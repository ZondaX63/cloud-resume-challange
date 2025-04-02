document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    // Hamburger menu toggle
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
    
    // Close menu when nav link is clicked
    navLinksItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
    // Navigation background on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const skillLists = document.querySelectorAll('.skills-list');
    const progressBars = document.querySelectorAll('.progress');
    
    // Set initial values for progress bars
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      if (width) {
        bar.style.width = '0%';
      }
    });
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // For general fade-in elements
          if (entry.target.classList.contains('fade-in')) {
            entry.target.classList.add('active');
          }
          
          // For skill lists
          if (entry.target.classList.contains('skills-list')) {
            entry.target.classList.add('animated');
          }
          
          // For progress bars
          if (entry.target.classList.contains('progress')) {
            const width = entry.target.getAttribute('data-width');
            if (width) {
              setTimeout(() => {
                entry.target.style.width = width;
              }, 200);
            }
          }
          
          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
    
    // Start observing elements
    fadeElements.forEach(el => observer.observe(el));
    skillLists.forEach(el => observer.observe(el));
    progressBars.forEach(el => observer.observe(el));
    
    // Typing animation for hero section
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
      const texts = JSON.parse(typedElement.getAttribute('data-typed'));
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      
      function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
          typedElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          typedElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          typingSpeed = 1000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, typingSpeed);
      }
      
      setTimeout(type, 1000);
    }
    
    // Project filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          button.classList.add('active');
          
          // Get filter value
          const filterValue = button.getAttribute('data-filter');
          
          // Filter projects
          projectItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.transform = 'translateY(0)';
                item.style.opacity = '1';
              }, 100);
            } else {
              item.style.transform = 'translateY(20px)';
              item.style.opacity = '0';
              setTimeout(() => {
                item.style.display = 'none';
              }, 300);
            }
          });
        });
      });
    }
  });