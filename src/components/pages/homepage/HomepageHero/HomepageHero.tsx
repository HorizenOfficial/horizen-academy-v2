import React from "react"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./HomepageHero.module.css"

const HomepageHero = () => {
    return (
        <header
            className={styles.hero}
            style={{
                backgroundImage: `url('${useBaseUrl(
                    "/assets/pages/homepage/hero-bg.jpg"
                )}')`,
            }}
        >
            <div className="container">
                <img
                    src={useBaseUrl(
                        "/assets/pages/homepage/hero-student-cap.svg"
                    )}
                    alt="student cap"
                    className={styles.hero__icon}
                />
                <h1 className={styles.hero__title}>Horizen Academy</h1>
                <p className={styles.hero__body}>
                    All about blockchain and online privacy.
                    <br />
                    Introduction to Horizen Ecosystem.
                </p>
            </div>
        </header>
    )
}

export default HomepageHero
