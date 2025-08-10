'use client';
import React from 'react';
import { PortableText } from 'next-sanity';

interface Feature {
  icon?: string;
  title: string;
  step: string;               // "01", "02"...
  description: string;
  disabled?: boolean;
  visual?: { asset?: { url?: string } } | null; // 👈 add this
}

interface PersonaCard {
  name: string;
  title: string;
  location: string;
  imageUrl: string;
  badges?: string[];
}

interface MessageStep {
  step: string;
  text: string;
  tags?: string[];
}

interface AutoEngageProps {
  autoEngageSection: {
    label: string;
    headline: string;
    subheadline: any;         // string | blockContent
    features: Feature[];
    personaCard: PersonaCard; // kept (not used for the right visual anymore)
    messageSteps: MessageStep[];
  };
}

const AutoEngageSection = ({ autoEngageSection }: AutoEngageProps) => {
  if (!autoEngageSection) return null;

  const { label, headline, subheadline, features = [] } = autoEngageSection;
  const [active, setActive] = React.useState(0);
  const current = features[active];

  return (
  <section style={{margin:'0px'}} className="relative bg-[rgb(247,246,255)] dark:bg-gray-900 py-8 md:py-8 px-4 overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12 items-start">
    {/* LEFT (wider) */}
    <div className="md:col-span-7 lg:col-span-8">
    <div className="flex justify-start">
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-violet-700 shadow-sm text-sm font-semibold">
      <span className="inline-block w-2 h-2 rounded-full bg-violet-600" />
      {label}
    </div>
  </div>
      <h2 className="mt-6 text-left text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white font-grotesque max-w-3xl">
        {headline}
      </h2>

      <div className="text-left mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
        {Array.isArray(subheadline) ? <PortableText value={subheadline} /> : <p>{subheadline}</p>}
      </div>

      <div className="mt-8 h-px bg-black/10 dark:bg-white/10" />

      <div className="mt-4">
        <ul className="divide-y divide-black/10 dark:divide-white/10">
          {features.map((f, i) => {
            const isActive = i === active;
            return (
              <li key={`${f.step}-${f.title}-${i}`}>
                <button
                  disabled={f.disabled}
                  onClick={() => setActive(i)}
                  className={`w-full py-3 flex items-center justify-between gap-4 text-left transition
                    ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-semibold
                        ${isActive ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {f.icon ? f.icon : (f.step || String(i + 1))}
                    </span>
                    <span className={`truncate text-base md:text-lg font-semibold ${isActive ? 'text-primary' : ''}`}>
                      {f.title}
                    </span>
                  </div>
                  <span className={`shrink-0 text-sm font-semibold tabular-nums ${isActive ? 'text-primary' : 'text-gray-500'}`}>
                    {(f.step || String(i + 1)).padStart(2, '0')}
                  </span>
                </button>

                {isActive && (
                  <div className="text-left pr-3 pb-5 pl-2">
                    <p className="text-gray-900 dark:text-white text-lg">{f.description}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>

    {/* RIGHT (narrower, smaller image) */}
    <div className="md:col-span-5 lg:col-span-4 relative self-start md:self-center flex justify-end w-full">
      {current?.visual?.asset?.url ? (
        <div className="mx-auto md:mx-0 w-full max-w-sm md:max-w-md lg:max-w-md">
          <img
            src={current.visual.asset.url}
            alt={current.title}
            className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-black/5 object-contain bg-white"
          />
        </div>
      ) : (
        <div className="mx-auto md:mx-0 w-full max-w-sm md:max-w-md lg:max-w-md rounded-3xl bg-white/60 dark:bg-gray-800/60 border border-black/10 dark:border-white/10 p-10 text-center">
          <p className="text-sm text-gray-500">No visual uploaded for “{current?.title ?? 'Step'}”.</p>
        </div>
      )}
    </div>
  </div>
</section>

  );
};

export default AutoEngageSection;
