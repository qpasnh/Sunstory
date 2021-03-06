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

interface GalleryItem extends Dictionary {
    author: string,
    date: string,
    desc: string,
    loc: string,
    bg: string,
    width?: number
}

interface LightboxItem extends Dictionary {
    title: string,
    description: string,
    src: string
}

interface ViewObject {
    percentCenter: number,
    percentInView: number,
    percentTop: number,
    scrollPercent: 0,
    scrollValue: 0,
    target: ViewObjectTarget,
    type: "enter" | "exit" | "progress"
}

interface ViewObjectTarget {
    classes: Dictionary,
    element: HTMLElement,
    percent: number,
    rect: DOMRect
}

interface TimelineObject {
    year: number,
    events: Array<TimelineEvents>
}

interface TimelineEvents {
    name?: string,
    title?: string,
    text?: string,
}

interface NodeTreeObject {
    nodeName: string,
    parentName: string,
    children: Array<boolean | NodeTreeObject>,
    content: string
}

interface Catalogue {
    name: string,
    children: Array<Catalogue>
}

interface LinkObject extends Dictionary {
    href: string,
    img: string
}

interface SwiperSlideInstance {
    slideNext: () => void,
    slidePrev: () => void
}

interface EcosystemInfoItem {
    icon: string,
    text: string
}