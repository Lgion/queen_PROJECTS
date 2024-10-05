import React from 'react'
import Link from "next/link"

export default function Home() {
    return (
        <body>
                <Link href={`/templates`} passHref>
                    Yanis
                </Link>
                <Link href={`/workouts`} passHref>
                    Cyrille
                </Link>
            
        </body>
    )
}
