import LogoMarquee from "./LogoMarquee";
import { generateLandingPageMetadata } from '@/lib/metaData/landingpage'; // Adjust path as needed

export const generateMetadata = generateLandingPageMetadata

interface CTA {
  label: string;
  link: string;
  style?: string;
}
interface MarqueeLogo {
  alt: string;
  image: {
    asset: {
      url: string;
    };
  };
}

interface HeroProps {
  heroTitleBlack_1?: string;
  heroTitleBlack_2?: string;
  heroTitleGreen?: string;
  heroTitleGreen_2?: string;
  heroTitleGreen_3?: string;
  heroSubtitle?: string;
  heroHighlight?: string;
  heroTitle?: string;
  heroTitle_2?: string;
  ctaButtons?: CTA[];
  heroModernText?: string;
  marqueeLogos?: MarqueeLogo[];

}

export default function HeroSection({
  heroTitleBlack_1 = '',
  heroTitleBlack_2 = '',
  heroTitleGreen = '',
  heroSubtitle = '',
  heroTitleGreen_2='',
  heroTitleGreen_3='',
  heroHighlight = '',
  heroTitle = '',
  heroTitle_2 = '',
  ctaButtons = [],
  heroModernText = '',
  marqueeLogos = [],
}: HeroProps) {

  return (
    <>
    <section className="bg-background relative pt-16 xl:pt-20 overflow-hidden container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col sm:flex-row justify-center text-center gap-1">
  {heroTitle && heroTitle_2 &&(
    <h3 className="text-lg">{heroTitle}
    <span className="text-lg text-orange-600 font-bold">{heroTitle_2}</span>
    </h3>
  )}
</div>

      <h1 
       className="mt-4 font-bold text-4xl md:text-5xl lg:text-6xl"
  style={{ lineHeight: '1.20' }}
      >
        {heroTitleBlack_1}{' '}
        <br />
        {heroTitleBlack_2}{' '}
        {/* <span className="text-green-600">{heroTitleGreen}</span> */}
      </h1>

      {heroSubtitle && (
        <h2 className="text-lg mt-6  pt-5  text-xl font-medium text-gray-800 leading-loose">{heroSubtitle}
        <br />
        {heroHighlight}
        </h2>
      )}

<div className="mt-10 flex flex-wrap gap-4 justify-center">
      {ctaButtons.length > 0 && (
  <div className="flex justify-center flex-wrap gap-4 mt-3">
    {ctaButtons.map((btn) => (
      <a
        key={btn.label}
        href={btn.link}
        className={`
          inline-flex items-center px-5 py-2.5 rounded-md font-semibold text-sm shadow-sm transition-colors
          ${btn.style === 'orange' ? 
            'bg-orange-600 text-white hover:bg-orange-600' :
           btn.style === 'outline' ? 
            'inline-flex w-max rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800' :
            'bg-gray-900 text-white hover:bg-gray-800'}
        `}
      >
        {btn.label}
      </a>
    ))}
  </div>
)}
</div>
<div className="bg-background relative pt-16 xl:pt-20 overflow-hidden">
      {heroModernText && (
        <p className="container text-xl font-medium text-gray-800">{heroModernText}</p>
      )}
   {marqueeLogos.length > 0 && (
        <LogoMarquee logos={marqueeLogos} />
      )}
      </div>
      
    </section>
    </>
  );
}
