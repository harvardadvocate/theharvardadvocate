
Website for the Harvard Advocate, under construction

`studio` directory is for the Sanity content editing studio and holds the schema.

`web` directory is for the Advocate website, currently uses React and Emotion for CSS, using Sanity's GROQ language to grab data.

## Setup

```
npm install
npm install -g @sanity/cli
```

(if npm install -g @sanity/cli doesn't work try dropping the -g)

Might need to run `npm install` within directories idk

## Running
```
npm run dev
```

After which the Advocate website will hopefully compiled to `http://localhost:3000` and the studio will hopefully be at `http://localhost:3333`.

We use `prettier` and `eslint` but have nothing going on w/ `eslint` right now.

Key packages:
Theme UI (https://theme-ui.com/)
Sanity (https://www.sanity.io/)
React Router (https://v5.reactrouter.com/)


## TODO

### Optimization
-   **~~Optimize image loading and website load time by decreasing image quality as needed (messing with Sanity queries basically)~~**
-   ~~Optimize Sanity queries (i.e. packaging them together instead of 10 individual queries -- possible?)~~
-   ~~Lazy load for images on all pages, and for articles on most pages~~
- **~~Load more than 25 articles per section in Section.js, load more than 25 issues in IssuesList (infinite content scroll)~~**
-   ~~Code cleanup – clean up Homepage.js, make it use more modular components instead of hardcoding everything. Take inspiration from SectionsOverview and Section.js to get a sense of what I mean. Feel free to clean up other pages like the static pages since a lot of them have near identical CSS and can be made into components.~~
- Move to static site generation to reduce Sanity bandwidth --
https://www.smashingmagazine.com/2020/09/stack-custom-made-static-site-generator/


### CSS / Design
-   **The website needs to be responsive / work on mobile (CSS heavy job) and resize well on different screen sizes**
- **Fix the layout of the fiction, features, poetry, blog, and columns pages (all of these are section.js), and make them less ugly. Add illustrations to make it look prettier.**
- **Fix "pics from 21 south street"**
- Make homepage more interactive on hover
- Fix CSS of issues list, bring down text and stop stretching issue covers

### Still need to build
- Shop page/integration with Shopify (bonus points if there’s a shop for regular people and a shop for alumni only). The shop page needs to be on the website, preferably using Shopify, but it shouldn’t link you outside the website.
-   ~~**Author page that looks pretty**~~
-   ~~**Individual issue page that looks pretty**~~
-   Search feature that looks pretty

### Other
- ~~Fix slugs (e.g. a specific item should link to /section/item, instead of /item)~~
- Make illustrations link to their articles
- **Add most recent articles/issues to Sanity CMS**
- **Upload blog**


## Building

If you want to build an optimized version of the site, navigate to the `web` directory and run:

```
npm run build
serve -s build
```
