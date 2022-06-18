import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Description } from '../components/Description'
import { FormCalculator } from '../components/FormCalculator'
import { Header } from '../components/Header'
import { Range } from '../components/Range'




const Home: NextPage = () => {
  const [resCalc, setResCalc] = useState<number>(0)

  return (
    <>
      <Head>
        <title>Health Overview</title>
        <meta name="description" content="El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='container px-5 mx-auto min-h-[92vh]  grid md:grid-cols-2  grid-cols-1'>
        <section className='self-center min-h-[92vh]'>
          <Description />
          <FormCalculator setResCalc={setResCalc} />
        </section>
        <section className='self-center'>
          <Range resCalc={resCalc} />
        </section>

      </main>

    </>
  )
}

export default Home
