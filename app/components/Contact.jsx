import React from "react";
import styles from "../styles/Contact.module.css";
import Contactform from "./Contactform";
import Link from "next/link";
import {
  BsGithub,
  BsEnvelopeAtFill,
  BsLinkedin,
  BsArrowRight,
} from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

function selectIcon(iconName) {
  return iconName == "Gmail" ? (
    <BsEnvelopeAtFill />
  ) : iconName == "Github" ? (
    <BsGithub />
  ) : iconName == "LinkedIn" ? (
    <BsLinkedin />
  ) : (
    <FaSquareXTwitter />
  );
}

export default function Contact({ darkMode }) {
  // const contactInfo = [
  //   {
  //     title: "Gmail",
  //     link: "mailto:talktotimothy101@gmail.com?body=Hey%2C%20I%20saw%20your%20portfolio%20online%2C%20and%20I'd%20like%20to..."
  //   },
  //   {
  //     title: "Github",
  //     link: "https://github.com/Topman-14"
  //   },
  //   {
  //     title: "LinkedIn",
  //     link: "https://linkedin.com/in/tope-akinkuade"
  //   },
  //   {
  //     title: "Twitter",
  //     link: "https://twitter.com/Topman_14"
  //   }
  // ]
  return (
    <section
      className="wrapper"
      style={darkMode ? { color: "#e1e1e1" } : { color: "#333" }}
      id="contact"
    >
    <h3>Contact Me</h3>
    <p className={styles.ptag}>Get In Touch</p>
      <div className={styles.formContainer}>
        <div className={styles.formText}>
          <Contactform isDarkMode={darkMode} />
        </div>
        <div className={styles.imgBox}>
          <Image
            src={"/images/code2.jpg"}
            height={300}
            width={400}
            priority={true}
            alt="pawpaw business meme"
          />
          
        </div>
      </div>
    </section>
  );
}
