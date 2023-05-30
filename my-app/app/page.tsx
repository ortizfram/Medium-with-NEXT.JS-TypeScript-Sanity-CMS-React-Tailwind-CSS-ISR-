import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />

      <div className='flex border-y border-zinc-600 py-8 mt-3'>
        <div className='px-10 space-y-5 text-zinc-600'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline'>BuonaVibra</span> es un lugar para conectar con tu yo elevado</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi, ad harum esse incidunt exercitationem pariatur iure? Nemo, labore sed.</h2>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}
