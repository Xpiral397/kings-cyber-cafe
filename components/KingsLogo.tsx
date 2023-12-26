'use client'
import React from 'react'
import Logo from "@/public/svgs/logo.svg"
import Image from 'next/image'

export default function KingsLogo() {
    return (
        <div>
            <Image src={Logo.src} height={102} width={102} alt='Logo' />
        </div>
    )
}
