import Link from "next/link"
export default function about(){
    return(
        <h1>About page <Link href="/learn"><a>Home return</a></Link></h1>
    )
}