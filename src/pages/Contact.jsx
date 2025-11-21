import '../index.css'

const Contact = () => {
    document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("form-message");

    // Create error <span> elements under each input
    const nameError = document.createElement("span");
    const emailError = document.createElement("span");
    const messageError = document.createElement("span");

    nameError.className = "error-text";
    emailError.className = "error-text";
    messageError.className = "error-text";

    nameInput.insertAdjacentElement("afterend", nameError);
    emailInput.insertAdjacentElement("afterend", emailError);
    messageInput.insertAdjacentElement("afterend", messageError);

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload

        // Reset messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formMessage.textContent = "";
        formMessage.style.color = "";

        let isValid = true;

        // --- Name Validation ---
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        // --- Email Validation ---
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Invalid email address.";
            isValid = false;
        }

        // --- Message Validation ---
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        }

        // If form has errors
        if (!isValid) {
            formMessage.textContent = "Please correct the errors above.";
            formMessage.style.color = "red";
            return;
        }

        // If everything is valid
        formMessage.textContent = "Your message has been sent successfully!";
        formMessage.style.color = "green";

        // Optional: Clear fields
        form.reset();
    });
});

    return (
        <>
            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="contact-form">
                        <h1>Send Us A Message</h1>
                        <form id="contact-form">
                            <input type="text" placeholder='Enter Your Name' id="name" />
                            <input type="email" id='email' placeholder='Enter Your Email' />
                            <textarea rows="5" id='message' placeholder='Enter Your Message'></textarea>
                            <button type='submit'>Send Message</button>
                            <p id="form-message"></p>
                        </form>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p><i className="fas fa-phone"></i> +212 600 123 456</p>
                        <p><i className="fas fa-envelope"></i> Cineverse@gmail.com</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Contact
