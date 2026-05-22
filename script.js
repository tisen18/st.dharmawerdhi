document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active-bar');
    });

    // Close mobile menu on click link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active-bar');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after fading in completely
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // Gallery Population Logic
    const galleryImages = [
        "https://drive.google.com/thumbnail?id=11Q__mJjy9AwYpcEu2SlFYlcbYZXsMkKW&sz=w1000",
        "https://drive.google.com/thumbnail?id=13vU22JA7c7tggn6kTkRRdNRWSqMgt_gV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AJYAQpl3-Ek4HZ91r4HqPy8s_EvCd_ru&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ExtR2jM_dh8sHUeZHhmH6asaDRGsoC-p&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FI7sazY7f5Wi_BIaom7u0vZRTIkY-_dD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GW0SA8LgNbi0Pt_RLth6gBQEIbPyUGsz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Hb9LK19mm0NxIfhDSCiRjHV9fnOtq1Ox&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Hh94wqQtrXJhBU0Pa2_Ath-5Ye98OK6D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KddVao4ZYNlCXcSj516iJhEWyBCL-d89&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MIMiLGci2_1oKJS9o2v6XGITgQQKCjuN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MIaDL-X6IObXYMw0uKp7HXUe2b566rTq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1O1I48Zz2irzXUx1k_avXqbXSuhD6SH8R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WeH1qURsCsALiqLiB5CcwcruKrmMXmxk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1a4bW7aghXdtARq87j_oCV0Nhl8_EATQY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c0qQGWptGau-g1toTzY426Gm5IlPyv3m&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ccCl17P2sFqUNiCgFCnGEOn38cCoNWD3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1d4NsYU4rwiNei_7cpvgayKWXCf5W2yMJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gIOWGfjzCdYu6tBmSV59MbZsc8He4rdb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hETp5WG5coWjvK7yJMkxg_YcOxqtkEsh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1i6u8OnoWde2rzjSJF9WIH_aqdG-uNAup&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ooaPa2YZdUlAH-ioaeW85xARZIXrh_gL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uS_Q-D9iWZsO9Hok-vJonzKZ1qdG2wT8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ums9R9MwbrzOUx9bGqAbg-r0o0sZSP8w&sz=w1000",
        "https://drive.google.com/thumbnail?id=1v2BIQ04Vds3DJQhcmvsiQo9jJptsMcHW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vn0DB1NDnctREjo1003wKhA8O4BVCol4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zDLFE8lCZ6U_1nNEYY6gcLGlbyNORI8M&sz=w1000",
        // "#CAKA1947 #STDW (1).jpg",
        // "#CAKA1947 #STDW (2).jpg",
        // "#CAKA1947 #STDW.jpg",
        // "- MEDANG BARAK -#STDW #PENGREBONGAN #PENJORNGEREBONG #NGEREBONG2024 #TERUNATERUNI (1).jpg",
        // "- MEDANG BARAK -#STDW #PENGREBONGAN #PENJORNGEREBONG #NGEREBONG2024 #TERUNATERUNI.jpg",
        // "- NAGA RAJA - #STDW #PENGREBONGAN #PENJORNGEREBONG #NGEREBONG2024 #TERUNATERUNI (1).jpg",
        // "- NAGA RAJA - #STDW #PENGREBONGAN #PENJORNGEREBONG #NGEREBONG2024 #TERUNATERUNI.jpg",
        // "- SARWA TANGI -Penjor Ngerebong STDW 2025Matur Suksma semeton lan Krama Banjar Lanang-Istri sare (1).jpg",
        // "- SARWA TANGI -Penjor Ngerebong STDW 2025Matur Suksma semeton lan Krama Banjar Lanang-Istri sare (2).jpg",
        // "- SARWA TANGI -Penjor Ngerebong STDW 2025Matur Suksma semeton lan Krama Banjar Lanang-Istri sare (3).jpg",
        // "- SARWA TANGI -Penjor Ngerebong STDW 2025Matur Suksma semeton lan Krama Banjar Lanang-Istri sare (4).jpg",
        // "- SARWA TANGI -Penjor Ngerebong STDW 2025Matur Suksma semeton lan Krama Banjar Lanang-Istri sare (5).jpg",
        // "- SARWA TANGI -Penjor Ngerebong STDW 2025Matur Suksma semeton lan Krama Banjar Lanang-Istri sare.jpg",
        // "DAY - 2 ‼️PUNCAK ACARA (28-02-2026)Perayaan Peringatan HUT Ke-40 ST. Dharma Werdhi dan Pelantik (1).jpg",
        // "DAY - 2 ‼️PUNCAK ACARA (28-02-2026)Perayaan Peringatan HUT Ke-40 ST. Dharma Werdhi dan Pelantik.jpg",
        // "DOKUMENTASI ACARA LOMBA MANCING STDW#2 2025 ( 6 JULI 2025 ) #LOMBAMANCINGSTDW#STDW#DHARMAWERDHI# (1).jpg",
        // "DOKUMENTASI ACARA LOMBA MANCING STDW#2 2025 ( 6 JULI 2025 ) #LOMBAMANCINGSTDW#STDW#DHARMAWERDHI# (2).jpg",
        // "DOKUMENTASI ACARA LOMBA MANCING STDW#2 2025 ( 6 JULI 2025 ) #LOMBAMANCINGSTDW#STDW#DHARMAWERDHI# (3).jpg",
        // "DOKUMENTASI ACARA LOMBA MANCING STDW#2 2025 ( 6 JULI 2025 ) #LOMBAMANCINGSTDW#STDW#DHARMAWERDHI#.jpg",
        // "DOKUMENTASI PERSIAPAN LOMBA MANCING STDW 2022 (1).jpg",
        // "DOKUMENTASI PERSIAPAN LOMBA MANCING STDW 2022 (2).jpg",
        // "DOKUMENTASI PERSIAPAN LOMBA MANCING STDW 2022.jpg",
        // "Parade Baleganjur Bebarongan dalam rangka Hut LPD desa Kesiman ke-32📌22 April 2023📍Wantilan P (1).jpg",
        // "Parade Baleganjur Bebarongan dalam rangka Hut LPD desa Kesiman ke-32📌22 April 2023📍Wantilan P (2).jpg",
        // "Parade Baleganjur Bebarongan dalam rangka Hut LPD desa Kesiman ke-32📌22 April 2023📍Wantilan P.jpg"
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const marqueeInners = document.querySelectorAll('.marquee-inner');
    if (marqueeInners.length > 0) {
        const shuffled = shuffleArray([...galleryImages]);
        const rows = Array.from({ length: marqueeInners.length }, () => []);
        
        // Round-robin distribution
        shuffled.forEach((img, index) => {
            rows[index % marqueeInners.length].push(img);
        });
        
        marqueeInners.forEach((inner, index) => {
            const rowImages = rows[index];
            
            // To be absolutely safe against wide screens and few images, duplicate rowImages if it's too short
            let finalImages = [...rowImages];
            while (finalImages.length < 15) {
                finalImages = finalImages.concat(rowImages);
            }
            
            inner.innerHTML = finalImages.map(img => {
                const src = img.startsWith('http') ? img : `assets/${encodeURIComponent(img)}`;
                return `
                <div class="gallery-item-small">
                    <img src="${src}" alt="Galeri ST. Dharma Werdhi" draggable="false" loading="lazy" />
                </div>
                `;
            }).join('');
        });
    }

    // Gallery Draggable Auto-Scroll Marquee
    const marquees = document.querySelectorAll('.draggable-marquee');
    
    marquees.forEach(marquee => {
        const inner = marquee.querySelector('.marquee-inner');
        if (!inner) return;

        // Clone the content to ensure smooth infinite loop
        inner.innerHTML += inner.innerHTML + inner.innerHTML; // 3x content

        let isDown = false;
        let isDragging = false;
        let startX;
        let scrollLeft;
        let speed = (parseInt(marquee.getAttribute('data-direction')) || 1) * 1.2; 

        // Start near middle
        setTimeout(() => {
            marquee.scrollLeft = inner.scrollWidth / 3;
        }, 100);

        marquee.addEventListener('mousedown', (e) => {
            isDown = true;
            isDragging = false;
            marquee.style.cursor = 'grabbing';
            startX = e.pageX - marquee.offsetLeft;
            scrollLeft = marquee.scrollLeft;
        });

        marquee.addEventListener('mouseleave', () => {
            isDown = false;
            marquee.style.cursor = 'grab';
        });

        marquee.addEventListener('mouseup', () => {
            isDown = false;
            marquee.style.cursor = 'grab';
        });

        marquee.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - marquee.offsetLeft;
            const walk = (x - startX) * 2; // scroll-fast
            marquee.scrollLeft = scrollLeft - walk;
            if (Math.abs(walk) > 5) isDragging = true;
        });

        // Prevent opening links if user is dragging
        const anchors = marquee.querySelectorAll('a');
        anchors.forEach(a => {
            a.addEventListener('click', (e) => {
                if (isDragging) {
                    e.preventDefault();
                }
            });
        });

        // Touch events for mobile
        let isTouchDown = false;
        marquee.addEventListener('touchstart', (e) => {
            isTouchDown = true;
            isDragging = false;
            startX = e.touches[0].pageX - marquee.offsetLeft;
            scrollLeft = marquee.scrollLeft;
        }, {passive: true});
        
        marquee.addEventListener('touchend', () => {
            isTouchDown = false;
        });
        
        marquee.addEventListener('touchmove', (e) => {
            if(!isTouchDown) return;
            const x = e.touches[0].pageX - marquee.offsetLeft;
            const walk = (x - startX) * 2;
            marquee.scrollLeft = scrollLeft - walk;
        }, {passive: true});

        // Auto scroll
        function autoScroll() {
            if (!isDown && !isTouchDown) {
                marquee.scrollLeft += speed;
                
                const segmentWidth = inner.scrollWidth / 3;
                if (speed > 0) { // moving right
                    if (marquee.scrollLeft >= segmentWidth * 2) {
                        marquee.scrollLeft -= segmentWidth;
                    }
                } else { // moving left
                    if (marquee.scrollLeft <= segmentWidth) {
                        marquee.scrollLeft += segmentWidth;
                    }
                }
            }
            requestAnimationFrame(autoScroll);
        }
        autoScroll();
    });

});
