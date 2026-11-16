// ================= 1. TYPING EFFECT =================
const roles = [
    "B.Tech CSE Cybersecurity Student.",
    "C & Linux Enthusiast.",
    "Frontend Web Developer.",
    "Open for Internships."
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById("typed-text");

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ================= 2. NAVBAR SCROLL & MOBILE MENU =================
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Close mobile menu when a link or button is clicked
document.querySelectorAll(".nav-link, .nav-item").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// ================= 3. INTERACTIVE PROJECT FILTERING =================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        projectCards.forEach(card => {
            if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});

// ================= 4. SCROLL REVEAL ANIMATION =================
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= 5. COPY EMAIL TO CLIPBOARD =================
const copyBtn = document.getElementById("copy-email-btn");
const copyText = document.getElementById("copy-text");
const myEmail = "ishanbhatt070708@gmail.com";

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(myEmail).then(() => {
        copyText.textContent = "Copied!";
        setTimeout(() => {
            copyText.textContent = "Copy Email";
        }, 2500);
    });
});

// ================= 6. INTERNSHIP MODAL LOGIC =================
const internshipModal = document.getElementById("internship-modal");
const openInternshipBtn = document.getElementById("open-internship-modal");
const heroBadgeBtn = document.getElementById("hero-internship-badge");
const closeInternshipBtn = document.getElementById("close-internship-modal");

function openModal() {
    internshipModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    internshipModal.classList.remove("active");
    document.body.style.overflow = "";
}

openInternshipBtn.addEventListener("click", openModal);
heroBadgeBtn.addEventListener("click", openModal);
closeInternshipBtn.addEventListener("click", closeModal);

internshipModal.addEventListener("click", (e) => {
    if (e.target === internshipModal) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && internshipModal.classList.contains("active")) {
        closeModal();
    }
});