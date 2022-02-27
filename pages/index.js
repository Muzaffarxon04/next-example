// import Head from 'next/head'
import style from '../styles/Test.module.css'
import styless from '../styles/Design.module.scss'
import { getSession, signIn, signOut} from 'next-auth/client'
import Image from 'next/image';

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

return {
  props: {
    session,
  },
};
};

export default function Home({session}) {
  return (
    <div className={style.container}>
      {/* <Head>
        <title>Next Muzaffarxon</title>
        <meta name='Muzaffarxon' content='this test'/>

      </Head> */}

 
    
  <h1>Hello World Firs Next.js Project</h1>
  <div className={styless.radue}>
  {session ? (
    <button onClick={() => signOut()}>Akkauntan Chiqish</button>
  ) : (
    <button onClick={() => signIn()}>Akkauntga kirish</button>
    
  )}

  {session && (
    <>
    <h1>Kirilgan: <span>{session.user.email}</span></h1>
    <h3>User Name: {session.user.name}</h3>
    <Image src={session.user.image} alt={session.user.name} />

    </>
  )}
  
    </div>
    </div>

    
  )
}
