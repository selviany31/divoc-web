const HeaderBackground = () => {
  return (
    <div className='absolute bg-light z-1 w-full h-[414px] px-[150px]'>
      <div className='flex justify-end'>
        <div className='bg-[#398bba] w-[300px] h-[414px]' />
      </div>
      <div className='w-3 h-3 rounded-full bg-[#398bba] absolute top-[20px] left-[57%]' />
      <div className='w-4 h-4 rounded-full bg-primary absolute top-[120px] left-[220px]' />
      <div className='w-10 h-10 rounded-full bg-[#398bba] absolute top-[220px] left-[520px]' />
    </div>
  );
};

export default HeaderBackground;
