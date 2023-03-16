# Blue Bite Assessment

## Developer Notes

I am not a React developer, I used Vue on 90% of my projects. I dislike React because of JSX

In Vue I use PUG as HTML preprocessor and Stylus as CSS preprocessor, so I can write CSS way faster while using advanced features.

There's no simple way to use PUG or Stylus preprocessor with React, so I had to resort with plain JSX and SCSS.

I do not like the idea of CSS-in-JS, as it mixes concepts. So I do not use CSS modules.

For same reason of mixing concepts, I do not to use Tailwind and its family frameworkds.

### Tag 0.1

```bash
git checkout v0.1
```

Remembering React perks, I have created basic layout using Components, no data request implemented yet.

Now I'd like to properly read original README.MD and see projects requirements again, to see if I should load data per-card or on page level.

When I got to the point

> Conditions are components that render their children list when a specific variable is equal to the given value.

I personally do not feel its necessary to use Component for simple conditions. There are props for it.

I do not understand from the design what are the buttons and how the UX should work.

So I checked API endpoints and realised that backend not just provides data but also has declarations on which components to render.


