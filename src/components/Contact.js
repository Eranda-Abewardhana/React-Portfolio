import React from 'react';

function Contact() {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1>Contact Me</h1>
                        <p><i className="fas fa-paper-plane"></i> ErandaSathsara@gmail.com</p>
                        <p><i className="fas fa-phone"></i> 0764874820</p>
                        <div className="social-icon">
                            <a href="https://www.facebook.com/erandasathsara.abewardhana/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/eranda-abewardhana-6a71bb199/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/__xexndx____/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/Eranda_Sathsara" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://github.com/erandasathsara" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                        <a href="Cv/Eranda%20Abewardhana-cv.pdf.pdf" download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" />
                            <input type="email" name="Email" placeholder="Your Email" />
                            <textarea type="massage" rows="6" name="Massage" placeholder="Massage"></textarea>
                            <button className="btn btn2" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2023 <span>Eranda Sathsara Abewardhana</span></p>
            </div>
        </div>
    );
}

export default Contact;
