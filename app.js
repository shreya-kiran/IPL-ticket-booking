// Function to show notification toast messages
function showToast(message) {
    // Check if toast container already exists, otherwise create it
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '2000';
        document.body.appendChild(toastContainer);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Toast styling
    toast.style.backgroundColor = 'var(--primary)';
    toast.style.color = 'var(--white)';
    toast.style.padding = '12px 24px';
    toast.style.marginTop = '10px';
    toast.style.borderRadius = '6px';
    toast.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    toast.style.fontWeight = 'bold';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease-in-out';

    toastContainer.appendChild(toast);

    // Fade in
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    // Fade out and remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Handle smooth scrolling and toast display for table "Book" buttons
    const bookButtons = document.querySelectorAll('.table-container tbody a, header a[href="#booking"]');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                // Smooth scroll to booking form
                bookingSection.scrollIntoView({ behavior: 'smooth' });
                
                // Trigger toast notification
                showToast('Navigated to ticket booking form!');
            }
        });
    });
});