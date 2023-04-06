import type { FC, ReactNode } from 'react'
import Statistics from './Statistics'
interface IDestination {
  name: string
  description: string
  avgDistance: string
  travelTime: string
  children?: ReactNode
  i: string
}

const Destination: FC<IDestination> = ({
  name,
  description,
  avgDistance,
  travelTime,
  children,
  i,
}) => (
  <div className='pb-14'>
    <p
      data-index={i}
      className={`mb-8 mt-6 text-base uppercase leading-[19.2px] tracking-[2.7px] text-white before:pr-[18px] before:font-bold before:opacity-25 before:content-[attr(data-index)]`}
    >
      Pick your destination
    </p>

    <img
      className='mx-auto block aspect-square w-[170px] object-cover'
      src={`/assets/destination/image-${name}.webp`}
      alt={name}
    />

    <div>{children}</div>

    <h1 className='font-bellefair text-[56px] uppercase leading-[64.18px] text-white'>
      {name}
    </h1>

    <p className='text-light-blueish-gray mb-8 font-[15px] leading-[25px]'>
      {description}
    </p>
    <hr className='h-[2px] bg-white/20' />

    <Statistics label='AVG. DISTANCE' value={avgDistance} />
    <Statistics label='Est. travel time' value={travelTime} />
  </div>
)

export default Destination
