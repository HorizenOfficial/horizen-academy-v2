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
            description="Welcome to Horizen's educational hub on blockchain technology where you'll find guides on topics of decentralized ledger technology, cryptocurrency and Web3."
        >
            <Head>
                <meta
                    name="image"
                    content="https://www.horizen.io/academy/img/academy-landing/horizen-academy-meta.jpg"
                />
                <meta
                    name="og:image"
                    content="https://www.horizen.io/academy/img/academy-landing/horizen-academy-meta.jpg"
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
