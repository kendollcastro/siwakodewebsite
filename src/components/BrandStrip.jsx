const BRANDS = [
  'MINYTO', 'ZEROD', 'VISERAW', 'ABILLION', 'LIMOBUZ', 'PRIMOR',
]

function BrandStrip() {
  return (
    <section className="py-12 bg-surface-container-low overflow-hidden" aria-label="Notable brands">
      <div className="flex whitespace-nowrap motion-reduce:overflow-x-auto">
        <div className="flex items-center space-x-12 px-6 animate-marquee motion-reduce:animate-none">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-headline-md font-bold opacity-30 text-on-surface select-none"
            >
              {brand}
            </span>
          ))}
          {BRANDS.map((brand) => (
            <span
              key={`dup-${brand}`}
              className="text-headline-md font-bold opacity-30 text-on-surface select-none"
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
