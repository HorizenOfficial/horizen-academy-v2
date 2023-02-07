import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import {
    HomepageAllThingsHorizen,
    HomepageHero,
} from "@site/src/components/pages/homepage"
import { HomepagePopularTopics } from "../components/pages/homepage/HomepagePopularTopics"

const Home = () => {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHero />
            <main>
                <HomepageAllThingsHorizen />
                <HomepagePopularTopics />
            </main>
        </Layout>
    )
}

export default Home
