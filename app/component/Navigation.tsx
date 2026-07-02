import Link from "next/link";

export default function Navigation(){
    return (
       <header>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/clientComp">clientComp</Link></li>
                <li><Link href="/severComp">severcomp</Link></li>
                <li><Link href="/service">Contact</Link></li>
            </ul>   
        </nav>
       </header>
    )
}