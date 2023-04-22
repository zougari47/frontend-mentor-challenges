import { useCallback, useMemo, useState } from 'react'
import destinations from '../../data/destinations.json'
import Destination from './Destination'
import NavigationButtons from './NavigationButtons'
import type { IDestination } from '../../types'

const Wrapper = () => {
  const [currentDestination, setCurrentDestination] = useState('moon')

  const filteredDestination = useMemo(() => {
    return destinations.find(
      (d) => d.name === currentDestination
    ) as IDestination
  }, [currentDestination, destinations])

  const handleSetCurrentDestination = useCallback((destinationName: string) => {
    setCurrentDestination(destinationName)
  }, [])

  return (
    <section className='container text-center lg:px-[111.5px] lg:text-left'>
      <Destination
        {...filteredDestination}
        i={destinations
          .findIndex((d) => d.name === currentDestination)
          .toString()
          .padStart(2, '0')}
        key={filteredDestination?.name}
        name={filteredDestination?.name as string}
      >
        <NavigationButtons
          destinations={destinations}
          currentDestination={currentDestination}
          setCurrentDestination={handleSetCurrentDestination}
        />
      </Destination>
    </section>
  )
}

export default Wrapper
