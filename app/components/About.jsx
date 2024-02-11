import React from 'react'
import styles from '../styles/About.module.css'
import Tile from './Tile'
import { ingredients } from '../data'
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { BsGithub, BsLinkedin, BsFillEnvelopeAtFill } from "react-icons/bs";

export default function About ({darkMode}) {
  return (
    <section className='wrapper' style={darkMode? {color:"#e1e1e1"} : {color: "#333"}} id="about">
        <h3>About Me✌️<span style={darkMode? {color: "#444"} : {color:"#c5c5c5"}}>{"() {"}</span></h3>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutText}>
            <p>
              Hey World!, I'm David Akintade, a Software Engineer based in Lagos, Nigeria. My love for coding started early, tinkering with basic programming languages in high school. This passion led me to pursue a degree in Computer Science where I have honed my skills in software development best practices and various technologies. <br />
              <span></span>
              I now have about 2 years plus of professional experience where i have worked in various companies, collaborated and built various projects coupled with my background in computer science, where i understand lots of concepts like Data Structures and Algorithms,
              Object Oriented Programming, Software design, Operating Systems, Human Computer Interaction and more,
              I also have mastery and experience using varoious languages and technologies like Python, Javascript, Typescript, ReactJS, NextJS, NodeJs, MongoDB,
              MySQL and more

            </p>
            <div className={styles.links}>
              <Link href={"https://github.com/Tad-z"} target='_blank'>
                <BsGithub />
              </Link>
              <Link href={"https://www.linkedin.com/in/david-akintade-228374222/"} target='_blank'>
                <BsLinkedin />
              </Link>
              <Link href={"mailto:david.akintade1000@gmail.com?body=Hey%2C%20I%20saw%20your%20portfolio%20online%2C%20and%20I'd%20like%20to..."}>
                <BsFillEnvelopeAtFill />
              </Link>
            </div>
          </div>
          <div className={styles.aboutText}>
            <h4 className={styles.subHeading}>My Ingredients 👨‍🍳</h4>
            <div className='flex flex-wrap gap-3 justify-end'>
              {ingredients.map(item => <Tile isDarkMode={darkMode} item={item} key={uuidv4()} />) } 
            </div>
          </div>
        </div>
        <h3 style={darkMode? {color: "#444"} : {color:"#c5c5c5"}} className="bottom_curly_brace">{"}"}</h3>
    </section>
  )
}
