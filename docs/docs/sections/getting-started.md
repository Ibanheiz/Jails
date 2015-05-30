# Getting started

## Old fashion way

1. Just download [jails.min](https://github.com/Javiani/Jails/blob/master/source/jails.min.js).
2. Create `config.js` file

You'll need to follow framework folder structure in order to make jails work and make a sense.
You may take a look on:

- [Todo MVC example](//jails-org.github.io/Jails/todomvc/)

## Gulp way ( Better )

If you want to "compile" your code you can use **gulp-jails** to take advantage of scaffolding and building tasks.

- Install it, `npm install gulp-jails`
- Install local gulp, `npm install gulp`
- Create and execute **gulp-jails** on your `gulpfile.js`


```js
// gulpfile.js
require('gulp-jails')();
```
