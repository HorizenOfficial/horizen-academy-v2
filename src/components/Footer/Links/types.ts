interface IRegularLink {
    title: string
    url: string
    openNewTab?: boolean
}

interface IImageLink extends IRegularLink {
    imageUrl: string
}

type TLinkGroup = {
    title: string
} & (
    | {
          type: "regular"
          items: IRegularLink[]
      }
    | {
          type: "social"
          items: IImageLink[]
      }
)

interface ISocialGroup {
    title: string
    items: IImageLink[]
}

interface IRegularGroup {
    title: string
    items: IRegularLink[]
}

export type {
    IRegularLink,
    IImageLink,
    TLinkGroup,
    ISocialGroup,
    IRegularGroup,
}
