import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

function Hero({ darkMode }) {
  return (
    <section className={styles.main}>
      <div className={styles.heroText}>
        <p
          style={
            darkMode
              ? { color: "#6c6667" }
              : { color: "rgb(4 94 117)" }
          }
        >
          Hi 👋, my name is
        </p>
        <h2
          className={styles.name}
          style={darkMode ? { color: "#f4f4f5" } : { color: "#333" }}
        >
          David Akintade
        </h2>
        {/* <h2 className={styles.descBig}>I build Web Applications</h2> */}
        <p
          className={styles.descLittle}
          style={darkMode ? { color: "#93939b" } : { color: "#222" }}
        >
          I'm a Software Engineer
          <br />
          I translate ideas into pixel-perfect experiences, bridging the gap between user delight and business goals.
          🚀
        </p>
        <Link href={"/resume.pdf"} target="_blank" rel="noreferrer">
          <Button isFilled={true} text="View Resume" isDarkMode={darkMode} />
        </Link>
      </div>
      {/* <div>
        <div className={styles.heroImg}>
          <Image
            src={"/images/me.png"}
            height={200}
            width={300}
            alt="An image of me - Topman"
            priority={true}
          />
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
