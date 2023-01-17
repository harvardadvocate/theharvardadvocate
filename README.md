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
