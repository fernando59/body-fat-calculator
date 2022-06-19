import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { FormCalculator } from '../components/FormCalculator'
import { Header } from '../components/Header'
import { Range } from '../components/Range'
import { TitleDescription } from '../components/TitleDescription'




const Home: NextPage = () => {
  const [resCalc, setResCalc] = useState<number>(0)

  return (
    <>
    <div className='h-screen scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-900'>

      <Head>
        <title>Health Overview</title>
        <meta name="description" content="El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='container px-5 mx-auto min-h-[92vh]  grid md:grid-cols-2  grid-cols-1'>
        <section className='self-center min-h-[92vh]'>
          <TitleDescription />
          <FormCalculator setResCalc={setResCalc} />
        </section>
        <section className='self-center'>
          <Range resCalc={resCalc} />
        </section>

      </main>

    </div>
    </>
  )
}

export default Home
