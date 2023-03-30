import useAdvice from '../hooks/useAdvice'

export default function Advice() {
  const { advice, loading, error, getNewAdvice } = useAdvice()

  return (
    <main className='advice-shadow absolute top-1/2 left-1/2 w-[min(90%,540px)] -translate-y-1/2 -translate-x-1/2 rounded-2xl bg-dark-grayish-blue px-[19.67px] pt-[39px] pb-[66.48px] text-center font-["Manrope"] lg:px-[48px] lg:pb-[79px] lg:pt-[47px]'>
      {/* error */}
      {error && (
        <h1 className="mb-5 text-center text-3xl text-white">
          Something went wrong! Please try again.
        </h1>
      )}

      {/* loading */}
      {loading && !error && (
        <div role="status" className="w-full animate-pulse">
          <div className="mx-auto mb-6 h-2.5 w-48 rounded-full bg-neon-green/50"></div>

          <div className="mb-2.5 h-2 w-full rounded-full bg-light-cyan"></div>
          <div className="mb-2.5 h-2 rounded-full bg-light-cyan"></div>
          <div className="mb-[26px] h-2 w-4/5 rounded-full bg-light-cyan"></div>
        </div>
      )}

      {/* normal behavior */}
      {!loading && !error && (
        <>
          <small className="mb-6 block font-extrabold uppercase tracking-[0.25em] text-neon-green">
            advice #{advice?.slip?.id}
          </small>
          <blockquote
            key={advice?.slip?.id}
            className="mb-[26px] animate-[text-focus-in_0.65s_ease-in-out] text-[28px] font-extrabold leading-[38px] text-light-cyan lg:mb-10"
          >
            <h1 className='before:content-["“"] after:content-["”"]'>
              {advice?.slip?.advice}
            </h1>
          </blockquote>
        </>
      )}

      <img
        src="/pattern-divider-desktop.svg"
        sizes="(min-width: 768px) 786px, 500px"
        srcSet="/pattern-divider-mobile.svg 500w, /pattern-divider-mobile.svg 786w"
        alt="pattern divider"
        className="h-auto w-full"
      />
      <button
        onClick={getNewAdvice}
        className="lef-1/2 absolute -bottom-8 -translate-x-1/2 rounded-full bg-neon-green p-5 duration-300 hover:shadow-[0_6px_30px_15px] hover:shadow-neon-green/20 disabled:cursor-progress"
        disabled={loading}
      >
        <img
          src="/icon-dice.svg"
          alt="dice"
          className="animate-rotate"
          key={advice?.slip.id}
        />
      </button>
    </main>
  )
}
