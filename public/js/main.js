document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      // Create success message element
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = 'Your message has been sent successfully!';
      
      // Insert at the top of the contact section
      const contactSection = document.querySelector('.contact');
      contactSection.insertBefore(successMessage, contactSection.firstChild);
      
      // Remove the success parameter from the URL without refreshing the page
      window.history.replaceState({}, document.title, '/contact');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        // Check if reCAPTCHA was completed
        const recaptchaResponse = grecaptcha.getResponse();
        
        // If reCAPTCHA was not completed
        if (recaptchaResponse.length === 0) {
          e.preventDefault();
          
          // Check if error message already exists
          let errorMsg = document.querySelector('.recaptcha-error');
          
          if (!errorMsg) {
            // Create error message
            errorMsg = document.createElement('div');
            errorMsg.className = 'recaptcha-error';
            errorMsg.textContent = 'Please complete the reCAPTCHA verification.';
            
            // Insert error message after reCAPTCHA
            const recaptchaDiv = document.querySelector('.g-recaptcha');
            recaptchaDiv.parentNode.insertBefore(errorMsg, recaptchaDiv.nextSibling);
          }
        }
      });
    }
  });