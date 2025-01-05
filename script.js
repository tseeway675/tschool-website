document.addEventListener('DOMContentLoaded', function() {
    const imagePaths = ['bg-img/1.png', 'bg-img/2.jpg', 'bg-img/3.png'];
    imagePaths.forEach((path, index) => {
        const img = new Image();
        img.onload = function() {
            console.log(`Image ${index + 1} loaded successfully: ${path}`);
        };
        img.onerror = function() {
            console.error(`Failed to load image ${index + 1}: ${path}`);
        };
        img.src = path;
    });

    // Search icon hover handler
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search');
    const searchInput = document.querySelector('.search input');

    searchIcon.addEventListener('mouseover', () => {
        searchContainer.classList.add('active');
        searchInput.focus();
    });

    searchIcon.addEventListener('mouseout', () => {
        searchContainer.classList.remove('active');
    });

    // Search input handler
    function checkContent() {
        const hasContent = searchInput.value.trim() !== '';
        searchContainer.classList.toggle('has-content', hasContent);
    }

    searchInput.addEventListener('input', checkContent);
    searchInput.addEventListener('change', checkContent);

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target) && searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background stays black on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = '#000000';
        } else {
            header.style.background = '#000000';
        }
    });

    // Current time display (using the provided time as reference)
    const baseTime = new Date('2024-12-19T10:15:28+08:00');
    function updateTime() {
        const now = new Date(baseTime.getTime() + (Date.now() - baseTime.getTime()));
        const timeString = now.toLocaleTimeString('zh-TW', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
        // You can add a time display element if needed
        // document.getElementById('current-time').textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime();

    console.log("Document is ready, setting up slideshow..."); // Log when the document is ready
    // Get the hero section
    const heroSection = document.querySelector('.hero');
    const ctaButton = document.querySelector('.cta-button'); // Assuming the button has a class of 'cta-button'
    const headerText = document.querySelector('.header-text'); // Assuming this is the class for the header text
    const imageOverlay = document.querySelector('.image-overlay'); // Assuming the image overlay has a class of 'image-overlay'
    const closePopupButton = document.querySelector('.close-popup');

    // Add event listener to the button
    ctaButton.addEventListener('click', function() {
        // Show the image overlay when the hero is clicked
        if (imageOverlay.style.display === 'none') {
            imageOverlay.style.display = 'flex'; // Show the overlay
        } else {
            imageOverlay.style.display = 'none'; // Hide the overlay
        }
    });

    // Add event listener to close the pop-up
    closePopupButton.addEventListener('click', function() {
        imageOverlay.style.display = 'none'; // Hide the pop-up
    });

    // Add event listener to the header text to enable the button
    headerText.addEventListener('click', function() {
        ctaButton.classList.remove('disabled'); // Re-enable the button
    });

    // Get all floating buttons
    const floatingButtons = document.querySelectorAll('.floating-button');

    // Optional: If you want to add functionality to the buttons, you can add event listeners here.
    // Example:
    document.querySelectorAll('.floating-button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!'); // Replace with desired functionality
        });
    });

    // Add event listeners to each floating button
    floatingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.querySelector('img').alt; // Get the alt text of the image
            alert(`You clicked on: ${buttonText}`); // Replace with desired functionality
        });
    });

    document.querySelector('.floating-button img[alt="我是家長"]').parentElement.addEventListener('click', function() {
        var courseMap = document.getElementById('course-map');
        courseMap.src = '課程地圖.png'; // Set the image source
        courseMap.style.display = 'block'; // Show the course map
    });

    document.querySelector('.floating-button img[alt="我是學生"]').parentElement.addEventListener('click', function() {
        var electiveCourse = document.getElementById('elective-course');
        var electiveCourseImage = electiveCourse.querySelector('img'); // Select the image inside elective-course
        electiveCourseImage.src = 'images/學習選修.png'; // Set the image source
        electiveCourse.style.display = 'block'; // Show the msg for students
    
    });
    
    // New Slideshow Functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all dots
        }
        slides[slideIndex - 1].style.display = "block"; // Show the current slide
        dots[slideIndex - 1].className += " active"; // Add active class to the current dot
    }

    // Automatic Slideshow
    let slideIndexAuto = 0;
    console.log("Starting slideshow..."); // Log when starting the slideshow
    showSlidesAuto();

    function showSlidesAuto() {
        console.log("showSlidesAuto function called"); // Log when the function is called
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides
        }
        slideIndexAuto++;
        console.log("Current slide index:", slideIndexAuto); // Log current slide index
        if (slideIndexAuto > slides.length) {slideIndexAuto = 1} // Reset to first slide
        slides[slideIndexAuto - 1].style.display = "block"; // Show the current slide
        setTimeout(showSlidesAuto, 2000); // Change image every 2 seconds
    }
});
