document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    function updateCountdown() {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 14); // 14 days from now
        
        const now = new Date().getTime();
        const distance = endDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').innerText = '0';
            document.getElementById('hours').innerText = '0';
            document.getElementById('minutes').innerText = '0';
            document.getElementById('seconds').innerText = '0';
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, make it active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Modal Functionality
    const buyTokensBtn = document.getElementById('buy-tokens-btn');
    const reserveTokensBtn = document.querySelector('.hero-buttons .primary-btn');
    const registrationModal = document.getElementById('registration-modal');
    const closeModal = document.querySelector('.close-modal');
    
    function openModal() {
        registrationModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    function closeModalFunc() {
        registrationModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    buyTokensBtn.addEventListener('click', openModal);
    reserveTokensBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalFunc);
    
    // Close modal when clicking outside of it
    registrationModal.addEventListener('click', function(event) {
        if (event.target === registrationModal) {
            closeModalFunc();
        }
    });
    
    // Form Submission
    const registrationForm = document.getElementById('registration-form');
    
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const walletAddress = document.getElementById('wallet-address').value;
        const investmentAmount = document.getElementById('investment-amount').value;
        
        // In a real application, you would send this data to your backend
        console.log('Form submitted:', {
            email,
            walletAddress,
            investmentAmount
        });
        
        // Show success message
        alert('Thank you for your interest in G-Vibes Token! We will contact you shortly with next steps.');
        
        // Close modal and reset form
        closeModalFunc();
        registrationForm.reset();
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .team-member, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
