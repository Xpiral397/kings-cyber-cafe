import type Image from "next/image"
import {ReactElement, ReactNode} from "react"
import {ElementFlags} from "typescript"

export interface CardTemplateProps {
    header?: ReactNode
    image: string
    alt: string
    footer?: ReactNode
    button?: ReactNode
}

export interface CardProps {
    topic: string
    content: string
    button: string
}

export interface CustomerProps {
    id: string | number
    name: string
    resident: string
    feedbackText: string
    image: ReactElement
}