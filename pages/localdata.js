import {data} from '../data'

export const getStaticProps = async () => {
    return{
        props: {
            dataCollection: data
        }
    }
}

export default function Data({dataCollection}) {
    return(<>
    <h1>Local Data</h1>

    {dataCollection.map(user => (
        <>
            <h2>First Name: {user.firsName}</h2>
            <h2>Last Name: {user.lastName}</h2>
            <h4>Age: {user.age}</h4>
            <h4>Job: {user.job}</h4>
           
            </>
    ))}

    </>)
}