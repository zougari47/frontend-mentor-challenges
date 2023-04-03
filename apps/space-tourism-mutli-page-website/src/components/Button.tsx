export const Button = () => {
  return (
    <a
      href='#'
      className='font-bellefair text-dark relative isolate z-20 mx-auto flex aspect-square w-[150px] items-center justify-center rounded-full bg-white text-xl uppercase before:absolute before:-z-[1] before:h-full before:w-full before:scale-[175%] before:rounded-full before:bg-[red] before:duration-300 before:content-[""]'
    >
      Explore
    </a>
  )
}

// before:content-[""] bg-white before:absolute before:rounded-full before:-z-[1] before:bg-[red] z-10 isolate relative before:w-[164%] before:aspect-square uppercase font-bellefair tracking-[1.25px] leading-[23px] mx-auto text-xl w-[150px] aspect-square rounded-full flex items-center justify-center'

export default Button
