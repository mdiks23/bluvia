document.addEventListener('DOMContentLoaded', () => {
    
    // Interactive Visual Switcher Logic
    const btnBlue = document.getElementById('btn-blue');
    const btnPurple = document.getElementById('btn-purple');
    const images = document.querySelectorAll('.hero-img');
    const heroSection = document.getElementById('hero');

    function switchMood(mood) {
        if (mood === 'blue') {
            btnBlue.classList.add('active');
            btnPurple.classList.remove('active');
            images[0].classList.add('active-img');
            images[1].classList.remove('active-img');
            heroSection.style.backgroundImage = "radial-gradient(circle at 80% 20%, rgba(10, 54, 157, 0.15), transparent 40%)";
        } else {
            btnPurple.classList.add('active');
            btnBlue.classList.remove('active');
            images[1].classList.add('active-img');
            images[0].classList.remove('active-img');
            heroSection.style.backgroundImage = "radial-gradient(circle at 80% 20%, rgba(123, 44, 191, 0.15), transparent 40%)";
        }
    }

    btnBlue.addEventListener('click', () => switchMood('blue'));
    btnPurple.addEventListener('click', () => switchMood('purple'));

    // Mobile Hamburger Menu Reveal
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinksList.style.display = navLinksList.style.display === 'flex' ? 'none' : 'flex';
        navLinksList.style.flexDirection = 'column';
        navLinksList.style.position = 'absolute';
        navLinksList.style.top = '70px';
        navLinksList.style.left = '0';
        navLinksList.style.width = '100%';
        navLinksList.style.background = '#0B0E14';
        navLinksList.style.padding = '20px';
        navLinksList.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    });

    // Clean Intercept Order Form Confirmation
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for choosing luxury. Your selection has been reserved with the Bluvia Innovation Team!');
        orderForm.reset();
    });
});