/* ==================================================
   SAFEGUARD SECURITY - LANDING PAGE JS STARTED
================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  /* Testimonials Carousel Started */
  const testimonialsSection = document.querySelector("#testimonials");

  if (testimonialsSection) {
    const slides = Array.from(
      testimonialsSection.querySelectorAll(
        ".testimonial-slide, .testimonials-section__slide, [data-testimonial-slide]",
      ),
    );

    const previousButton = testimonialsSection.querySelector(
      ".testimonials-carousel__arrow--prev",
    );

    const nextButton = testimonialsSection.querySelector(
      ".testimonials-carousel__arrow--next",
    );

    const dots = Array.from(
      testimonialsSection.querySelectorAll(".testimonials-carousel__dot"),
    );

    if (slides.length > 0) {
      let activeIndex = slides.findIndex(
        (slide) =>
          slide.classList.contains("is-active") ||
          slide.getAttribute("aria-hidden") === "false",
      );

      if (activeIndex < 0) activeIndex = 0;

      const showSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
          const isActive = slideIndex === activeIndex;

          slide.classList.toggle("is-active", isActive);
          slide.setAttribute("aria-hidden", String(!isActive));
          slide.hidden = !isActive;
        });

        dots.forEach((dot, dotIndex) => {
          const isActive = dotIndex === activeIndex;

          dot.classList.toggle("is-active", isActive);
          dot.setAttribute("aria-pressed", String(isActive));
          dot.setAttribute(
            "aria-label",
            `Show testimonial ${dotIndex + 1} of ${slides.length}`,
          );
        });
      };

      previousButton?.addEventListener("click", () => {
        showSlide(activeIndex - 1);
      });

      nextButton?.addEventListener("click", () => {
        showSlide(activeIndex + 1);
      });

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          showSlide(index);
        });
      });

      testimonialsSection.addEventListener("keydown", (event) => {
        if (
          !event.target.closest(
            ".testimonials-carousel__arrow, .testimonials-carousel__dot",
          ) ||
          event.altKey ||
          event.ctrlKey ||
          event.metaKey
        ) {
          return;
        }

        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showSlide(activeIndex - 1);
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          showSlide(activeIndex + 1);
        }
      });

      showSlide(activeIndex);
    }
  }
  /* Testimonials Carousel Ended */

  /* FAQ Accordion Started */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const trigger = item.querySelector(".faq-item__question");
    const answer = item.querySelector(".faq-item__answer");

    if (!trigger || !answer) return;

    if (!answer.id) {
      answer.id = `faq-answer-${index + 1}`;
    }

    trigger.setAttribute("aria-controls", answer.id);

    const isInitiallyOpen = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(isInitiallyOpen));

    answer.hidden = !isInitiallyOpen;
    item.classList.toggle("is-open", isInitiallyOpen);

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      faqItems.forEach((otherItem) => {
        const otherTrigger = otherItem.querySelector(".faq-item__question");
        const otherAnswer = otherItem.querySelector(".faq-item__answer");

        if (!otherTrigger || !otherAnswer) return;

        otherTrigger.setAttribute("aria-expanded", "false");
        otherAnswer.hidden = true;
        otherItem.classList.remove("is-open");
      });

      if (!isOpen) {
        trigger.setAttribute("aria-expanded", "true");
        answer.hidden = false;
        item.classList.add("is-open");
      }
    });
  });
  /* FAQ Accordion Ended */

  /* Contact Tabs Started */
  const contactSection = document.querySelector("#contact");

  if (contactSection) {
    const contactTabs = Array.from(
      contactSection.querySelectorAll("[data-contact-tab]"),
    );

    const contactPanels = Array.from(
      contactSection.querySelectorAll("[data-contact-panel]"),
    );

    const activateContactTab = (tab, moveFocus = false) => {
      const selectedTab = tab.dataset.contactTab;

      const matchingPanel = contactPanels.find(
        (panel) => panel.dataset.contactPanel === selectedTab,
      );

      if (!matchingPanel) return;

      contactTabs.forEach((currentTab) => {
        const isActive = currentTab === tab;

        currentTab.classList.toggle("is-active", isActive);
        currentTab.setAttribute("aria-selected", String(isActive));
        currentTab.tabIndex = isActive ? 0 : -1;
      });

      contactPanels.forEach((panel) => {
        panel.hidden = panel !== matchingPanel;
      });

      if (moveFocus) {
        tab.focus();
      }
    };

    if (contactTabs.length > 0 && contactPanels.length > 0) {
      contactTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          activateContactTab(tab);
        });

        tab.addEventListener("keydown", (event) => {
          if (event.altKey || event.ctrlKey || event.metaKey) {
            return;
          }

          let nextIndex = index;

          switch (event.key) {
            case "ArrowRight":
              nextIndex = (index + 1) % contactTabs.length;
              break;

            case "ArrowLeft":
              nextIndex = (index - 1 + contactTabs.length) % contactTabs.length;
              break;

            case "Home":
              nextIndex = 0;
              break;

            case "End":
              nextIndex = contactTabs.length - 1;
              break;

            default:
              return;
          }

          event.preventDefault();
          activateContactTab(contactTabs[nextIndex], true);
        });
      });

      const initiallySelectedTab =
        contactTabs.find(
          (tab) => tab.getAttribute("aria-selected") === "true",
        ) || contactTabs[0];

      activateContactTab(initiallySelectedTab);
    }
  }
  /* Contact Tabs Ended */

  /* Quote Form Foundation Started */
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby_D_5mmOeGXrOTAfedyfDtnTdTcmiIIhCmeJSy3i2wxgB0C-REZtbwiRkhwTjXiyVF/exec";

  const quoteForm = document.querySelector("#security-quote-form");

  if (quoteForm) {
    const submitButton = quoteForm.querySelector('button[type="submit"]');
    const formStatus = quoteForm.querySelector(".contact-form__status");
    const phoneInput = quoteForm.querySelector("#quote-phone");
    const nameInput = quoteForm.querySelector("#quote-name");
    const emailInput = quoteForm.querySelector("#quote-email");
    const serviceInput = quoteForm.querySelector("#quote-service");

    if (
      submitButton &&
      formStatus &&
      phoneInput &&
      nameInput &&
      emailInput &&
      serviceInput
    ) {
      const defaultCountryCode = "+91 ";
      const originalButtonContent = submitButton.innerHTML;
      const successMessage = "Your enquiry has been submitted successfully.";

      let submitting = false;
      let pendingRequest = null;
      let statusTimer = null;

      /* Status Messages Started */
      const showStatus = (message, type = "") => {
        clearTimeout(statusTimer);

        formStatus.textContent = message;
        formStatus.dataset.status = type;
        formStatus.classList.remove("success", "error", "loading");

        if (type) formStatus.classList.add(type);

        formStatus.style.color =
          type === "success"
            ? "#167a3e"
            : type === "error"
              ? "#b42318"
              : "#000000";

        formStatus.style.fontWeight = type === "success" ? "700" : "400";
      };

      const setSubmitting = (value) => {
        submitting = value;
        submitButton.disabled = value;
        submitButton.setAttribute("aria-busy", String(value));

        submitButton.innerHTML = value
          ? "Submitting..."
          : originalButtonContent;
      };

      const showSuccess = () => {
        showStatus(successMessage, "success");

        quoteForm.reset();
        phoneInput.value = defaultCountryCode;
        pendingRequest = null;

        statusTimer = setTimeout(() => {
          if (formStatus.textContent === successMessage) {
            showStatus("");
          }
        }, 5000);
      };
      /* Status Messages Ended */

      /* International Phone Validation Started */
      const validatePhone = (value) => {
        const phone = value.trim();
        const match = phone.match(/^(\+[1-9]\d{0,2}) ([0-9]+)$/);

        if (!match) {
          return "Enter a phone number with country code, for example +91 9876543210.";
        }

        const countryCode = match[1];
        const digits = match[2];

        if (countryCode === "+91") {
          if (!/^[6-9]\d{9}$/.test(digits)) {
            return "Enter a valid 10-digit Indian mobile number after +91.";
          }
        } else {
          const totalDigits = countryCode.length - 1 + digits.length;

          if (
            digits.length < 4 ||
            digits.length > 14 ||
            totalDigits < 8 ||
            totalDigits > 15
          ) {
            return "Enter a valid international phone number.";
          }
        }

        return "";
      };

      if (!phoneInput.value.trim()) {
        phoneInput.value = defaultCountryCode;
      }

      phoneInput.addEventListener("focus", () => {
        if (!phoneInput.value.trim()) {
          phoneInput.value = defaultCountryCode;
        }

        if (phoneInput.value === defaultCountryCode) {
          requestAnimationFrame(() => {
            phoneInput.setSelectionRange(
              defaultCountryCode.length,
              defaultCountryCode.length,
            );
          });
        }
      });

      phoneInput.addEventListener("blur", () => {
        if (!phoneInput.value.trim()) {
          phoneInput.value = defaultCountryCode;
        }
      });

      phoneInput.addEventListener("input", () => {
        phoneInput.setCustomValidity("");
      });
      /* International Phone Validation Ended */

      /* Backend Confirmation Started */
      const verifySavedEnquiry = (requestId) => {
        return new Promise((resolve, reject) => {
          const callbackName =
            "bookingCallback_" + requestId.replace(/-/g, "_");

          const script = document.createElement("script");
          let completed = false;

          const cleanup = () => {
            clearTimeout(timeout);
            delete window[callbackName];
            script.remove();
          };

          const finish = (error, result) => {
            if (completed) return;
            completed = true;
            cleanup();

            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          };

          const timeout = setTimeout(() => {
            finish(new Error("Confirmation timed out."));
          }, 15000);

          window[callbackName] = (result) => {
            finish(null, result && result.saved === true);
          };

          script.onerror = () => {
            finish(new Error("Confirmation request failed."));
          };

          const url = new URL(SCRIPT_URL);
          url.searchParams.set("callback", callbackName);
          url.searchParams.set("requestId", requestId);

          script.src = url.toString();
          document.head.appendChild(script);
        });
      };

      const checkSavedWithRetries = async (requestId) => {
        for (let attempt = 0; attempt < 6; attempt++) {
          try {
            if (await verifySavedEnquiry(requestId)) {
              return true;
            }
          } catch (error) {
            console.warn("Enquiry confirmation:", error);
          }

          if (attempt < 5) {
            await new Promise((resolve) => {
              setTimeout(resolve, 1500);
            });
          }
        }

        return false;
      };
      /* Backend Confirmation Ended */

      /* Form Validation Started */
      const validateForm = () => {
        phoneInput.setCustomValidity("");
        nameInput.setCustomValidity("");

        if (nameInput.value.trim().length < 2) {
          nameInput.setCustomValidity("Please enter your full name.");
        }

        const phoneError = validatePhone(phoneInput.value);

        if (phoneError) {
          phoneInput.setCustomValidity(phoneError);
        }

        if (!quoteForm.reportValidity()) {
          showStatus(
            phoneError || "Please check the required form fields.",
            "error",
          );
          return false;
        }

        return true;
      };

      quoteForm.addEventListener("input", (event) => {
        if (submitting) return;

        if (event.target === nameInput) {
          nameInput.setCustomValidity("");
        }

        if (event.target === phoneInput) {
          phoneInput.setCustomValidity("");
        }

        if (!pendingRequest) {
          showStatus("");
        }
      });

      quoteForm.addEventListener("change", () => {
        if (!submitting && !pendingRequest) {
          showStatus("");
        }
      });
      /* Form Validation Ended */

      /* Form Submission Started */
      quoteForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (submitting) return;
        if (!validateForm()) return;

        const formData = new FormData(quoteForm);

        const payload = {
          name: String(formData.get("name") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          phone: String(formData.get("phone") || "").trim(),
          service: String(formData.get("service") || "").trim(),
          message: String(formData.get("message") || "").trim(),
        };

        const payloadSignature = JSON.stringify(payload);

        if (pendingRequest && pendingRequest.signature !== payloadSignature) {
          pendingRequest = null;
        }

        if (!pendingRequest) {
          if (!window.crypto || !crypto.randomUUID) {
            showStatus(
              "Secure request identification is unavailable. Please use a supported browser.",
              "error",
            );
            return;
          }

          pendingRequest = {
            id: crypto.randomUUID(),
            signature: payloadSignature,
            posted: false,
          };
        }

        const request = pendingRequest;
        payload.requestId = request.id;

        setSubmitting(true);
        showStatus("Submitting your enquiry, please wait...", "loading");

        try {
          if (!request.posted) {
            // Mark as attempted before sending to avoid unsafe duplicate POSTs.
            request.posted = true;

            await fetch(SCRIPT_URL, {
              method: "POST",
              mode: "no-cors",
              body: new URLSearchParams(payload),
            });
          }

          const saved = await checkSavedWithRetries(request.id);

          if (!saved) {
            showStatus(
              "Your enquiry status could not be confirmed. Please check the Data worksheet using your request reference before submitting again. Request ID: " +
                request.id,
              "error",
            );
            return;
          }

          showSuccess();
        } catch (error) {
          console.error("Security quote submission:", error);

          // A network error does not prove the backend failed to save.
          const saved = await checkSavedWithRetries(request.id);

          if (saved) {
            showSuccess();
          } else {
            showStatus(
              "Your enquiry status could not be confirmed. Please check the Data worksheet before retrying. Request ID: " +
                request.id,
              "error",
            );
          }
        } finally {
          setSubmitting(false);
        }
      });
      /* Form Submission Ended */
    }
  }
  /* Quote Form Foundation Ended */
});

/* ==================================================
   SAFEGUARD SECURITY - LANDING PAGE JS ENDED
================================================== */
