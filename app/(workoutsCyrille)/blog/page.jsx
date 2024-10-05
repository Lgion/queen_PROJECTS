import {getAllPostsMeta} from "@/lib/mdx"
import Link from "next/link"

export default async ({children}) => {
    const datas = await getAllPostsMeta()
    return <ul>
        {datas.map(({slug,title},i) => <li key={i}>
            {/* {JSON.stringify(item)} */}
            <Link href={"blog/"+slug}>{title}</Link>
        </li>)}
    </ul>
}
