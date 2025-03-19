document.getElementById("menu-toggle").addEventListener("click", function() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
    
    // Animasi saat membuka menu
    if (navLinks.classList.contains("active")) {
        navLinks.style.animation = "fadeIn 0.5s ease-in-out forwards";
    } else {
        navLinks.style.animation = "fadeOut 0.5s ease-in-out forwards";
    }
});


const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0) };
        to { opacity: 0; transform: translateY(-10px) };
    }
`;
document.head.appendChild(styleSheet);

let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.promo-item');
    const dots = document.querySelectorAll('.dot');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
    dots.forEach((dot, index) => {
        dot.className = index === slideIndex ? "dot active" : "dot";
    });
}


            let index = 0;
            function moveSlide(step) {
                const slides = document.querySelector(".carousel-images");
                const totalSlides = slides.children.length;
                index = (index + step + totalSlides) % totalSlides;
                slides.style.transform = translateX(-${index * 100}%);
            }
        
    
    
        let currentIndex = 0;
        function moveSlide(direction) {
            const images = document.querySelector('.carousel-images');
            const totalImages = images.children.length;
            currentIndex = (currentIndex + direction + totalImages) % totalImages;
            images.style.transform = translateX(-${currentIndex * 100}%);
        }
    

    
        document.getElementById("menu-toggle").addEventListener("click", function() {
            document.querySelector(".nav-links").classList.toggle("active");
        });