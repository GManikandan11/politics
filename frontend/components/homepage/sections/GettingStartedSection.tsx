interface Step {
  stepTitle: string;
  description: string;
  code: string;
}

interface MarqueeLogo {
  alt: string;
  image: {
    asset: {
      url: string;
    };
  };
}

interface GettingStartedProps {
  title: string;
  subtitle:string;
  installHeading:string;
  steps: Step[];
  ctaLabel: string;
  ctaLink: string;
  marqueeLogos?: MarqueeLogo[];
}

export default function GettingStartedSection({
  title,
  subtitle,
  installHeading,
  steps,
  ctaLabel,
  ctaLink,
  marqueeLogos = [],
}: GettingStartedProps) {
      const duplicated = [...marqueeLogos, ...marqueeLogos];
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 space-y-12 container mx-auto px-4 max-w-7xl">
      {/* Marquee logo row */}
      {duplicated.length > 0 && (
        <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']">
          <div className="flex w-max animate-marquee gap-24 pr-24">
            {duplicated.map((logo, idx) => (
              <div key={idx} className="shrink-0 w-24 h-24 flex items-center justify-center">
                <img
                  src={logo.image.asset.url}
                  alt={logo.alt}
                  className="max-h-12 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Getting Started content */}
      <div>
        <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start lg:sticky lg:top-56">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <h1 className="text-4xl font-semibold mb-6" >{installHeading}</h1>
        <h5>{subtitle}</h5>
                {/* CTA Button */}
        {ctaLabel && ctaLink && (
          <div className="mt-8 text-center">
            <a
              href={ctaLink}
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700"
            >
              {ctaLabel}
            </a>
          </div>
        )}
        </div>
         <div className="flex flex-col justify-center gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-2">
                Step {idx + 1}: {step.stepTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
              <pre className="bg-black text-white text-sm p-4 rounded overflow-x-auto">
                {step.code}
              </pre>
            </div>
          ))}
          </div>
        </div>


      </div>
    </section>
  );
}
