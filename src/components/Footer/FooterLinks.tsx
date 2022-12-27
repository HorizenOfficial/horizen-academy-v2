import React from "react"
import { IFooterLinks } from "./types"

interface FooterLinksProps {
    data: IFooterLinks
}

const FooterLinks: React.FC<FooterLinksProps> = ({ data }) => {
    return (
        <div>
            <span className="font-bold text-xl text-white capitalize mb-3 block">
                {data.title}
            </span>
            <ul>
                {data.items.map((item) => (
                    <li key={`footer-link-${item.title}`}>
                        <a
                            className="text-[#7A7E8C] hover:text-white block mb-2"
                            href={item.url}
                            target={item.openNewTab ? "_blank" : ""}
                            rel="noopener noreferrer"
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinks
