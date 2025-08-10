// import styles from './HomePage.module.css';
// import { client } from '@/sanity/client';
// import DebugClient from '@/components/DebugClient';
// import HeroSection from '@/components/homepage/sections/HeroSection';
// import PostList from '@/components/homepage/sections/PostList';
// import './../styles/globals.css' // Ensure global styles are imported if needed

// import { BLOGCARDS_PAGE_QUERY, FAQ_PAGE_QUERY, GETTING_STARTED_QUERY, HOMEPAGE_QUERY, MARKETING_PAGE_QUERY, POST_LIST_QUERY, TESTIMONIALS_QUERY } from '@/lib/home/queries';
// import { NAVIGATION_QUERY } from '@/lib/navigation/queries';

// import NavigationBar from '@/components/navigation/NavigationBar';
// import GettingStartedSection from '@/components/homepage/sections/GettingStartedSection';
import Marketing from '@/components/homepage/sections/Marketing';
import FAQ from '@/components/homepage/sections/FAQ';
// import BlogCards from '@/components/homepage/sections/BlogCards';
// import BlogCardsSection from '@/components/homepage/sections/BlogCardsSelection';
// import TestimonialsSection from '@/components/homepage/sections/TestimonialsSection';
// import LandingPage from '@/components/landingPage/LandingPage';
// import { LANDING_PAGE_QUERY } from '@/lib/landingpage/queries';

// export default async function HomePage() {
//   const [posts, homepage, navigation,marketing,faq,blogCards,testimonials] = await Promise.all([
//     client.fetch(POST_LIST_QUERY, {}, { next: { tags: ['posts'] } }),
//     client.fetch(HOMEPAGE_QUERY, {}, { next: { tags: ['homepage'] } }),
//     client.fetch(NAVIGATION_QUERY, {}, { next: { tags: ['navigation'] } }),
//     client.fetch(MARKETING_PAGE_QUERY, {}, { next: { tags: ['marketing'] } }),
//     client.fetch(FAQ_PAGE_QUERY, {}, { next: { tags: ['faq'] } }),
//     client.fetch(BLOGCARDS_PAGE_QUERY, {}, { next: { tags: ['blogCards'] } }),
//     client.fetch(TESTIMONIALS_QUERY, {}, { next: { tags: ['testimonials'] } }),
// ]) as any;


//   const landingPage = await client.fetch(LANDING_PAGE_QUERY, { slug:'landing/homepage' });



//   return (
//     <div  className="container mx-auto px-4 max-w-7xl">
//       {/* <NavigationBar navigation={navigation} /> */}
//       <main className='container dark:bg-background text-center'>
//         {/* <PostList posts={posts} /> */}
//         {/* <HeroSection {...homepage} />
//         <Marketing {...marketing} />
//         <FAQ {...faq} />
//         <BlogCardsSection  {...blogCards} />
//         <TestimonialsSection {...testimonials}/>
//         <DebugClient data={{ posts, homepage, navigation,marketing,faq,blogCards,testimonials }} /> */}
//             <LandingPage {...landingPage} />
//       </main>
//     </div>
//   );
// }

import './../styles/globals.css';

import { client } from '@/sanity/client';
import LandingPage from '@/components/landingPage/LandingPage';
import { LANDING_PAGE_QUERY } from '@/lib/landingpage/queries';

import { 
  BLOGCARDS_PAGE_QUERY, 
  FAQ_PAGE_QUERY, 
  GETTING_STARTED_QUERY, 
  HOMEPAGE_QUERY, 
  MARKETING_PAGE_QUERY, 
  POST_LIST_QUERY, 
  TESTIMONIALS_QUERY 
} from '@/lib/home/queries';

import { NAVIGATION_QUERY } from '@/lib/navigation/queries';

import DebugClient from '@/components/DebugClient';

export default async function HomePage() {
  // Fetch all static data in parallel (can be reused or removed)
  const [
    posts, 
    homepage, 
    navigation,
    marketing,
    faq,
    blogCards,
    testimonials
  ] = await Promise.all([
    client.fetch(POST_LIST_QUERY, {}, { next: { tags: ['posts'] } }),
    client.fetch(HOMEPAGE_QUERY, {}, { next: { tags: ['homepage'] } }),
    client.fetch(NAVIGATION_QUERY, {}, { next: { tags: ['navigation'] } }),
    client.fetch(MARKETING_PAGE_QUERY, {}, { next: { tags: ['marketing'] } }),
    client.fetch(FAQ_PAGE_QUERY, {}, { next: { tags: ['faq'] } }),
    client.fetch(BLOGCARDS_PAGE_QUERY, {}, { next: { tags: ['blogCards'] } }),
    client.fetch(TESTIMONIALS_QUERY, {}, { next: { tags: ['testimonials'] } }),
  ]);

  // Fetch dynamic landing page data (the primary content)
  const landingPage = await client.fetch(LANDING_PAGE_QUERY, {
    slug: "homepage",
  });

  return (
    <div className="">
      <main className="dark:bg-background text-center">
        {/* 🚀 Render the landing page with content sections */}
        <DebugClient data={{ faq }} />
        <LandingPage {...landingPage} />
        {/* <Marketing {...marketing} /> */}
        <FAQ {...faq} />
        {/* 🛠 Optional: Include this for development debugging */}
      </main>
    </div>
  );
}
