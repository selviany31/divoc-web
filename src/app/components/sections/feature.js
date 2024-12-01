import Image from 'next/image';

const FeatureSection = () => {
  return (
    <div className='px-[150px] py-6 w-full'>
      <p className='text-primary text-2xl font-semibold text-center'>
        Semua yang dibutuhkan ada dalam satu POS
      </p>
      <div className='mt-5 flex flex-col space-y-10 px-[150px]'>
        <div className='flex justify-between space-x-[100px] w-full'>
          <div className='flex flex-col justify-center'>
            <p className='font-semibold text-lg mt-3'>Lorem ipsum</p>
            <p className='font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <Image
            aria-hidden
            src='/images/pos.png'
            alt='File icon'
            width={300}
            height={300}
            color='#fff'
          />
        </div>
        <div className='flex justify-between space-x-[100px] w-full'>
          <Image
            aria-hidden
            src='/images/pos.png'
            alt='File icon'
            width={300}
            height={300}
            color='#fff'
          />
          <div className='flex flex-col justify-center'>
            <p className='font-semibold text-lg mt-3'>Lorem ipsum</p>
            <p className='font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className='flex justify-between space-x-[100px] w-full'>
          <div className='flex flex-col justify-center'>
            <p className='font-semibold text-lg mt-3'>Lorem ipsum</p>
            <p className='font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <Image
            aria-hidden
            src='/images/pos.png'
            alt='File icon'
            width={300}
            height={300}
            color='#fff'
          />
        </div>
        <div className='flex justify-between space-x-[100px] w-full'>
          <Image
            aria-hidden
            src='/images/pos.png'
            alt='File icon'
            width={300}
            height={300}
            color='#fff'
          />
          <div className='flex flex-col justify-center'>
            <p className='font-semibold text-lg mt-3'>Lorem ipsum</p>
            <p className='font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
