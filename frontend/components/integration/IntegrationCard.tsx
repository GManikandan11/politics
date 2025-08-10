// components/integration/IntegrationCard.tsx
import Image from 'next/image';

export default function IntegrationCard({
  title,
  eyebrow,
  body,
  image,
  ctaLabel,
  ctaLink,
  index = 0,
}: any) {
  const isReverse = index % 2 === 1;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 lg:gap-28">
      {/* Image */}
      {image && (
        <div className={`w-full md:w-1/2 ${isReverse ? 'md:order-2' : ''}`}>
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto rounded-xl"
          />
        </div>
      )}

      {/* Text content */}
      <div className="w-full md:w-1/2 space-y-4">
        {eyebrow && <p className="text-orange-500 font-semibold text-lg">{eyebrow}</p>}
        {title && <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">{title}</h2>}
        {body && (
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            {body.split('\n').map((line: string, i: number) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

        {ctaLink && ctaLabel && (
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white text-base font-semibold px-6 py-3 rounded-md mt-4 hover:bg-gray-900 transition"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
