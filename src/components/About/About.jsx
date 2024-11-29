import styles from './style.module.scss'

export default function About() {
return(
<main className={styles.AboutMain}>
<div className={styles.text}>
    <div className={styles.line1}> <span className={styles.fields}>i'm Hitesh</span>, a designer and game enthusiast, <span>GRADUATING</span> in two years <span>(</span>2<span>k</span>26<span>)</span>.</div>
    <div className={styles.line2}>The user-centered approach helps me create engaging and intuitive digital experiences.</div>
    <div className={styles.line3}>I've been able to explore a wide range of fields, improving my ability to design <span className={styles.tailor}>tailor-made</span>  solutions.</div>
    <div className={styles.line4}>Apart from design, games has a special place in my life.</div>
    <div className={styles.line5}>In this site I share my designes and explore the harmony between art and digital.</div>
    <div className={styles.line6}>Welcome to my <span>world</span> of melodious and interactive experiences.</div>
</div>
</main>
);
}
