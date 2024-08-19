The new website for the Harvard Advocate, built by Andreas Lordos '25. Live [here.](https://advo-website-beta.web.app/)

Currently maintained by Conan Lu '26. Reach out to conanlu \[at\] college.harvard.edu with any questions. 
`studio` directory is for the Sanity content editing studio and holds the schema.

`web` directory is for the Advocate website, currently uses React and Emotion for CSS, using Sanity's GROQ language to grab data.

## Setup

```
npm install
npm install -g @sanity/cli
```

(if npm install -g @sanity/cli doesn't work try dropping the -g)

Might need to run `npm install` within directories idk.

## Running
```
npm run dev
```

After which the Advocate website will hopefully compiled to `http://localhost:3000` and the studio will hopefully be at `http://localhost:3333`.

We use `prettier` and `eslint`

Key packages:
Theme UI (https://theme-ui.com/)
Sanity (https://www.sanity.io/)
React Router (https://v5.reactrouter.com/)


## TODO

### CSS / Design
- **Fix the layout of the fiction, features, poetry, blog, and columns pages (all of these are section.js), and make them less ugly. Add illustrations to make it look prettier.**
- **Fix "pics from 21 south street"**
- Make homepage more interactive on hover

### Still need to build
-   Search feature that looks pretty

### Other
- Make illustrations link to their articles
- **Add most recent articles/issues to Sanity CMS**
- **Upload blog**


## Building

If you want to build and run an optimized version of the site, navigate to the `web` directory and run:

```
npm run build
serve -s build
```

# Deploying

Any new push to main will automatically deploy to the live site after ~2 minutes (see our GitHub actions page). The website is deployed using Firebase.
