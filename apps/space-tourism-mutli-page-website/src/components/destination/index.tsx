import { useState } from 'react'
import destinations from '../../data/destinations.json'
import Destination from './Destination'

export const Wrapper = () => {
  const [currentDestination, setCurrentDestination] = useState('moon')
  return (
    <section className='container text-center'>
      {destinations
        .filter((d) => d.name === currentDestination)
        .map((d) => (
          <Destination
            {...d}
            i={destinations
              .findIndex((d) => d.name === currentDestination)
              .toString()
              .padStart(2, '0')}
          >
            <ul className='item-center text-light-blueish-gray mb-5 mt-[26px] flex justify-center gap-7'>
              {destinations.map((d) => (
                <li>
                  <button
                    className={`relative mb-8 w-fit uppercase leading-[16.8px] tracking-[2.36px] after:absolute after:left-0 after:top-8 after:h-1 after:w-full after:duration-200 after:content-[""] hover:after:bg-white/50 md:mb-0 lg:after:top-10 ${
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
          </Destination>
        ))}
    </section>
  )
}

export default Wrapper
