import '../index.css'

const Contact = () => {
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
