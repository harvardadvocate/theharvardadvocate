import sanityClient from "../../../lib/sanity.js";

const sectionToQuery = (section, start, end) =>
  `*[_type == "contentItem" && "${section}" in sections[]->title]  | order(publishedAt desc) {
        title,
        authors[]->{name, slug},
        issue->{title,slug},
        sections[]->{title,slug},
        slug,
        body,
        mainImage{
          asset->{
          _id,
          url
          }
        },
        images[]{asset->{_id, url}}
    }[${start}...${end}]`;

export default async function handler(req, res) {
  const { sectionTitle, start, end } = req.query;

  if (!sectionTitle || start === undefined || end === undefined) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const startNum = parseInt(start, 10);
  const endNum = parseInt(end, 10);

  if (isNaN(startNum) || isNaN(endNum)) {
    return res.status(400).json({ error: "Invalid start or end parameters" });
  }

  try {
    const data = await sanityClient.fetch(
      sectionToQuery(sectionTitle, startNum, endNum)
    );
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching section items:", error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
}
