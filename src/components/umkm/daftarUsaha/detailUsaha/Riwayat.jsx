import { IconEdit, IconTrash } from '@tabler/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import toRupiah from '../../../../constants/fungsi'

const Riwayat = ({ listRiwayat }) => {
  return (
    <div className='mt-8 border-2 border-green-400 bg-white rounded-lg'>
      <h2 className='p-4 text-base font-medium border-b-2 border-b-black'>
        Riwayat
      </h2>

      <div className='p-4 '>
        <div className=''>asd</div>

        <table>
          <thead>
            <tr>
              <th className='w-52 pb-2 text-left'>Tanggal</th>
              <th className='w-52 pb-2 text-center'>Jam</th>
              <th className='w-52 pb-2 text-left'>Judul Pencatatan</th>
              <th className='w-52 pb-2 text-center'>Jumlah</th>
              <th className='w-52 pb-2 text-left'>Tipe</th>
              <th className='w-52 pb-2 text-center'>Aksi</th>
            </tr>
          </thead>
          <tbody className='bg-green-200'>
            {listRiwayat.map((riwayat) => (
              <tr key={riwayat.id}>
                <td className='text-sm'>{riwayat.tanggal}</td>
                <td className='text-sm text-center'>{riwayat.jam}</td>
                <td className='text-sm text-left'>{riwayat.judulPencatatan}</td>
                <td className='text-sm text-center'>
                  {toRupiah(riwayat.jumlah)}
                </td>
                <td className='text-sm'>{riwayat.tipe}</td>
                <td className='text-sm flex flex-1 justify-center gap-3'>
                  <Link to={'/'}>
                    <IconEdit color='#41A958' />
                  </Link>
                  <Link to={'/'}>
                    <IconTrash color='#FF0707' />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Riwayat
