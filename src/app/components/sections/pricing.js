const PricingFeature = () => {
  return (
    <div className='px-[150px] py-6 w-full'>
      <p className='text-primary text-2xl font-semibold text-center'>
        Harga yang terjangkau untuk setiap bisnis anda
      </p>
      <div className='mt-5 flex justify-between space-x-3'>
        <div className='bg-light rounded-xl shadow-xl w-1/3 flex flex-col justify-between'>
          <div className='relative bg-primary rounded-t-xl py-5 px-10 space-y-3 pt-10 h-[200px]'>
            <p className='font-bold text-3xl text-center text-white border-b'>
              FREE
            </p>
            <p className='text-center font-semibold text-white pb-8'>
              Paket yang mendukung operasi dasar usaha
            </p>
            <div className='absolute w-full left-0 bottom-[-20px] flex justify-center'>
              <div className='w-10 h-10 bg-light rounded-full flex justify-center items-center'>
                <div className='w-8 h-8 bg-primary rounded-full' />
              </div>
            </div>
          </div>
          <div className='flex justify-center py-5 px-10'>
            <button className='bg-primary px-8 py-2 text-white rounded-lg'>
              Coba Sekarang
            </button>
          </div>
        </div>
        <div className='bg-light rounded-xl shadow-xl w-1/3 flex flex-col justify-between'>
          <div className='relative bg-primary rounded-t-xl py-5 px-10 space-y-3 pt-10 h-[200px]'>
            <p className='font-bold text-3xl text-center text-white border-b'>
              STARTER
            </p>
            <p className='text-center font-semibold text-white pb-8'>
              Paket dengan fitur lengkap yang mendukung efisiensi usaha Anda
            </p>
            <div className='absolute w-full left-0 bottom-[-20px] flex justify-center'>
              <div className='w-10 h-10 bg-light rounded-full flex justify-center items-center'>
                <div className='w-8 h-8 bg-primary rounded-full' />
              </div>
            </div>
          </div>
          <div className='space-y-5  py-5 px-10'>
            <div className='text-center pt-8'>
              <p className='font-bold text-3xl text-center text-primary leading-5'>
                Rp. 150.000
              </p>
              <p className='text-primary'>Perbulan</p>
            </div>
            <div className='text-center'>
              <p className='font-bold text-3xl text-center text-primary leading-5'>
                Rp. 350.000
              </p>
              <p className='text-primary'>Per 3 Bulan</p>
            </div>
            <div className='text-center'>
              <p className='font-bold text-3xl text-center text-primary leading-5'>
                Rp. 550.000
              </p>
              <p className='text-primary'>Per 6 Bulan</p>
            </div>
            <div className='text-center'>
              <p className='font-bold text-3xl text-center text-primary leading-5'>
                Rp. 950.000
              </p>
              <p className='text-primary'>Pertahun</p>
            </div>
          </div>
          <div className='flex justify-center py-5 px-10'>
            <button className='bg-primary px-8 py-2 text-white rounded-lg'>
              Coba Gratis 14 Hari
            </button>
          </div>
        </div>
        <div className='relative border-2 border-success bg-light rounded-xl shadow-xl w-1/3 flex flex-col justify-between'>
          <div className='relative bg-primary rounded-t-xl py-5 px-10 space-y-3 pt-10 h-[200px]'>
            <p className='font-bold text-3xl text-center text-white border-b'>
              ADVANCE
            </p>
            <p className='text-center font-semibold text-white pb-8'>
              Paket terlengkap yang mendukung usaha Anda ke level yang lebih
              tinggi
            </p>
            <div className='absolute w-full left-0 bottom-[-20px] flex justify-center'>
              <div className='w-10 h-10 bg-light rounded-full flex justify-center items-center'>
                <div className='w-8 h-8 bg-primary rounded-full' />
              </div>
            </div>
          </div>
          <div className='absolute top-0 left-0 flex justify-center w-full'>
            {/* <div> */}
            <p className='text-white bg-success px-8 py-1 w-fit rounded-b-lg font-semibold'>
              Paling Populer
            </p>
            {/* </div> */}
          </div>
          <div className='space-y-5 py-5 px-10 '>
            <div className='text-center pt-8'>
              <p className='font-bold text-3xl text-center text-primary leading-5'>
                Rp. 250.000
              </p>
              <p className='text-primary'>Perbulan</p>
            </div>
            <div className='text-center'>
              <p className='font-bold text-3xl text-center text-primary leading-5'>
                Rp. 650.000
              </p>
              <p className='text-primary'>Per 3 Bulan</p>
            </div>
            <div className='text-center'>
              <p className='font-bold text-3xl text-center text-primary leading-5'>
                Rp. 1.100.000
              </p>
              <p className='text-primary'>Per 6 Bulan</p>
            </div>
            <div className='text-center'>
              <p className='font-bold text-3xl text-center text-primary leading-5'>
                Rp. 1.800.000
              </p>
              <p className='text-primary'>Pertahun</p>
            </div>
          </div>
          <div className='flex justify-center py-5 px-10'>
            <button className='bg-primary px-8 py-2 text-white rounded-lg'>
              Coba Gratis 14 Hari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingFeature;
