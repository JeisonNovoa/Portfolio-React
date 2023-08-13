import React from "react";
import "animate.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import "../App.css";
import { FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const handleCopy = () => {
    Swal.fire({
      icon: "success",
      title: "Copied to Clipboard!",
      text: "Phone number has been copied to the clipboard.",
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
      },
    });
  };

  return (
    <section id="contact" className="contact">
      <Container>
        <div className="secText text-center">
          <h2>Ways To Contact Me</h2>
          <p>
            In this section, you will find multiple options to contact me
            regarding job opportunities and potential collaborations. I am
            excited to establish connections with professionals and companies in
            the field, and I am open to exploring new opportunities. You can use
            the links to my social media profiles to learn more about my
            experience and skills. Additionally, you will find my direct contact
            number for quick and personalized communication.
          </p>
        </div>
        <div className="content text-center">
          <a href="mailto:jeisonnovoa7@gmail.com">jeisonnovoa7@gmail.com</a>
          <CopyToClipboard text="+57 3243956187" onCopy={handleCopy}>
            <a href="#contact">
              <FaPhone className="icon" />
              +57 3243956187
            </a>
          </CopyToClipboard>
          <a
            href="https://www.linkedin.com/in/jeison-novoa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
            Linkedin
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=3243956187&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" />
            whatsapp
          </a>
        </div>
        <div className="center text-center">
          <p className="copyrights">copyright © 2023. All Right Reserved</p>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
