import type Image from "next/image"
import {ReactNode} from "react"

export interface CardTemplateProps {
    header?: ReactNode
    image: string
    alt: string
    footer?: ReactNode
    button?: ReactNode
}