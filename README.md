# elevation

**A very small css utility to generate color themes**

It is nothing more than a set of css variables accessible everywhere in your code.
Can be used with all modern js frameworks like Vue.js

## Why this tool?

I was getting tired of changing every color class evrey time i was switching from a CSS framework to another.
Not much work you would say.

Bulma: .is-pimary
TailwindCSS, Bootstrap: .bg-primary

But every config file is different though well documented.

So I made a unique utility to set up color sheme.

## How it works

It injectes variables in the :root pseudo-class.
Define your set of colors ans it will simply create a panel of color tons.

```scss
:root{
--primary-lighten, --primary-lighten2
}
```

## How to use

Use your variables in pure css within your classes

```scss
.btn{
background: var(--primary-lighten2)
}
```
Or use it like me, in Vue.js
With some small mixins inspired by Vuetify.js
Get theme [here](https://github.com/Areskul/mixins#Mixins)

```html
<div color="primary-lighten" text="danger-darken3"/>
```

## Set up/ Customize your themes

Let's say you've made a variable.css file like below
Import elevation.scss functions in your main.js

variable.css
```scss
@use "../core/palette/.scss" as palette;
```

## Use it in your project


And finally include it in your main.ts / or main.js

main.ts
```javascript
import "@/scss/variable.scss"
```

With the mixins (more helpers than mixins) that comes with

component.vue
```javascript
import { elevation } from "core/mixins/styles";
export default {
  mixins: [elevation],
};
```
