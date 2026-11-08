// Small progressive enhancement for the cookie notice and demo contact form.
document.addEventListener("DOMContentLoaded", function () {
    var cookieNotice = document.getElementById("cookie-notice");
    var cookieClose = document.getElementById("cookie-close");
    if (cookieNotice && cookieClose) {
        cookieClose.addEventListener("click", function () {
            cookieNotice.hidden = true;
        });
    }

    var contactForm = document.getElementById("contact-form");
    var formStatus = document.getElementById("form-status");
    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (contactForm.checkValidity()) {
                formStatus.textContent = "Thank you! Your message has been checked in this demonstration. No email has been sent because this static site has no mail server.";
                contactForm.reset();
            } else {
                formStatus.textContent = "Please complete the required fields and enter a valid email address.";
            }
        });
    }
});
