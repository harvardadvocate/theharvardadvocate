import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "sierqf4e",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-08-24",
});

export default sanityClient;
