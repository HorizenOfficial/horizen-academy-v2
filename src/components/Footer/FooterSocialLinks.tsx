import React from "react"
import { IFooterConfig, IFooterImageLink } from "./types"

interface FooterSocialLinkProps {
    data: IFooterImageLink
}

const FooterSocialLink: React.FC<FooterSocialLinkProps> = ({ data }) => {
    return (
        <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="h-[35px] w-[35px] bg-horizen-blue-darker hover:bg-horizen-blue transition-colors rounded-full grid place-items-center"
        >
            <img src={data.imageUrl} alt={data.title} />
        </a>
    )
}

interface FooterSocialLinksProps {
    data: IFooterConfig["socialLinks"]
}

const FooterSocialLinks: React.FC<FooterSocialLinksProps> = ({ data }) => {
    return (
        <div>
            <span className="font-bold text-xl text-white capitalize mb-3 block">
                {data.title}
            </span>
            <div className="grid grid-cols-5 gap-y-4 justify-items-center md:justify-items-start">
                {data.items.map((item, index) => (
                    <FooterSocialLink
                        // eslint-disable-next-line react/no-array-index-key
                        key={`footer-social-link-${index}`}
                        data={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default FooterSocialLinks
