import React from 'react'
import Link from "next/link"
import {HeadersDoubleIcons} from "./(nakedComponentParadigm)/components/Headers"

const $datas = {
    links: [
        ["V0 tests templates (Yanis)", "templates"]
        , ["BoltnewTest_Gaming 0 (Yanis)", "yanis0"]
        , ["BoltnewTest_Gaming 1 (Yanis)", "yanis1"]
        , ["Old Worksout (Cyr)", "workouts"]
        , ["BoltnewTest_Gaming 0 (Cyr)", "cyr0"]
    ]
}

export default function Home() {
    return (
        <body>
                <HeadersDoubleIcons $datas={$datas} />
                {/* <Link href={`/templates`} passHref>
                    Yanis
                </Link>
                <Link href={`/yanis0`} passHref>
                    Yanis Game Loby Templates I
                </Link>
                <Link href={`/yanis1`} passHref>
                    Yanis Game Loby Templates II
                </Link>
                <Link href={`/workouts`} passHref>
                    Cyrille
                </Link>
                <Link href={`/cyr0`} passHref>
                    Cyrille  Game Loby Templates I
                </Link> */}
            
        </body>
    )
}
