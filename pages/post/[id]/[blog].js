import Home from "../../index"
import { useRouter } from "next/router"

function Blog() {

    const router = useRouter()

    const {id, blog} = router.query

    return(<>
    <div>
        <Home/>

        <h1>Post: {id}</h1>
        <h1>Blog: {blog}</h1>
        hello
    </div>
    </>)
}

export default Blog