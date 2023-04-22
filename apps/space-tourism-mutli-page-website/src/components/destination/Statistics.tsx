import type { FC } from 'react'
import type { IStatistics } from '../../types'

const Statistics: FC<IStatistics> = ({ label, value }) => {
  return (
    <div className='mt-8'>
      <span className='text-light-blueish-gray mb-3 block text-sm uppercase leading-[16.8px] tracking-[2.36px]'>
        {label}
      </span>
      <span className='font-bellefair text-[28px] uppercase leading-8 text-white '>
        {value}
      </span>
    </div>
  )
}

export default Statistics
