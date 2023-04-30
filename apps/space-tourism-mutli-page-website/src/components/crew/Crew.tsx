export interface ICrew {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
  i?: string
  children?: React.ReactNode
}

const CrewMember: React.FC<ICrew> = ({
  name,
  images,
  role,
  bio,
  i,
  children,
}) => {
  return (
    <div className='animate-fade-in relative text-center text-white' key={name}>
      <p
        data-index={i}
        className={`mb-8 mt-6 text-base uppercase leading-[19.2px] tracking-[2.7px] text-white before:pr-[18px] before:font-bold before:opacity-25 before:content-[attr(data-index)] md:mb-[60px] md:text-left md:text-[20px] md:leading-6 md:tracking-[3.38px] lg:mb-[97px] lg:whitespace-nowrap lg:text-[28px] lg:leading-[33.6px] lg:tracking-[4.72px]`}
      >
        Meet your crew
      </p>

      {/* grid container */}
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <div className='md:order-3 lg:order-1 '>
          <div className='mx-auto w-[177.12px] items-center'>
            <img src={images.webp} alt={name} className='block h-auto w-full' />
          </div>
          <hr className='border-[#383B4B] md:hidden' />
        </div>

        {/* navigation button */}
        <div className='border border-[pink] p-4 md:order-2 lg:order-3'>
          {children}
        </div>

        <div className='border border-[yellow] md:order-1'>
          <span className='font-bellefair mb-2 block text-[16px] uppercase leading-[18px] opacity-50'>
            {role}
          </span>
          <h1 className='font-bellefair mb-4 text-[24px] uppercase leading-[27.5px]'>
            {name}
          </h1>
          <p className='text-light-blueish-gray text-[15px] leading-[25px]'>
            {bio}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CrewMember
