import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter()
useEffect(() => {
    setTimeout(() => {
        router.push('/')
    }, 3000)
})

    return(<>
    <h1>404</h1>
    
    <Link href="/">Go back Home</Link>
    </>)
}

export default NotFound;