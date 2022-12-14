import { IconSearch } from '@tabler/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../constants/fungsi.js'
import data from './../../../constants/data.js'

const CariUsaha = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(search)
  }
  return (
    <div className='my-2 p-4 rounded-xl w-full'>
      <div className='flex flex-1 justify-between'>
        <h2 className='font-medium text-2xl w-full'>
          Cari usaha untuk didanani
        </h2>
        <div className='w-full'>
          <form action='#' onSubmit={handleSearch} className='flex gap-4'>
            <input
              value={search}
              type='text'
              placeholder='Masukkan kata pencarian'
              onChange={(e) => setSearch(e.target.value)}
              className='p-2 w-full text-xs placeholder:text-xs'
            />
            <button
              type='submit'
              className='flex justify-between items-center gap-3 bg-[#5DD95D] p-2 rounded-md'
            >
              <IconSearch size={18} /> <p>Search</p>
            </button>
          </form>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8 my-6'>
        {data.umkms.map((umkm) => (
          <Link
            to={`/investor/beri-pendanaan/${umkm.id}`}
            className='flex flex-col bg-white'
            key={umkm.id}
          >
            <img
              src={`http://127.0.0.1:5173/assets/${umkm.gambar}`}
              alt={umkm.gambar}
            />
            <div className='p-4  '>
              <h3 className='text-xl font-medium'>{umkm.judul}</h3>
              <p className='text-base font-light'>{umkm.pemilik}</p>

              <h4 className='mt-4'>Total kebutuhan dana :</h4>
              <p>{toRupiah(umkm.totalKebutuhanDana)}</p>

              <div className='mt-4 bg-slate-600 h-3 relative'>
                <div
                  className='absolute top-0 left-0 h-full bg-green-500'
                  style={{
                    width:
                      (umkm.terkumpul / umkm.totalKebutuhanDana) * 100 + '%',
                  }}
                ></div>
              </div>
              <p>
                {((umkm.terkumpul / umkm.totalKebutuhanDana) * 100).toFixed(0) +
                  '%'}{' '}
                Terkumpul
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CariUsaha
