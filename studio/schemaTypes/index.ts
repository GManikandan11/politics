import post from '../schemas/post';
import navigation from '../schemas/navigation';
import marketing from '../schemas/marketing';
// import gettingStarted from '../schemas/gettingStarted';
import author from '../schemas/author';
import settings from '../schemas/settings';
import page from '../schemas/page';
import faq from '../schemas/faq';
import blogCards from '../schemas/blogCards';
import testimonials from '../schemas/testimonials';
import media from '../schemas/Blocks/media';
import footer from '../schemas/footer';
import individualFAQ from '../schemas/individualFAQ';
import demoExpectation from '../schemas/demoExpectation';
// Import your new solutionPage schema
import solutionPage from '../schemas/solutionPage';
import termsAndConditions from '../schemas/termsAndConditions';
import blockContent from '../schemas/blockContent'
import privacyPolicy from "../schemas/privacyPolicy"
import blogPost from '../schemas/blogPost';
import integration from '../schemas/integration';
import pageSettings from '../schemas/pageSettings';
// import seopage from '../schemas/seoPage';
import pricingSection from '../schemas/Blocks/pricingSection';
import  heroSection from '../schemas/Blocks/heroSection';
import landingPage from '../schemas/landingPage';
import landingpages from '../schemas/landingPages';
import localString from '../../studio/schemas/localeString';
export const schemaTypes = [
  localString,
  navigation,
  post,
  marketing,
  faq,
  blogCards,
  media,
  testimonials,
  author,
  settings,
  page,
  solutionPage, // Add it here clearly
  footer,
  individualFAQ,
  demoExpectation,
  termsAndConditions,
  blockContent,
  privacyPolicy,
  blogPost,
  integration,
  landingPage,
  // seopage,
  pageSettings,
  landingpages,
  pricingSection,
  heroSection
];
