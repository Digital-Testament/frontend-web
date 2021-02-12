import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div className="flex felx-col justify-center items-center h-screen">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Next.js Project Setup</h1>
      </main>
    </div>
  )
}

export default Home
