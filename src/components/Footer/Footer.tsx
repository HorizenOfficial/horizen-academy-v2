import React from "react"
import clsx from "clsx"
import useFooterConfig from "./useFooterConfig"
import FooterCopyright from "./FooterCopyright"
import FooterLinks from "./FooterLinks"
import FooterLogo from "./FooterLogo"
import styles from "./Footer.module.css"

const Footer = () => {
    const config = useFooterConfig()
    return (
        <footer className={styles.footer}>
            <div className={clsx("container", styles.footer__container)}>
                <div className={styles.footer__top}>
                    <div className={styles.footer__logo}>
                        <FooterLogo data={config.logo} />
                    </div>
                    <div className={styles.footer__links}>
                        <FooterLinks data={config.links} />
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <FooterCopyright data={config.copyright} />
                </div>
            </div>
        </footer>
    )
}
export default Footer
