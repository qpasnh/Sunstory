type Direction = "top" | "bottom" | "left" | "right"

interface BlogInstance {
    title: string,
    permalink: string,
    cid: string,
    text: string,
    created: string,
    bg: string
}

interface Dictionary {
    [prop: string]: any
}

interface GalleryItem {
    author: string,
    uuid: string,
    date: string,
    desc: string,
    loc: string,
    bg: string,
    width?: number
}