emailjs.init("jEWhkyu4ZYQhU-GZ6");

const form = document.getElementById("contact-form");
const button = form.querySelector("button");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Loading state
    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.sendForm(
        "service_qhma5sx",
        "template_30l6u0b",
        this
    )
        .then(() => {
            button.textContent = "✓ Message Sent";
            form.reset();

            setTimeout(() => {
                button.disabled = false;
                button.textContent = "Send Message";
            }, 2000);
        })
        .catch((error) => {
            console.error(error);

            button.textContent = "Try Again";

            setTimeout(() => {
                button.disabled = false;
                button.textContent = "Send Message";
            }, 2000);
        });
        
});
