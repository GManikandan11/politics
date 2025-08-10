// app/solutions/[slug]/page.tsx
import { client, urlFor } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
import { SOLUTION_PAGE_QUERY, SOLUTION_PAGE_PATHS_QUERY } from '@/lib/solution/queries';
import { PAGE_QUERY } from '@/lib/SEO/queries';
import Image from 'next/image';
import { Metadata } from 'next';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import PageNotFound from '@/components/common/PageNotFound';
import DebugClient from '@/components/DebugClient';
import FbLinkGrid from '@/components/FbLinkGrid';
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage'; // Adjust path as needed

export const generateMetadata = generateLandingPageMetadata

export default async function SolutionPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = await client.fetch(SOLUTION_PAGE_QUERY, { slug });

  if (!page) {
    return <PageNotFound message="Oops! That page couldn't be found." />;
  }

  return (
    <main className="container mx-auto px-4 max-w-7xl relative pt-16 xl:pt-10">
      <DebugClient data={{ page }} />
       <div className="container bg-background text-center">
    <h1 className="text-4xl font-semibold md:text-5xl font-grotesque"
    style={{ lineHeight: '1.30' }}
    >{page.title}
      <br />
      {page.title_2}
    </h1>
    <h2 className="mx-auto mb-6 mt-6 max-w-3xl text-2xl md:text-2xl">{page.subTitle}</h2>
  </div>

  {page.seoDescription && <p className="text-gray-600">{page.seoDescription}</p>}

  {page?.solutions?.map((sol: any, i: number) => (
    <section key={i} className="mb-12">
      <h2>{sol.solutionTitle}</h2>
      {sol.image && (
        <Image
          src={urlFor(sol.image).width(800).url()}
          alt={sol.image.alt || sol.solutionTitle}
          className="my-4"
          width={800}
          height={500}
        />
      )}
      <h3>Problem</h3>
      <PortableText value={sol.problemDescription} />
      <h3>Solution</h3>
      <PortableText value={sol.solutionDetails} />
    </section>
  ))}

  {[1, 2, 3, 4, 5].map((n) => {
    const gridKey = `grid${n}`;
    const mediaKey = `grid${n}Media`;
    const grid = page[gridKey];
    const media = page[mediaKey];
    if (!grid || !media) return null;

    return (
      <section key={n} className="container bg-background">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          {n % 2 !== 0 && (
            <div className="container bg-background py-16 xl:py-10">
              <Image
                src={urlFor(media).width(1200).url()}
                alt={media.alt || `Grid ${n} media`}
                width={500}
                height={300}
                className="rounded-xl"
              />
            </div>
          )}

          {grid.map((item: any, idx: number) => (
            <div key={idx} className="container bg-background py-16 xl:py-10">
              {item.icon && (
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              )}
              <p className="text-xl font-semibold text-primary">{item.eyebrow}</p>
              <h4 className="text-2xl font-semibold font-grotesque">{item.title}</h4>
             {item.body && (
              <div className="text-zinc-600 space-y-4 mt-4">
                {item.body
                  .split('\n')
                  .filter((line:any) => line?.trim() !== '')
                  .map((line: string, i: number) => (
                    <p key={i}>{line}</p>
                  ))}
              </div>
            )}

              <FbLinkGrid items={grid} />
            </div>
          ))}

          {n % 2 === 0 && (
            <div className="container bg-background py-16 xl:py-10">
              <Image
                src={urlFor(media).width(1200).url()}
                alt={media.alt || `Grid ${n} media`}
                width={500}
                height={300}
                className="rounded-xl"
              />
            </div>
          )}
        </div>
      </section>
    );
  })}

  {page?.items && (
    <Accordion type="multiple" className="w-full">
      {page.items.map((item: any, idx: number) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="py-6 text-left text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-zinc-600">
           {item?.answer
                ?.split(/\n\s*\n/) // Split on 1+ blank lines or whitespace
                .map((para:string, i:number) =>
                  para.trim() === '' ? (
                    <div key={i} className="h-4" /> // Spacer
                  ) : (
                    <p key={i} className="mb-2 whitespace-pre-line">
                      {para}
                    </p>
                  )
                )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )}

    </main>
  );
}