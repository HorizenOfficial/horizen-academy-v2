import React from "react"
import { IFooterConfig } from "./types"

interface FooterLogoProps {
    data: IFooterConfig["logo"]
}

const FooterLogo: React.FC<FooterLogoProps> = ({ data }) => {
    return (
        <a
            href={data.url}
            className="h-[58px] w-[169px] flex items-center justify-center"
        >
            <img src={data.imageUrl} alt={data.title} />
        </a>
    )
}

export default FooterLogo
