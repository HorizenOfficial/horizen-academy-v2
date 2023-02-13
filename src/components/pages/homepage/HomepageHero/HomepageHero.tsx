import React from "react"
import useBaseUrl from "@docusaurus/useBaseUrl"
import clsx from "clsx"
import styles from "./HomepageHero.module.css"

const HomepageHero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.hero__bg}>
                <picture>
                    <source
                        srcSet={useBaseUrl(
                            "/assets/pages/homepage/Academy-bckg_425x660.jpg"
                        )}
                        media="(max-width: 425px)"
                    />
                    <source
                        srcSet={useBaseUrl(
                            "/assets/pages/homepage/Academy-bckg_768x660.jpg"
                        )}
                        media="(max-width: 768px)"
                    />
                    <source
                        srcSet={useBaseUrl(
                            "/assets/pages/homepage/Academy-bckg_1024x660.jpg"
                        )}
                        media="(max-width: 1024px)"
                    />
                    <source
                        srcSet={useBaseUrl(
                            "/assets/pages/homepage/Academy-bckg_1440x660.jpg"
                        )}
                        media="(max-width: 1440px)"
                    />
                    <img
                        src={useBaseUrl(
                            "/assets/pages/homepage/Academy-bckg_2560x660.jpg"
                        )}
                        alt="hero background"
                    />
                </picture>
            </div>

            <div className={clsx("container", styles.hero__content)}>
                <img
                    src={useBaseUrl(
                        "/assets/pages/homepage/hero-student-cap.svg"
                    )}
                    alt="student cap"
                    className={styles.hero__icon}
                />
                <h1 className={styles.hero__title}>Horizen Academy</h1>
                <p className={styles.hero__body}>
                    Welcome to Horizen's educational hub on blockchain
                    technology where you'll find expertly written guides on
                    topics of decetralized ledger technology, cryptocurrency and
                    the exciting world of Web3.
                    <br />
                    <br />
                    The future is built on Blockchain. The future is built on
                    Horizen.
                </p>
            </div>
        </header>
    )
}

export default HomepageHero
