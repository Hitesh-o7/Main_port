"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./style.module.scss";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null); // Reference to the About section

  useEffect(() => {
    const lines = aboutRef.current.querySelectorAll(`.${styles.text} div`);

    // Create a scroll trigger animation
    gsap.fromTo(
      lines,
      {
        opacity: 0,
        y: 50, // Start from below
      },
      {
        opacity: 1,
        y: 0, // End at normal position
        duration: 1,
        stagger: 0.2, // Stagger animation for each line
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current, // The section to track
          start: "top 80%", // Start the animation when the top of the section is 80% from the top of the viewport
          end: "bottom 70%", // End when the section reaches 20% from the top
          scrub: 0.5, // Smooth scrubbing effect as you scroll
        },
      }
    );
  }, []);

  return (
    <main ref={aboutRef} className={styles.AboutMain}>
      <div className={styles.text}>
        <div className={styles.line1}>
          <span className={styles.fields}>I&#39;m Hitesh</span>, a designer and game enthusiast, <span>GRADUATING</span> in two years <span>(</span>2<span>k</span>26<span>)</span>.
        </div>
        <div className={styles.line2}>
          The user-centered approach helps me create engaging and intuitive digital experiences.
        </div>
        <div className={styles.line3}>
          I&#39;ve been able to explore a wide range of fields, improving my ability to design <span className={styles.tailor}>tailor-made</span> solutions.
        </div>
        <div className={styles.line4}>
          Apart from design, games have a special place in my life.
        </div>
        <div className={styles.line5}>
          In this site, I share my designs and explore the harmony between art and digital.
        </div>
        <div className={styles.line6}>
          Welcome to my <span>world</span> of melodious and interactive experiences.
        </div>
      </div>
    </main>
  );
}
