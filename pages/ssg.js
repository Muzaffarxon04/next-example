export async function getServerSideProps() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())



    return {
        props: {
            character: result
        }
    }
}



export default function Character({ character }) {
    console.log(character);
    return (
        <>
            {character.map(e =>(
                <div key={e.id}>
                    <h2>{e.name}</h2>
                    <h3>{e.username}</h3>
                </div>
    ))}

        </>
    )
}