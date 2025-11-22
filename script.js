// ===================================
// MOBILE MENU TOGGLE
// ===================================

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded',
        menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
    );
});

// Close menu when a link is clicked
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// ===================================
// SERVICE TABS
// ===================================

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// ===================================
// FAQ ACCORDION
// ===================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        
        // Close all other FAQs
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
                q.parentElement.querySelector('.faq-answer').classList.remove('active');
            }
        });
        
        // Toggle current FAQ
        question.setAttribute('aria-expanded', !isExpanded);
        faqAnswer.classList.toggle('active');
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

/*

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(msg => msg.classList.remove('show'));
    document.querySelectorAll('.form-group').forEach(group => group.classList.remove('error'));
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    const privacy = document.querySelector('input[name="privacy"]').checked;
    
    let isValid = true;
    
    // Validate Name
    if (name.length < 3) {
        showError('nameError', 'Please enter a valid name (at least 3 characters)');
        isValid = false;
    }
    
    // Validate Email
    if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate Phone
    if (!isValidPhone(phone)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate Service
    if (!service) {
        showError('serviceError', 'Please select a service');
        isValid = false;
    }
    
    // Validate Message
    if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    // Validate Privacy
    if (!privacy) {
        showError('privacyError', 'Please agree to the privacy policy');
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        
        // Prepare form data for sending (in a real app, you'd send to a server)
        const formData = {
            name: name,
            email: email,
            phone: phone,
            service: service,
            contactMethod: document.querySelector('input[name="contact_method"]:checked')?.value || 'Email',
            message: message,
            timestamp: new Date().toISOString()
        };
        
        console.log('Form submitted:', formData);
        
        // Log to console (in production, send to backend)
        console.log('This form data should be sent to your backend/email service');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    const formGroup = errorElement.closest('.form-group');
    errorElement.textContent = message;
    errorElement.classList.add('show');
    formGroup.classList.add('error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
}

*/

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Keyboard navigation for FAQ items
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('faq-question')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// ===================================
// INITIALIZATION
// ===================================

// Log initialization
console.log('Wellness Clinic Website Initialized');

// Optional: Initialize any third-party libraries here
// Example: Analytics, chat widgets, etc.

/**
 * FORM SUBMISSION GUIDE
 * =====================
 * 
 * To connect this form to receive emails, you have several options:
 * 
 * 1. FORMSPREE (Recommended for beginners)
 *    - Visit: https://formspree.io/
 *    - Change the form action: <form action="https://formspree.io/f/YOUR_ID">
 *    - Remove novalidate and form submission handler
 * 
 * 2. NETLIFY FORMS
 *    - If hosting on Netlify, add: name="contact" netlify
 *    - Netlify will automatically handle submissions
 * 
 * 3. EMAIL SERVICE API
 *    - Use EmailJS (https://www.emailjs.com/)
 *    - Add initialization code and modify form submission
 * 
 * 4. BACKEND SOLUTION
 *    - Create a server endpoint to receive form data
 *    - Update the form submission to send data to your endpoint
 * 
 * Example with EmailJS (uncomment and modify):
 * 
 * emailjs.init("YOUR_PUBLIC_KEY");
 * contactForm.addEventListener("submit", async (e) => {
 *     const templateParams = {
 *         to_email: "your-email@example.com",
 *         from_name: document.getElementById("name").value,
 *         from_email: document.getElementById("email").value,
 *         phone: document.getElementById("phone").value,
 *         service: document.getElementById("service").value,
 *         message: document.getElementById("message").value
 *     };
 *     
 *     try {
 *         await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
 *         console.log("Email sent successfully");
 *     } catch (error) {
 *         console.error("Failed to send email:", error);
 *     }
 * });
 */
