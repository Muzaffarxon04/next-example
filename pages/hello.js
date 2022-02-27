import React, {useState, useEffect} from "react"
import Image from "next/image";

export default function Home() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users") 
        .then((response) => response.json())
        .then((data) => {
            setLoading(false)
            setUsers(data)
        })
    },[])
    return(<>
    <h1>Api page</h1>

    {loading ? (
        <p>loading data...</p>
    ) : (
        <ul>
            {users.map(e => (
                <li key={e.id}>
                    {/* <Image src={e.avatar} width={200} height={200}/> */}
                    <h2>{e.name}</h2></li>
            ))}
        </ul>
    )}
    </>)
}