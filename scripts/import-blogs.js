/*
NOT WORKING - RUNNING IS POINTLESS but use `node import-blogs.js` in the current dir

JS file prototype to try and implement @sanity/block-tools to automate blog post integration into Sanity.
Proposed plan:
- block-tools to convert HTML to Portable Text, using JSDOM to parse HTML specifics
- export as NDJSON file for easy upload into Sanity

ERRORS:
- imports are broken: something about commonJS and ES6 ? can't reuse schema files from ../studio/schemas :(
- no idea how blockContentType works for htmlToBlocks() of @sanity/block-tools
- no understanding of deserialize()

Theoretically if this worked it would instantly get all the blog posts on site, with enough specification.

I left it in just because I hope it shows that I didn't just write a shitty Python script lmao and genuinely want to solve the problem at hand.
*/


import { Schema } from '@sanity/schema';
import ndjson from 'ndjson';
import { htmlToBlocks } from '@sanity/block-tools';
import { readFile } from 'fs/promises';
import path from 'path';
import JSDOM from 'jsdom';
import * as types from '../studio/schemas/schema.js';


console.log(types);

const defaultSchema = Schema.compile({
    name: 'default',
    types,
    // types: [{
    //     name: "contentItem",
    //     title: "Content Item",
    //     type: "document",
    //     fields: [
    //     {
    //         name: "title",
    //         title: "Title",
    //         type: "string",
    //         validation: (Rule) => Rule.required(),
    //     },
    //     {
    //         name: "slug",
    //         title: "Slug",
    //         type: "slug",
    //         options: {
    //         source: "title",
    //         maxLength: 96,
    //         },
    //         validation: (Rule) => Rule.required(),
    //     },
    //     {
    //         name: "authors",
    //         title: "Authors",
    //         type: "array",
    //         of: [{ type: "reference", to: { type: "author" } }],
    //         validation: (Rule) => Rule.required(),
    //     },
    //     {
    //         name: "mainImage",
    //         title: "Main image",
    //         type: "image",
    //         options: {
    //         hotspot: true,
    //         },
    //     },
    //     {
    //         name: "bannerImage",
    //         title: "Banner image",
    //         type: "image",
    //         options: {
    //         hotspot: true,
    //         },
    //     },
    //     {
    //         name: "sections",
    //         title: "Sections",
    //         type: "array",
    //         of: [{ type: "reference", to: { type: "section" } }],
    //         validation: (Rule) => Rule.required(),
    //     },
    
    //     {
    //         name: "featuredOptions",
    //         title: "Featured on front page?",
    //         type: "array",
    //         of: [{type: 'string'}],
    //         options: {
    //         list: [
    //             {title: 'Featured Top Bar (Features)', value: 'featuresFeaturedTop'},
    //             {title: 'Featured Top Bar (Poetry)', value: 'poetryFeaturedTop'},
    //             {title: 'Featured Top Bar (Fiction)', value: 'fictionFeaturedTop'},
    //             {title: 'Featured Middle Bar (Features)', value: 'featuresFeaturedMiddle'},
    //             {title: 'Featured Middle Right (Art)', value: 'artFeaturedMiddleRight'},
    //             {title: 'Featured Bottom Right (Art)', value: 'artFeaturedBottomRight'},
    //             {title: 'Featured Bottom Row (Poetry)', value: 'poetryFeaturedBottom'},
    //             {title: 'Featured Bottom Row (Fiction)', value: 'fictionFeaturedBottom'},
    //             {title: 'Featured Blog', value: 'featuredBlog'},
    //             {title: 'Featured Issue Highlight', value: 'newIssueFeatured'},
    
    //         ]
    //         }
    //     },
    
    //     {
    //         name: "publishedAt",
    //         title: "Published at",
    //         type: "datetime",
    //         validation: (Rule) => Rule.required(),
    //     },
    //     {
    //         name: "year",
    //         title: "Year published",
    //         type: "string",
    //     },
    //     {
    //         name: "issue",
    //         title: "Issue",
    //         type: "reference",
    //         to: { type: "issue" },
    //         validation: (Rule) => Rule.required(),
    //     },
    //     {
    //         name: "body",
    //         title: "Body",
    //         type: "blockContent",
    //     },
    //     {
    //         name: "images",
    //         title: "Images",
    //         type: "array",
    //         of: [{ type: "image" }],
    //     },
    
    //     // todo: video and audio - files or want integration?
    //     ],
    
    //     preview: {
    //     select: {
    //         title: "title",
    //         author: "authors.0.name",
    //         media: "mainImage",
    //     },
    //     prepare(selection) {
    //         const { author } = selection;
    //         return Object.assign({}, selection, {
    //         subtitle: author && `by ${author}`,
    //         });
    //     },
    //     },
    // }
    // ]
});

console.log(defaultSchema);

const blockContentType = defaultSchema
    .get('contentItem')
    .fields.find((field) => field.name == 'body').type

async function loadJsonFile(filePath) {
    try {
        const data = await readFile(filePath, { encoding: 'utf8' });
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading the file:', error);
        return null; // or handle the error as needed
    }
}

const filePath = path.resolve('./try1.json');

// Call the function and use the JSON data
loadJsonFile(filePath).then(json => {
    console.log(json[0]);
    const blocks = htmlToBlocks(json[0]['body'], blockContentType,
        {parseHtml: (html) => {
            new JSDOM(html).window.document
        }, rules: [
            {
                deserialize(el, next, block) {
                    if (el.className == 'p1') {
                        return(block({
                            _type: 'title',
                            
                        }))
                    }
                }
            }
        ]}
        );
    console.log(blocks);
});

