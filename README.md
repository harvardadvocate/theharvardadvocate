Website for the Harvard Advocate, under construction

`studio` directory is for the Sanity content editing studio and holds the schema.

`web` directory is for the Advocate website, currently uses React and Emotion for CSS, using Sanity's GROQ language to grab data.

## Setup

```
npm install
npm install -g @sanity/cli
```

## Running
```
npm run dev
```

After which the Advocate website will hopefully compiled to `http://localhost:3000` and the studio will hopefully be at `http://localhost:3333`.

Might need to run `npm install` within directories idk

We use `prettier` and `eslint` but have nothing going on w/ `eslint` right now.

Key packages:
Theme UI (https://theme-ui.com/)
Sanity (https://www.sanity.io/)
React Router (https://v5.reactrouter.com/)


## TODO

**Whole Website**
- Make it responsive/mobile ready
- Fix slugs (e.g. a specific item should link to /section/item, instead of /item)
- Make illustrations link to their articles
- Move to static site generation to reduce Sanity bandwidth -- https://www.smashingmagazine.com/2020/09/stack-custom-made-static-site-generator/
- Make sanity queries more efficient?
- Add most recent articles/issues to Sanity CMS
- ~~Add footer~~

**Homepage**
- On hover, make issue, articles, "READ FULL ISSUE" more interactive
- Fix CSS for "pics from 21 south street"
- ~~Add sanctum sessions picture~~
- ~~Add more featured articles~~
- ~~Add blog section~~
- ~~Add social media section (insta, twitter)~~
- ~~Add from the archives~~

**Issues Overview**
- ~~Build~~
- Lazy Loading or pagination, load more than 25 issues lol


**Sections**
- ~~Build~~
- Fix layout of fiction, features, poetry, blog, columns so that it doesn't look ugly (section.js file). Add illustrations to make it look prettier.
- lazy load or pagination, load more than 25 articles per section

**Donation**
- ~~add donation form that doesn't look old~~

**Authors page**
- Build entirely.

**Specific Issue page (e.g. Winter 2023)**
- Build entirely.

**Shop**
- Integrate shopify into /shop.

**Submit**
- ~~Make the links valid~~

**Subscribe**
- ~~Have subscribe link to subscriptions page~~

**About Us**
- ~~Resize illustration of 21 ss.~~
