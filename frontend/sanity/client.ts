// C:\Users\user\test\bizmagnets\frontend\sanity\client.ts
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ffyemvvw',
  dataset: 'production',
  useCdn: false,
  apiVersion: 'v2023-08-01', // Stable version
});

const builder = imageUrlBuilder(client);
// Export urlFor helper function
export const urlFor = (source: any) => builder.image(source);