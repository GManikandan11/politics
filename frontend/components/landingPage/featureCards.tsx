import React from 'react';

type FeatureCard = {
  icon?: string;
  title: string;
  description: string;
  number?: string;
};

interface FeatureCardsProps {
  featureCards?: {
    sectionTitle?: string;
    sectionDescription?: string;
    cards: FeatureCard[];
  };
}

export default function FeatureCards({ featureCards }: FeatureCardsProps) {
  if (!featureCards || !featureCards.cards?.length) return null;

  return (
    <div className="bg-primaryLight pb-20" style={{ margin: '0px' }}>
      <div className="triangle-bottom m-auto" style={{ margin: 'auto' }}></div>
    <section className="px-4 container mx-auto max-w-7xl space-y-12">
      {/* Top Section Title and Description */}
      {(featureCards.sectionTitle || featureCards.sectionDescription) && (
        <div className="text-center">
          {featureCards.sectionTitle && (
            <h2 className="font-bold mx-auto mb-5 max-w-3xl text-4xl md:text-10xl font-grotesque">{featureCards.sectionTitle}</h2>
          )}
          {featureCards.sectionDescription && (
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mt-2">
              {featureCards.sectionDescription}
            </p>
          )}
        </div>
      )}

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {featureCards.cards.map((item, index) => (
          <div
            key={index}
            className="land-card p-6 rounded-lg shadow-md bg-white dark:bg-secondaryDark"
          >
            <div className="frame-3522966">
              {item.icon && (
                <div className="flex justify-center card-icon mb-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
              {item.number && (
                <span className="text-6xl font-bold mb-2 text4">{item.number}</span>
              )}
            </div>
            <h3 className="text-xl font-semibold mt-4 font-grotesque text-left">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-left">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
