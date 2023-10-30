import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: 'vib4xv9a',
    dataset: 'production',
  useCdn: true,
});