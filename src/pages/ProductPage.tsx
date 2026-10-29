import Footer from '#components/Footer'
import { Input, Checkbox } from '@mantine/core'
import { Search, ChevronUp, BookText } from 'lucide-react'
import React from 'react'

const ProductPage = () => {
  return (
    <div className="flex bg-bg gap-4 flex-col py-7 px-5 md:py-16 md:px-30">
      <h1>Koleksi Video Pembelajaran Unggulan</h1>
      <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      <div className='flex gap-8 '>
        <aside className='flex flex-col border border-gray-400/50 rounded-lg gap-3 p-4 w-1/3 min-h-screen'>
          <div className='flex justify-between'>
            <label className='font-semibold text-md font-poppins text-gray-600'>Filter</label>
            <button className='text-red-500 font-poppins'>Reset</button>
          </div>
          <div className='flex flex-col gap-3 border rounded-lg py-2 px-3 border-gray-400/50 text-primary'>
            <div className='flex justify-between items-center'>
              <span className='flex items-center gap-3'>
                <BookText size={20} />
                <h4 className='font-semibold'>Bidang Studi</h4>
              </span>
              <span><ChevronUp size={15}/></span>
            </div>
            
            <Checkbox color='green' label="Pemasaran" />
            <Checkbox color='green' label="Digital & Teknologi" />
            <Checkbox color='green' label="Pengembangan Diri" />
            <Checkbox color='green' label="Bisnis Manajemen" />
          </div>
        </aside>
        <section className='border w-full min-h-screen'>
          <div>
            <Input type='text' size='xs' rightSection={<Search size={15} />}></Input>
          </div>

          <div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage