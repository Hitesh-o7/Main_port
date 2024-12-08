import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Work() {
    const [bgColor, setBgColor] = useState("");


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBgColor("");
            } else {
                setBgColor("black");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className={styles.Main}>
            <div className={styles.title}>Work of Art</div>
            <div
                className={styles.work_container}
                style={{ backgroundColor: bgColor }}
            >
                <div className={styles.card_wrapper}>
                    <div className={styles.card}>
                        <div className={styles.image_wrapper}>
                            <Image
                                src="/powell.jpg"
                                alt="Work Image 1"
                                className={styles.work_img}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className={styles.title1}><span className={styles.dashed}>Project Name :</span> About Project</div>
                </div>
                <div className={styles.card_wrapper}>
                    <div className={styles.card}>
                        <div className={styles.image_wrapper}>
                            <Image
                                src="/wix.jpg"
                                alt="Work Image 2"
                                className={styles.work_img}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className={styles.title1}><span className={styles.dashed}>Project Name :</span> About Project</div>
                </div>
                <div className={styles.card_wrapper}>
                    <div className={styles.card}>
                        <div className={styles.image_wrapper}>
                            <Image
                                src="/wix.jpg"
                                alt="Work Image 3"
                                className={styles.work_img}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className={styles.title1}><span className={styles.dashed}>Project Name :</span> About Project</div>
                </div>
                <div className={styles.card_wrapper}>
                    <div className={styles.card}>
                        <div className={styles.image_wrapper}>
                            <Image
                                src="/wix.jpg"
                                alt="Work Image 4"
                                className={styles.work_img}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className={styles.title1}><span className={styles.dashed}>Project Name :</span> About Project</div>
                </div>
            </div>
        </main>
    );
}
