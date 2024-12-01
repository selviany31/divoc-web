import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='bg-primary w-full py-8 px-[150px]'>
      <p className='text-white text-2xl font-semibold text-center'>
        Mengapa memilih Divoc?
      </p>
      <div className='flex justify-between space-x-5 mt-8'>
        <div className='flex flex-col items-center'>
          <Image
            aria-hidden
            src='/icon/gear.svg'
            alt='File icon'
            width={75}
            height={75}
            color='#fff'
          />
          <p className='font-semibold text- text-white mt-3'>Lorem ipsum</p>
          <p className='text-white font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            aria-hidden
            src='/icon/lock-payment.svg'
            alt='File icon'
            width={75}
            height={75}
            color='#fff'
          />
          <p className='font-semibold text- text-white mt-3'>Lorem ipsum</p>
          <p className='text-white font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            aria-hidden
            src='/icon/report.svg'
            alt='File icon'
            width={75}
            height={75}
            color='#fff'
          />
          <p className='font-semibold text- text-white mt-3'>Lorem ipsum</p>
          <p className='text-white font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
