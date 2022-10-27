const umkms = [
  {
    id: 1,
    category: 'kuliner',
    judul: 'Bakso meledak',
    deskripsi:
      'Usaha kuliner ini amat sangat diminati akhir-akhir ini. Jenis makanan ini juga sering dibicarakan oleh orang-orang karena rasanya yang enak dan juga unik. Oleh karena itu, jenis usaha ini akan sangat menguntungkan dengan pasar yang luas.',
    pemilik: 'PT Adi Putra',
    rate: '4',
    totalKebutuhanDana: 150000000,
    terkumpul: 75000000,
    saham: 1200,
    gambar: 'umkm1.png',
    pembayaran: [
      'BNI 489473020 Adi Putra Wicaksono',
      'BRI 489473020983402382 Adi Putra Wicaksono',
      'MANDIRI 20983402382 Adi Putra Wicaksono',
    ],
    alamat: 'JL. Darmawangsa No. 10 Jakarta',
    contact: '081259967123',
  },
  {
    id: 2,
    category: 'pendidikan',
    judul: 'Kursus membangun website',
    deskripsi:
      'Usaha bootcamp ini amat sangat diminati akhir-akhir ini. Jenis makanan ini juga sering dibicarakan oleh orang-orang karena rasanya yang enak dan juga unik. Oleh karena itu, jenis usaha ini akan sangat menguntungkan dengan pasar yang luas.',
    pemilik: 'PT Adi Firman',
    rate: '3',
    totalKebutuhanDana: 5000000,
    terkumpul: 4500000,
    saham: 800,
    gambar: 'umkm2.png',
    pembayaran: [
      'MANDIRI 20983402382 Adi Firman Wicaksono',
      'BNI 489473020 Adi Firman Wicaksono',
      'BRI 489473020983402382 Adi Firman Wicaksono',
    ],
    alamat: 'JL. Darmawangsa No. 10 Jakarta',
    contact: '081259967123',
  },
  {
    id: 3,
    category: 'kuliner',
    judul: 'Bakso meledak',
    deskripsi:
      'Usaha kuliner ini amat sangat diminati akhir-akhir ini. Jenis makanan ini juga sering dibicarakan oleh orang-orang karena rasanya yang enak dan juga unik. Oleh karena itu, jenis usaha ini akan sangat menguntungkan dengan pasar yang luas.',
    pemilik: 'PT Roti Mekar',
    rate: '5',
    totalKebutuhanDana: 30000000,
    terkumpul: 10000000,
    saham: 100,
    gambar: 'umkm3.png',
    pembayaran: [
      'BNI 489473020 Adi kumis Wicaksono',
      'BRI 489473020983402382 Adi kumis Wicaksono',
      'MANDIRI 20983402382 Adi kumis Wicaksono',
    ],
    alamat: 'JL. Darmawangsa No. 10 Jakarta',
    contact: '081259967123',
  },
]

const listUsaha = [
  {
    id: 1,
    nama: 'Bakso meledak',
    tanggal: '21 januari 2020',
    jumlahPendanaan: 20000000,
    totalDividen: 250000,
    totalInvestor: 31,
    laba: 3200000,
    danaTerkumpul: 64,
  },
  {
    id: 2,
    nama: 'Laundry Wangy',
    tanggal: '1 april 2022',
    jumlahPendanaan: 15000000,
    totalDividen: 150000,
    totalInvestor: 23,
    laba: 3230000,
    danaTerkumpul: 64,
  },
  {
    id: 3,
    nama: 'Kursus jahit',
    tanggal: '30 desember 2021',
    jumlahPendanaan: 10000000,
    totalDividen: 50000,
    totalInvestor: 31,
    laba: 220000,
    danaTerkumpul: 11,
  },
]
const daftarTransaksi = [
  {
    id: 2930472829,
    tanggal: '22 januaru 2020',
    nama: 'PT Adi Firman',
    saham: 20,
    status: 'Sukses',
  },
  {
    id: 1930472829,
    tanggal: '22 januari 2020',
    nama: 'PT Adi Firman',
    saham: 20,
    status: 'Sukses',
  },
  {
    id: 3930472829,
    tanggal: '25 maret 2020',
    nama: 'PT Adi Firman',
    saham: 20,
    status: 'Gagal',
  },
  {
    id: 5930472829,
    tanggal: '29 april 2020',
    nama: 'PT Adi Firman',
    saham: 20,
    status: 'Proses',
  },
]

const investor = [
  {
    id: 1,
    nama: 'Adi Hidayat',
    umkm: 'Bakso Meledak',
    gambar: 'investor1.png',
  },
  {
    id: 2,
    nama: 'Jim Armando',
    umkm: 'Kursus Web',
    gambar: 'investor2.png',
  },
  {
    id: 3,
    nama: 'Lucas',
    umkm: 'Roti Bakar',
    gambar: 'investor3.png',
  },
]

const daftarUsahaUmkm = [
  {
    id: 1,
    namaProduk: 'Bakso meledak',
    namaPerusahaan: 'PT. adi putra',
    kebuthanDana: 100000000,
    danaTerkumpul: 54,
    totalInvestor: 31,
    laba: 3200000,
    danaTerkumpul: 64,
    riwayat: [
      {
        id: 1,
        tanggal: '02/07/2022',
        jam: '17:50',
        judulPencatatan: 'Keuntungan hari minggu',
        jumlah: 20000,
        tipe: 'pemasukan',
      },
      {
        id: 2,
        tanggal: '12/07/2022',
        jam: '12:30',
        judulPencatatan: 'Bensin Ongkir',
        jumlah: 20000,
        tipe: 'pengeluaran',
      },
    ],
    investor: [
      {
        id: 1,
        nama: 'intan amelia',
        tanggalPendanaan: '20 januari 2018',
        jumlahPendanaan: 200000000,
        totalDividen: 250000,
      },
      {
        id: 2,
        nama: 'Agoy yoga',
        tanggalPendanaan: '21 januari 2018',
        jumlahPendanaan: 60000000,
        totalDividen: 250000,
      },
      {
        id: 3,
        nama: 'Faris',
        tanggalPendanaan: '22 januari 2018',
        jumlahPendanaan: 150000000,
        totalDividen: 250000,
      },
    ],
  },
  {
    id: 2,
    namaProduk: 'Roti bakar',
    namaPerusahaan: 'PT. Megah',
    kebuthanDana: 50000000,
    danaTerkumpul: 80,
    totalInvestor: 31,
    laba: 3200000,
    danaTerkumpul: 64,
    riwayat: [
      {
        id: 1,
        tanggal: '02/07/2022',
        jam: '17:50',
        judulPencatatan: 'Keuntungan hari minggu',
        jumlah: 20000,
        tipe: 'pemasukan',
      },
      {
        id: 2,
        tanggal: '12/07/2022',
        jam: '12:30',
        judulPencatatan: 'Bensin Ongkir',
        jumlah: 20000,
        tipe: 'pengeluaran',
      },
    ],
    investor: [
      {
        id: 1,
        nama: 'intan amelia',
        tanggalPendanaan: '20 januari 2018',
        jumlahPendanaan: 200000000,
        totalDividen: 250000,
      },
      {
        id: 2,
        nama: 'Agoy yoga',
        tanggalPendanaan: '21 januari 2018',
        jumlahPendanaan: 60000000,
        totalDividen: 250000,
      },
      {
        id: 3,
        nama: 'Faris',
        tanggalPendanaan: '22 januari 2018',
        jumlahPendanaan: 150000000,
        totalDividen: 250000,
      },
    ],
  },
]

export default { umkms, listUsaha, daftarTransaksi, investor, daftarUsahaUmkm }
