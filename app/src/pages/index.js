import Head from 'next/head'
import style from '@/styles/main/main.module.css';
import CardDestiny from '@/components/CardDestiny';
import Title from '@/components/Title';
import useDestiny from '@/hooks/useDestiny';
import { useState } from 'react';

export default function Home() {

  const { destinys, destinysNacional, destinysInternacional } = useDestiny();





  return (
    <>
      <Head>
        <title>Válonge - Página inicial</title>
      </Head>
      <main className='py-5'>
        <Title title="Destinos Nacionais" link="/destinys" subTitle="Ver mais" />

        <section className='d-flex justify-content-center gap-3 flex-wrap mt-3 pb-5'>

          {destinysNacional && destinysNacional.map(destiny => (
            <CardDestiny img={destiny.img} cidade={destiny.cidade} id={destiny.id} key={destiny.id} />
          ))}
        </section>

        <Title title="Destinos Internacionais" link="/destinys" subTitle="Ver mais" />
        <section className='d-flex justify-content-center gap-3 flex-wrap mt-3 pb-5'>

          {destinysInternacional && destinysInternacional.map(destiny => (
            <CardDestiny img={destiny.img} cidade={destiny.cidade} id={destiny.id} key={destiny.id} />
          ))}
        </section>
      </main>
    </>
  )
}
