/* ==================================================
   SAFEGUARD SECURITY - MAIN JAVASCRIPT STARTED
================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  /* Header Initialization Started */
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".site-nav__toggle");
  const navLinks = document.querySelectorAll(".site-nav__link");
  const mobileBreakpoint = window.matchMedia("(max-width: 1199px)");

  const updateHeader = () => {
    if (!header) return;

    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  /* Header Initialization Ended */

  /* Mobile Navigation Started */
  const closeMobileMenu = (restoreFocus = false) => {
    if (!nav || !navToggle) return;

    const wasOpen = nav.classList.contains("is-open");

    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");

    if (restoreFocus && wasOpen) {
      navToggle.focus();
    }
  };

  const openMobileMenu = () => {
    if (!nav || !navToggle || !mobileBreakpoint.matches) return;

    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation menu");
  };

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu(true);
      }
    });

    document.addEventListener("click", (event) => {
      if (
        mobileBreakpoint.matches &&
        nav.classList.contains("is-open") &&
        !nav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });

    mobileBreakpoint.addEventListener("change", () => {
      closeMobileMenu();
    });
  }
  /* Mobile Navigation Ended */

  /* Anchor Navigation Started */
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  const scrollToSection = (target, updateHistory = true) => {
    if (!target) return;

    target.scrollIntoView({
      behavior: prefersReducedMotion.matches ? "instant" : "smooth",
      block: "start",
    });

    if (updateHistory && target.id) {
      history.pushState(null, "", `#${target.id}`);
    }
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const targetId = href.slice(1);
      const target = document.getElementById(targetId);

      if (!target) return;

      event.preventDefault();
      closeMobileMenu();
      scrollToSection(target);
    });
  });
  /* Anchor Navigation Ended */

  /* Active Navigation Links Started */
  const sections = Array.from(navLinks)
    .map((link) => {
      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return null;

      const section = document.getElementById(href.slice(1));

      return section ? { link, section } : null;
    })
    .filter(Boolean);

  let scrollTicking = false;

  const updateActiveNavigation = () => {
    if (!sections.length) return;

    const headerHeight = header ? header.offsetHeight : 0;
    const activationLine = headerHeight + 100;

    let activeItem = sections[0];

    sections.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= activationLine) {
        activeItem = item;
      }
    });

    sections.forEach(({ link }) => {
      const isActive = link === activeItem.link;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const requestNavigationUpdate = () => {
    if (scrollTicking) return;

    scrollTicking = true;

    window.requestAnimationFrame(() => {
      updateActiveNavigation();
      scrollTicking = false;
    });
  };

  if (sections.length) {
    updateActiveNavigation();

    window.addEventListener("scroll", requestNavigationUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestNavigationUpdate);
  }
  /* Active Navigation Links Ended */

  /* Dynamic Copyright Year Started */
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  /* Dynamic Copyright Year Ended */
});

/* ==================================================
   SAFEGUARD SECURITY - MAIN JAVASCRIPT ENDED
================================================== */
