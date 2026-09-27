// Function to show notification toast messages
function showToast(message) {
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

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
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

    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Ensure DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    // Activity 5: Dynamic content insertion using document.getElementById and textContent
    const demoParagraph = document.getElementById('demo');
    if (demoParagraph) {
        demoParagraph.textContent = 'Welcome to IPL 2026! Get ready for high-octane T20 action as 10 top teams compete for the prestigious trophy across iconic stadiums in India.';
    }

    // Activity 4: Smooth scrolling & toast on Book click
    const bookButtons = document.querySelectorAll('.table-container tbody a, header a[href="#booking"]');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
                showToast('Navigated to ticket booking form!');
            }
        });
    });
});