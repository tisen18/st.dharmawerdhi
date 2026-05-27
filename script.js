document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle with background scroll lock
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");
    hamburger.classList.toggle("active-bar");
    document.body.style.overflow = isActive ? "hidden" : "";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active-bar");
      document.body.style.overflow = "";
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.15 },
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

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
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const marqueeInners = document.querySelectorAll(".marquee-inner");
  if (marqueeInners.length > 0) {
    const shuffled = shuffleArray([...galleryImages]);
    const rows = Array.from({ length: marqueeInners.length }, () => []);

    shuffled.forEach((img, index) => {
      rows[index % marqueeInners.length].push(img);
    });

    marqueeInners.forEach((inner, index) => {
      const rowImages = rows[index];
      let finalImages = [...rowImages];
      while (finalImages.length < 15) {
        finalImages = finalImages.concat(rowImages);
      }

      inner.innerHTML = finalImages
        .map((img) => {
          const src = img.startsWith("http")
            ? img
            : `assets/${encodeURIComponent(img)}`;
          return `<div class="gallery-item-small">
            <img src="${src}" alt="Galeri ST. Dharma Werdhi" draggable="false" loading="lazy" />
          </div>`;
        })
        .join("");
    });
  }

  // Gallery Draggable Auto-Scroll Marquee
  const marquees = document.querySelectorAll(".draggable-marquee");

  marquees.forEach((marquee) => {
    const inner = marquee.querySelector(".marquee-inner");
    if (!inner) return;

    inner.innerHTML += inner.innerHTML + inner.innerHTML;

    let isDown = false;
    let isDragging = false;
    let startX, scrollLeft;
    let speed = (parseInt(marquee.getAttribute("data-direction")) || 1) * 1.2;

    setTimeout(() => {
      marquee.scrollLeft = inner.scrollWidth / 3;
    }, 100);

    marquee.addEventListener("mousedown", (e) => {
      isDown = true;
      isDragging = false;
      marquee.dataset.isDragging = "false";
      marquee.style.cursor = "grabbing";
      startX = e.pageX - marquee.offsetLeft;
      scrollLeft = marquee.scrollLeft;
    });

    marquee.addEventListener("mouseleave", () => {
      isDown = false;
      marquee.style.cursor = "grab";
    });
    marquee.addEventListener("mouseup", () => {
      isDown = false;
      marquee.style.cursor = "grab";
    });

    marquee.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - marquee.offsetLeft;
      const walk = (x - startX) * 2;
      marquee.scrollLeft = scrollLeft - walk;
      if (Math.abs(walk) > 5) {
        isDragging = true;
        marquee.dataset.isDragging = "true";
      }
    });

    let isTouchDown = false;
    marquee.addEventListener(
      "touchstart",
      (e) => {
        isTouchDown = true;
        isDragging = false;
        marquee.dataset.isDragging = "false";
        startX = e.touches[0].pageX - marquee.offsetLeft;
        scrollLeft = marquee.scrollLeft;
      },
      { passive: true },
    );

    marquee.addEventListener("touchend", () => {
      isTouchDown = false;
    });

    marquee.addEventListener(
      "touchmove",
      (e) => {
        if (!isTouchDown) return;
        const x = e.touches[0].pageX - marquee.offsetLeft;
        const walk = (x - startX) * 2;
        marquee.scrollLeft = scrollLeft - walk;
        if (Math.abs(walk) > 5) {
          isDragging = true;
          marquee.dataset.isDragging = "true";
        }
      },
      { passive: true },
    );

    function autoScroll() {
      if (!isDown && !isTouchDown) {
        marquee.scrollLeft += speed;
        const segmentWidth = inner.scrollWidth / 3;
        if (speed > 0) {
          if (marquee.scrollLeft >= segmentWidth * 2)
            marquee.scrollLeft -= segmentWidth;
        } else {
          if (marquee.scrollLeft <= segmentWidth)
            marquee.scrollLeft += segmentWidth;
        }
      }
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  });

  // Lightbox Modal
  const modal = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModalBtn = document.getElementById("close-modal");
  const modalOverlay = document.getElementById("modal-overlay");

  function openModal(imgSrc) {
    modalImg.src = imgSrc;
    modalTitle.textContent = "Dokumentasi Kegiatan";
    let desc =
      "Dokumentasi kegiatan Sekehe Teruna Dharma Werdhi dalam melestarikan nilai adat tradisi, mempererat simakrama, dan membangun kreativitas generasi muda di Bali.";

    if (
      imgSrc.includes("PENGREBONGAN") ||
      imgSrc.includes("NGEREBONG") ||
      imgSrc.includes("PENJOR")
    ) {
      modalTitle.textContent = "Penjor Ngerebong ST. Dharma Werdhi";
      desc =
        "Karya pembuatan Penjor Ngerebong oleh teruna-teruni ST. Dharma Werdhi. Dengan ornamen anyaman janur tradisional khas Bali yang rumit, penjor ini adalah bentuk bakti suci sekaligus pelestarian tradisi budaya leluhur.";
    } else if (imgSrc.includes("CAKA") || imgSrc.includes("OGOH")) {
      modalTitle.textContent = "Karya Seni Ogoh-Ogoh Pemuda STT";
      desc =
        "Dokumentasi pembuatan dan pengarakan ogoh-ogoh menjelang Hari Raya Nyepi. Mengintegrasikan teknik patung tradisional dengan rancangan struktur modern untuk mengekspresikan nilai seni spiritual pemuda.";
    } else if (imgSrc.includes("LOMBAMANCING") || imgSrc.includes("LOMBA")) {
      modalTitle.textContent = "Kegiatan Penggalian Dana Lomba Mancing";
      desc =
        "Keseruan program kewirausahaan pemuda dalam bentuk Lomba Mancing ST. Dharma Werdhi. Kegiatan ini menjadi wadah kolaborasi positif bersama masyarakat sekaligus kemandirian finansial organisasi.";
    } else if (imgSrc.includes("HUT") || imgSrc.includes("Pelantikan")) {
      modalTitle.textContent = "Peringatan HUT Ke-40 ST. Dharma Werdhi";
      desc =
        "Momen kebersamaan dalam puncak acara Hari Ulang Tahun ke-40 ST. Dharma Werdhi dan pelantikan pengurus baru. Langkah nyata membangun kepemimpinan pemuda yang dinamis dan berakar pada kebersamaan.";
    } else if (imgSrc.includes("Baleganjur") || imgSrc.includes("Bebarongan")) {
      modalTitle.textContent = "Parade Baleganjur Bebarongan";
      desc =
        "Penampilan atraktif penabuh baleganjur ST. Dharma Werdhi dalam Parade Seni Bebarongan. Kolaborasi ketukan irama gamelan yang megah untuk mengiringi kesenian sakral tradisional.";
    }

    modalDescription.textContent = desc;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  marquees.forEach((marquee) => {
    marquee.addEventListener("click", (e) => {
      if (marquee.dataset.isDragging === "true") return;
      const galleryItem = e.target.closest(".gallery-item-small");
      if (galleryItem) {
        const img = galleryItem.querySelector("img");
        if (img) openModal(img.src);
      }
    });
  });

  closeModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Audio Background
  // Audio Background
  const audio = new Audio(
    "https://res.cloudinary.com/drhfmxnzc/video/upload/v1779865507/audio_background_dcnzxn.mp3",
  );
  audio.loop = true;
  audio.volume = 0.5;

  // Buat tombol musik
  const musicBtn = document.createElement("button");
  musicBtn.innerHTML = '<i class="bi bi-music-note-beamed"></i>';
  musicBtn.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(0,0,0,0.4);
  color: white;
  font-size: 18px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
  document.body.appendChild(musicBtn);

  let isPlaying = false;

  musicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
      musicBtn.innerHTML = '<i class="bi bi-music-note-beamed"></i>';
    } else {
      audio.play();
      musicBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }
    isPlaying = !isPlaying;
  });
});
