# The Harvard Advocate Spring 2024 Comp R1 Project - Ben Fortuin
2/25/2024

## SUMMARY
`import-blogs.py` parses the blog post data from `try1.json` into `output.json` in a format that is hopefully conducive to a Sanity contentItem (keys are named identically as in the schema in`../studio/schemas/documents/contentItem.js`). A plaintext body, a title, an author, a time, and a URL slug should all exist in each entry amoung other data.

Approximate breakdown of time:
- 70%: trying to implement JS solution
- 30%: Python solution & cleanup

Total time spent: ~6 hours over 2 days

## ADDED FILES
advocateR1/
├── scripts/              *
│   ├── import-blogs.js   *
│   ├── import-blogs.py   *
│   ├── output.json       *
│   ├── package-lock.json *
│   ├── package.json      *
│   ├── README.md         *
│   └── try1.json         *
├── studio
├── web
└── ...

`import-blogs.py` is the only meaningful script here, and `output.json` is the only easily useful file for the future. 
All other files were part of a failed attempt at implementing `@sanity/block-tools`, left in hopefully for use or inspiration and proof of work on this comp.
I think it would be a good solution, but not practical enough for this comp.

Not sure how to extend this into a ndjson for direct import either because Sanity Portable Text formatting is unclear to me.

## POTENTIAL EXTENSIONS
- Automation is very possible with Sanity's plugin
- Converting the JSON into a properly formatted NDJSON for direct import into Sanity is also possible

## EXTENSION LINKS
- Sanity package for in-studio HTML-to-Portable Text: (https://www.jsdelivr.com/package/npm/sanity-plugin-html-to-portable-text)
- Similar but only high-level guide on HTML blog content to Portable Text: (https://www.sanity.io/guides/how-to-migrate-your-html-blog-content-from-ghost)
- The actual package (not a very detailed README): (https://www.npmjs.com/package/@sanity/block-tools)

## MINI RANT
Even though I was extremely intimidated by all the JS, I now feel like I understand some things like the schema structure and JS importing really well now! I have some familiarity with React (took CS50 and made a React Native app as my final project) but not much experience in web dev as a whole. I hope that my JS artifacts show that I tried to put genuine effort into this comp despite not having much time to dedicate. Above all, I think I just hate seeing a problem go (partially) unsolved, regardless of comping or not, and I don't like how little I have to show for my work towards a solution. 

I appreciated all the support for this comp assignment and also wanted to use this space to express my gratitude to Cindy and Conan.