import feature from '@/app/constant/feature';
import Image from 'next/image';

const AccessSection = () => {
  const handleIcon = (v) => {
    if (v === true) {
      return (
        <div className='flex justify-center'>
          <Image
            aria-hidden
            src='/icon/check.svg'
            alt='File icon'
            width={20}
            height={720}
            color='#fff'
          />
        </div>
      );
    } else if (v === false) {
      return (
        <div className='flex justify-center'>
          <Image
            aria-hidden
            src='/icon/close.svg'
            alt='File icon'
            width={20}
            height={720}
            color='#fff'
          />
        </div>
      );
    } else {
      return v;
    }
  };
  return (
    <div className='px-[150px] py-6 w-full'>
      <p className='text-primary text-2xl font-semibold text-center'>
        Lihat Perbandingan Fitur
      </p>
      <div className='w-full mt-5'>
        <table className='w-full shadow-md rounded-lg'>
          <thead className='text-center bg-primary border rounded-lg'>
            <tr className='text-center text-white border rounded-lg'>
              <th className='py-3'>Fitur</th>
              <th>Free</th>
              <th>Starter</th>
              <th>Advance</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {feature?.map((el, i) => (
              <tr key={i} className={i % 2 ? 'bg-light' : ''}>
                <td className='py-3'>{el?.name}</td>
                <td>{handleIcon(el?.free)}</td>
                <td>{handleIcon(el?.starter)}</td>
                <td>{handleIcon(el?.advance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessSection;
