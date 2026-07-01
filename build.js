const fs = require('fs');
const path = require('path');
const { minify: minifyJS } = require('terser');
const CleanCSS = require('clean-css');
const { minify: minifyHTML } = require('html-minifier-terser');

const dist = path.join(__dirname, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);
fs.mkdirSync(path.join(dist, 'js'));
fs.mkdirSync(path.join(dist, 'resources'));

// Copy non-CSS resources (images, fonts, PDFs, etc.)
for (const file of fs.readdirSync('resources')) {
  if (path.extname(file).toLowerCase() === '.css') continue;
  fs.copyFileSync(path.join('resources', file), path.join(dist, 'resources', file));
}

// Minify CSS
const cssClean = new CleanCSS({ level: 2 });
for (const file of ['viice.css', 'caviar.css', 'youtubeModal.css', 'viiceStyle.css']) {
  const input = fs.readFileSync(path.join('resources', file), 'utf8');
  const result = cssClean.minify(input);
  fs.writeFileSync(path.join(dist, 'resources', file), result.styles);
  console.log(`CSS: ${file}`);
}

(async () => {
  // Minify JS
  for (const file of ['jquery.js', 'content.js', 'youtubeModal.jquery.js', 'scrollScript.js']) {
    const input = fs.readFileSync(path.join('js', file), 'utf8');
    const result = await minifyJS(input);
    fs.writeFileSync(path.join(dist, 'js', file), result.code);
    console.log(`JS:  ${file}`);
  }

  // Minify HTML
  const html = fs.readFileSync('index.html', 'utf8');
  const minified = await minifyHTML(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  });
  fs.writeFileSync(path.join(dist, 'index.html'), minified);
  console.log('HTML: index.html');

  console.log('\nBuild complete → dist/');
})();
