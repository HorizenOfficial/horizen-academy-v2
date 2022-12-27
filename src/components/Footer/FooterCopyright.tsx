import React from "react"
import { IFooterConfig } from "./types"

interface FooterCopyrightProps {
    data: IFooterConfig["copyright"]
}

const FooterCopyright: React.FC<FooterCopyrightProps> = ({ data }) => {
    return (
        <div className="flex items-center flex-col mt-2 sm:mt-24 text-center">
            <span className="text-[#a9adba]">{data.text}</span>
            <span className="space-x-2">
                <a href={data.legal.url} className="text-links">
                    {data.legal.title}
                </a>
                <span className="text-[#a9adba]">|</span>
                <a href={data.privacyPolicy.url} className="text-links">
                    {data.privacyPolicy.title}
                </a>
            </span>
        </div>
    )
}

export default FooterCopyright
