'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}



  // Carousel functionality
  document.querySelectorAll('.full').forEach((section) => {
    const carousel = section.querySelector('.carousel');
    const dots = section.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });



    // Handle swipe gestures
    let startX;
    let isSwiping = false;

    section.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    section.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - startX;

        if (deltaX > 50) {
            currentIndex = Math.max(0, currentIndex - 1);
            isSwiping = false;
            updateCarousel();
        } else if (deltaX < -50) {
            currentIndex = Math.min(dots.length - 1, currentIndex + 1);
            isSwiping = false;
            updateCarousel();
        }
    });

    section.addEventListener('touchend', () => {
        isSwiping = false;
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.querySelector('.blog');
    const blogCards = blogContainer.querySelectorAll('.blog-card');
    const loadMoreButton = document.querySelector('.btn.load-more');

    if (blogCards.length < 5) {
        loadMoreButton.style.opacity = 0;
    }
});


function copyToClipboard() {
    const dummy = document.createElement('textarea');
    dummy.value = window.location.href;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Link copied to clipboard!');
}



    document.querySelectorAll('.db').forEach(button => {
        button.addEventListener('click', function() {
            const email = 'sosmailservice@gmail.com';
            const subject = 'Hi Sos , lets make a deal';
            const body = 'Please enter what type of services you need, or any other discussions? & please provide ur details for further communications';

            // Encode URI components
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Redirect to mailto link
            window.location.href = mailtoLink;
        });
    });


    //scrolling to a sectiom
    function scrollToSection(id) {
        const element = document.getElementById(id);
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offset = window.innerHeight / 2 - element.clientHeight / 2;
        const scrollToPosition = elementPosition - offset;
    
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    }


    
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1  // Trigger the effect when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the element has been revealed
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});



//sidebar script

function closeSidebar() {
    document.querySelector('.mobile-nav').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});
