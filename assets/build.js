// assets/build.js

const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const typography = require('@tailwindcss/typography');

const inputPath = 'main.css';
const outputPath = 'style.css';

const css = `
p {
  color: "red"
}
`;

postcss()
  .use(tailwindcss())
  .use(typography())
  .process(css, {
    from: inputPath,
    to: outputPath,
  })
  .then((result) => {
    console.log(result.css);
  });
