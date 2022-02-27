export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()


    return {
        props: {
            users: data
        }
    }
}



export default function Home({users}) {
    

    return(
        <>
        {users.map((e) => {
            return(
                <div key={e.id}>
<h2>{e.name}</h2>
                </div>
            )
        })}
        </>
    )
}