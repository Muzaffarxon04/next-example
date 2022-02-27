import Link from 'next/link';
import { useRouter } from 'next/router';
import Home from '../../index';

function Post() {
    
    const router = useRouter()
    
const {id} = router.query

    return(<>
    <Home/>

    <h1>Post : {id}</h1>
    <ul>
        <li>
            <Link href="/post/[id]/[blog]" as={`/post/${id}/1`}>
            <a>Blog - {id}</a>
            </Link>
        </li>
        <li>
            <Link href="/post/[id]/[blog]" as={`/post/${id}/2`}>
            <a>Blog - {id}</a>
            </Link>
        </li>
        <li>
            <Link href="/post/[id]/[blog]" as={`/post/${id}/3`}>
            <a>Blog - {id}</a>
            </Link>
        </li>
    </ul>
    </>)
}

export default Post;