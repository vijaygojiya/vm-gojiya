function Hero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <div className="max-w-2xl">
        <p className="text-2xl font-light leading-relaxed text-gray-300 md:text-3xl md:leading-loose">
          Hi{' '}
          <span role="img" aria-label="wave">
            👋
          </span>
          , my name is
        </p>
        <h1 className="mt-4 text-5xl font-bold text-amber-400 md:text-7xl">
          Vijay Gojiya
        </h1>
        <p className="mt-4 text-2xl font-light text-gray-300 md:text-3xl">
          and I write code.
        </p>
      </div>
    </div>
  )
}

export default Hero
