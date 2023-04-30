import type { FC } from 'react'

interface INavigationButtons {
  destinations: {
    name: string
    description: string
    avgDistance: string
    travelTime: string
  }[]
  currentDestination: string
  setCurrentDestination: (d: string) => void
}

const NavigationButtons: FC<INavigationButtons> = ({
  destinations,
  currentDestination,
  setCurrentDestination,
}) => {
  return (
    <ul className='item-center text-light-blueish-gray mb-5 mt-[26px] flex justify-center gap-7 md:mb-6 md:mt-[53px] lg:justify-start'>
      {destinations.map((d) => (
        <li key={d.name}>
          <button
            className={`relative mb-8 w-fit text-[14px] uppercase leading-[16.8px] tracking-[2.36px] after:absolute after:left-0 after:top-8 after:h-1 after:w-full after:duration-200 after:content-[""] hover:after:bg-white/50 md:mb-0 md:text-[16px] md:leading-[19.2px] md:tracking-[2.7px] lg:mb-[52px] lg:text-base lg:leading-[19.2px] lg:tracking-[2.7px] lg:after:top-10 ${
              d.name === currentDestination &&
              'text-white after:block after:bg-white'
            }`}
            onClick={() => setCurrentDestination(d.name)}
          >
            {d.name}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default NavigationButtons
