interface MarqueeLogo {
  alt: string;
  image: { asset: { url: string } };
}

/**
 * Gap-less marquee:
 *  – Duplicate array once
 *  – Animate single track from 0 → -100 %
 */
export default function LogoMarquee({ logos }: { logos: MarqueeLogo[] }) {
  const loop = [...logos, ...logos];           // duplicate content

  return (
    <div className="relative h-24 overflow-hidden w-full">
      <div className="flex w-max animate-marquee gap-24">
        {loop.map((l, i) => (
          <div
            key={i}
            className="flex w-24 h-24 shrink-0 items-center justify-center"
          >
            <img
              src={l.image.asset.url}
              alt={l.alt}
              className="max-h-12 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
