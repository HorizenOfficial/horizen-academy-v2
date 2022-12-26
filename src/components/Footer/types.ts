interface IFooterLink {
    title: string
    url: string
}

interface IFooterLinks {
    title: string
    items: IFooterLink[]
}

interface IFooterImageLink extends IFooterLink {
    imageUrl: string
}

interface IFooterSocialLinks {
    title: string
    items: IFooterImageLink[]
}

interface IFooterCopyright {
    text: string
    legal: IFooterLink
    privacyPolicy: IFooterLink
}

interface IFooterConfig {
    logo: IFooterImageLink
    // links: IFooterLinks[];
    // socialLinks: IFooterSocialLinks[];
    copyright: IFooterCopyright
}

export type {
    IFooterConfig,
    IFooterLink,
    IFooterLinks,
    IFooterImageLink,
    IFooterSocialLinks,
    IFooterCopyright,
}
