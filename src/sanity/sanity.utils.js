import sanityClient from '@sanity/client';


const client = sanityClient({
  projectId: 'u0sxziy6',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
});

export default client;