import Link from "next/link"
import {getPostBySlug} from "@/lib/mdx"

export async function generateMetadata({params}) {
    const {meta} = await getPostBySlug(params.id)
    return {title: meta.title}
}


export default async ({params}) => {
    console.log(params.id)
    console.log("oijoijioj")
    const {meta,content} = await getPostBySlug(params.id)
    return <>
        <Link href="/blog">Revenir à tous les articles</Link>
        <h1>{meta.title}</h1>
        {content}
    </>
}
