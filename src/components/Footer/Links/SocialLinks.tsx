import React from "react"
import { ISocialGroup } from "./types"

interface SocialLinksProps {
    data: ISocialGroup
}

const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {
    return (
        <div>
            <span className="font-bold text-xl text-white capitalize mb-3 block text-center sm:text-left">
                {data.title}
            </span>
            <ul className="grid grid-cols-5 gap-x-4 gap-y-4 justify-items-center sm:justify-items-start">
                {data.items.map((item, index) => (
                    <li key={`footer-social-link-${index}`}>
                        <a
                            href={item.url}
                            target={item.openNewTab ? "_blank" : ""}
                            rel="noopener noreferrer"
                            className="h-[35px] w-[35px] bg-horizen-blue-darker hover:bg-horizen-blue rounded-full grid place-items-center"
                        >
                            <img src={item.imageUrl} alt={item.title} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
