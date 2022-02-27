import Link from "next/link";

function Navbar() {
    return(<>
        <div className="navbar">
<ul>
    <Link href="/"><a><h1>Logo</h1></a></Link>
    <li>
    <Link href="/">
        <a>Home</a>
    </Link>
    </li>
    <li>
    <Link href="/about">
        <a>About</a>
    </Link> 
    </li>
    <li>
    </li>
    <li>
    <Link href="/post/blog">
        <a>Post</a>
    </Link>
    </li>
</ul>
    </div>
    </>)
}

export default Navbar;