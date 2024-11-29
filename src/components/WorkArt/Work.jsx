import styles from "./style.module.scss";

export default function Work() {
    return (
        <main className={styles.work_container}>
            <div className={styles.card}>Card 1</div>
            <div className={styles.card}>Card 2</div>
            <div className={styles.card}>Card 3</div>
            <div className={styles.card}>Card 4</div>
        </main>
    );
}
