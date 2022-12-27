import {
    IRegularLink,
    IImageLink,
    IRegularGroup,
    ISocialGroup,
} from "./Links/types"

interface IFooterLinks {
    regular: IRegularGroup[]
    social: ISocialGroup
}

interface IFooterCopyright {
    text: string
    legal: IRegularLink
    privacyPolicy: IRegularLink
}

interface IFooterConfig {
    logo: IImageLink
    links: IFooterLinks
    copyright: IFooterCopyright
}

export type { IFooterConfig, IFooterLinks, IFooterCopyright }
