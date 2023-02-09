import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import {
    HomepageHero,
    HomepageBigCardsSection,
    HomepageSmallCardsSection,
    HomepageMixedSizeCardsSection,
} from "@site/src/components/pages/homepage"

const Home = () => {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHero />
            <main>
                <HomepageBigCardsSection />
                <HomepageSmallCardsSection />
                <HomepageMixedSizeCardsSection />
            </main>
        </Layout>
    )
}

export default Home
