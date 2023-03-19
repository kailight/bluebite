# Blue Bite Assessment

## Developer Notes

I am not a React developer, I used Vue on 90% of my projects.

Here is why I dislike React:

Combination of doubtful architectural design decisions such as

* JSX, that pretends to be HTML while it's not, doesn't let simple conditional statements (mixing concepts)
* Css modules that enable CSS-in-JS (again, mixing concepts)...
* JSX - can't do simple if/else conditions, have to create complex components structure at Prototyping stage
* Shadow Dom making it slow
* Being more hard to configure and/or hack.

> As a result, combination of doubtful architecture and unnecessary complexities for SCRUM/Prototyping is making it taking 2-3x time to develop on React than on Vue or Svelte considering similar level of developer.

### My practices

In Vue I prefer to use PUG as HTML preprocessor and Stylus as CSS preprocessor, so I can write CSS way faster while using advanced features.

There's no simple way to use PUG or Stylus preprocessor with React, so I had to resort with plain JSX and SCSS.

I do not like the idea of CSS-in-JS, as it mixes concepts. So I do not use CSS modules.

For same reason of mixing concepts, I do not use Tailwind and similar UX frameworks.

### Tag v0.1

```bash
git checkout v0.1
```

Trying to remember React perks on the go, I have created basic layout using Components, no data request implemented yet.

As a developer with freelance experience, I first created the proto of HTML/CSS layout:

It also very well related to [this part of React new documentation](https://react.dev/learn/thinking-in-react)

So I made it look like at that point.

![Screenshot](/readme-screenshot-001.png)

Then I started to read original README.MD to check the project requirements again, to see if I should load data per-card or on page level.

When I got to the point

> Conditions are components that render their children list when a specific variable is equal to the given value.

I was confused, so I checked API endpoints and realised that backend not just provides data but also has declarations on which components to render.

### Tag v0.2

```bash
git checkout v0.2
```

At this point UX looked like this

![Screenshot](/readme-screenshot-002.png)

### Tag v0.3

```bash
git checkout v0.3
```

Then, as we had conditional components, I created component Factory.

Then, I had to rename Card01 to **Toggler** and Card02 to **Weather**

![Screenshot](/readme-screenshot-003.png)

### Tag v0.4

```bash
git checkout v0.4
```

Then, passed the image options to Toggler component as props. I am used to use background images for decorative purposes, so I left it as background, without alt.

Weather component data, however, only contained lat/long and was useless for display, so I left **mock data** in place in **Weather** component.

![Screenshot](/readme-screenshot-004.png)

### Tag v0.5

```bash
git checkout v0.5
```

Then I moved to second page and data set, copying page-one into page-two

> And when I saw the major changes to the data set, and the poor data structure of API data, my first thought was to call to backend team and talk to PO to switch to Vue or at least not to use TS :)

These major and improperly planned changes for prototyping are too obnoxious - SCRUM is SCRUM, but I could add some Wateerfall to it with planning better ahead.

Happily, with my love of **any** while prototyping, that was ok.

So, then I took another look on the backend endpoints and realised that using coordinates, I could get the weather data.

Fine, on page-two we will use async call for each weather Component mount.

I did so, and replaced the mock data on Weather card with data from server, before moving to **Buttons**.

This is how the app looked at that point:

![Screenshot](/readme-screenshot-005.png)


### Tag v0.6

```bash
git checkout v0.6
```

Then, according to Project Requirements (original readme) I had to implement **Button** components.

However, in frontend **button** is html **button** generally, so I'd rather call them **Toggler** instead for now to avoid ambiguity.

As there were no eye icons in icons folder I had to download icons in SVG (I used [FontAwesome](https://fontawesome.com/download)) and then changed their color from black to white [using this service](https://deeditor.com/) (as I was too lazy to use svg instead of img)

![Screenshot](/readme-screenshot-006.png)


### Tag v0.7

```bash
git checkout v0.7
```

Before moving to part-three I noticed I forgot to implement **Conditions** component from part2.

To my surprise, it was required to be a Component.

I would rather mutate original data or create a new nested data set and then base the ComponentList on it.

The complexity was because since Condition should be component, and because **Condition** is a Component that has **Lists** meaning recursion, very different approach with a store would be required to set the conditional recursion up.

I'm against obscure solutions with a lot of boilerplate code.

So while I know how to deal with React stores with useContext and useReducer, Redux and Zustand, I prefer to use
[this simple solution](https://dev.to/fabionogueira/react-without-redux-simple-store-4don)
 as my go-to tool for simple store.

So I moved it to **store** dir, made slight modifications to make it work, then created a set of hooks in composables folder to simplify the usage of them for various cases to make the code more clean (meaning more simple to read, easier to maintain, **less Technical Debt**)

![Screenshot](/readme-screenshot-007.png)


### Tag v0.8

```bash
git checkout v0.8
```

At this point I simply copied page-two code to page-three code


## Summary

All in all, the project took me around 20 hours, while in Vue it would take around 5 hours.

This is because I am not too familiar with React infrastructure and approaches, but also to in React it actually takes more time for simple things than in Vue.

I think I performed at a middle level as a React developer, and not sure if it shows my **Lead** or **Architect** Engineering capabilities.

As a **Team Lead** or **Manager**, I would have questions to either **PO** or **Architect**, as why the business processes are way too SCRUM and lack some sane Waterfall and provide a complete and clean Product Plan, as some **Development Time** and **Project Budget** was wasted.

As a **PO** or **Architect** I would put my best efforts to call **CTO** to avoid React.

With the average salaries on US market of around $10.000 per month per middle developer, 3x increase in development time of a 3-developer team costs $30.000 on average per month.

With better planning ahead, I could architect the data structures and the components better, saving Team's Human Hours and Product Budget.

At this point of my career, I believe picking proper stack and setting up business processes are more sometimes more important than technological solutions or code quality.
