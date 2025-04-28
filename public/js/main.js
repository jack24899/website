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