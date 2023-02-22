import React from "react"
import Head from "@docusaurus/Head"
import Layout from "@theme/Layout"
import {
    HomepageHero,
    HomepageBigCardsSection,
    HomepageSmallCardsSection,
    HomepageMixedSizeCardsSection,
} from "@site/src/components/pages/homepage"

const Home = () => {
    return (
        <Layout
            title=""
            description="The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. Our platform ensures everyone can learn about these topics regardless of their comfort level and experience and is always free to use."
        >
            <Head>
                <meta
                    name="image"
                    content="https://horizen.io/academy/img/academy-landing/horizen-academy-meta.jpg"
                />
                <meta
                    name="og:image"
                    content="https://horizen.io/academy/img/academy-landing/horizen-academy-meta.jpg"
                />
            </Head>
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
