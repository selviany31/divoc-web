import Image from 'next/image';
import Header from './components/header/header';
import HeroSection from './components/sections/hero';
import FeatureSection from './components/sections/feature';
import PricingFeature from './components/sections/pricing';
import AccessSection from './components/sections/access';

export default function Home() {
  return (
    <>
      <div className=''>
        <Header />
      </div>
      {/* <div className='grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-primary'> */}
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <HeroSection />
        <div id='feature-section' className='w-full'>
          <FeatureSection />
        </div>
        <div id='pricing-section'>
          <PricingFeature />
        </div>
        {/* <div id='access-section'> */}
        <AccessSection />
        {/* </div> */}
      </main>
      <footer id='footer' className='bg-primary px-[150px] py-8'>
        <div className='space-y-5'>
          <Image
            aria-hidden
            src='/logo.png'
            alt='File icon'
            width={150}
            height={150}
          />
          <div className='text-white'>
            <p className='font-semibold text-lg'>Kantor Pusat:</p>
            <p>Jl. lorem ipsum</p>
          </div>
        </div>
      </footer>
      {/* </div> */}
    </>
  );
}
