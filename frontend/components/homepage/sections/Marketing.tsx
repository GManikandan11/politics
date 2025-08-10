"use client";

import Image from "next/image";
import type { MarketingProps, Media, Feature } from "@/lib/types";

function MediaBlock({ media, alt }: { media: Media; alt: string }) {
  return media?.type === "video" ? (
    <video
      src={media?.url}
      playsInline
      autoPlay
      loop
      muted
      className="h-full w-full object-cover  rounded-xl"
    />
  ) : (
    <Image
      src={media?.url}
      alt={alt}
      width={500}
      height={300}
      className="rounded-xl"
      priority
    />
  );
}

function ContentBlock({
  features,
  ctaHref,
  ctaLabel,
}: {
  features: Feature[];
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="flex flex-col justify-center space-y-8 px-6 lg:px-0 text-left">
      {features?.map((f, i) => (
        <div key={i} className="space-y-2">
          {f.icon && (
            <div
              className="w-10 h-10"
              dangerouslySetInnerHTML={{ __html: f.icon }}
            />
          )}
          <h3 className="text-xl font-semibold inline-flex items-center gap-2 text-sm font-medium  py-1 bg-white text-primary  font-grotesque">{f.title}</h3>
          {f.eyebrow && <h4 className="text-2xl font-semibold font-grotesque">{f.eyebrow}</h4>}
          {/* {f.body && <p className="text-zinc-600">{f.body}</p>} */}
          {f.body && (
            <div className="text-zinc-600">
              {f.body.split("\n").map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}

      <a
        href={ctaHref}
        className="inline-flex w-max rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white shadow"
      >
        {ctaLabel}
      </a>
    </div>
  );
}

export default function Marketing({
  headline,
  subhead,
  heroMedia,
  ctaLabel = "Get Started",
  ctaHref = "#",
  features = [],
  cmsMedia,
  cmsFeatures = [],
  grid_3_Media,
  grid_3 = [],
}: MarketingProps) {
  return (
    // #ecebea
    // bg-gray-700
     <>
     <div className="relative -z-10 py-2 mb-5 mt-4 xl:mt-5">
        {subhead && (
          <p className="mx-auto mb-2 max-w-2xl text-lg md:text-xl text-zinc-600">
            {subhead}
          </p>
        )}
        <h2 className="mx-auto mb-10 max-w-3xl text-4xl md:text-10xl font-grotesque font-bold">
          {headline}
        </h2>
        </div>
    <main className=" mx-auto px-4 sm:px-6 lg:px-8">
      {/* --------------- HERO --------------- */}
      <section className="container bg-background pt-4 xl:pt-5 pb-4 xl:pb-5 text-center  mx-auto px-4 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* media */}
          <div className="relative h-[25rem] sm:h-[30rem] lg:h-full overflow-hidden rounded-lg">
            <MediaBlock media={heroMedia} alt={headline} />
          </div>
          {/* bullets + CTA */}
          <ContentBlock
            features={features}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
          />
        </div>
      </section>

      {/* --------------- CMS GRID --------------- */}
      {cmsMedia && (
        <section className="container bg-background py-4 xl:py-5 mx-auto px-4 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* text first on mobile */}
            <ContentBlock
              features={cmsFeatures}
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
            />
            <div className="relative h-[25rem] sm:h-[30rem] lg:h-full overflow-hidden rounded-lg">
              <MediaBlock media={cmsMedia} alt={headline} />
            </div>
          </div>
        </section>
      )}

      {/* --------------- GRID 3 --------------- */}
      {grid_3_Media && (
        <section className="container bg-background py-16 xl:py-20 mx-auto px-4 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative h-[25rem] sm:h-[30rem] lg:h-full overflow-hidden rounded-lg">
              <MediaBlock media={grid_3_Media} alt={headline} />
            </div>
            <ContentBlock
              features={grid_3}
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
            />
          </div>
        </section>
      )}
    </main>
    </>
  );
}
