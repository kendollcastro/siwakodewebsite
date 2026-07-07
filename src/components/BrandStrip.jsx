const BRANDS = [
  'MINYTO', 'ZEROD', 'VISERAW', 'ABILLION', 'LIMOBUZ', 'PRIMOR',
]

function BrandStrip() {
  return (
    <section className="py-12 bg-white/50 border-y border-white/10 overflow-hidden" aria-label="Notable brands">
      <div className="flex whitespace-nowrap motion-reduce:overflow-x-auto">
        <div className="flex items-center space-x-16 px-6 animate-marquee motion-reduce:animate-none">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-headline-md font-bold opacity-20 text-[#1B3D2F] select-none tracking-wider"
            >
              {brand}
            </span>
          ))}
          {BRANDS.map((brand) => (
            <span
              key={`dup-${brand}`}
              className="text-headline-md font-bold opacity-20 text-[#1B3D2F] select-none tracking-wider"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandStrip
