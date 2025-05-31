// JavaScript functions for animations and interactions

// Initialize all animations when page loads
function initializeAnimations() {
    // Animate title with delay
    const titles = document.querySelectorAll('.animated-title');
    titles.forEach((title, index) => {
        setTimeout(() => {
            title.style.animation = 'fadeIn 1s ease forwards, float 3s ease-in-out infinite';
        }, 300);
    });
    
    // Animate form controls with staggered delay
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach((control, index) => {
        control.style.opacity = '0';
        control.style.transform = 'translateY(20px)';
        setTimeout(() => {
            control.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            control.style.opacity = '1';
            control.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-login, .btn-signup');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// Create ripple effect on button click
function createRipple(event) {
    const button = event.currentTarget;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Show toast notification
function showToast(message) {
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.backgroundColor = '#0d2240';
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '4px';
    toast.style.marginTop = '10px';
    toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    // Add to container
    toastContainer.appendChild(toast);
    
    // Show with animation
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Add form validation visual feedback
document.addEventListener('DOMContentLoaded', function() {
    const formControls = document.querySelectorAll('.form-control');
    
    formControls.forEach(control => {
        control.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.add('filled');
            } else {
                this.classList.remove('filled');
            }
        });
    });
});