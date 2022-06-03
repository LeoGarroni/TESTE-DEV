import Head from 'next/head'
import Form from '../components/Form'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Desafio CloudOpss</title>
      </Head>
      <Header />

      <main> 
          <Form />
      </main>

    </>
  )
}
