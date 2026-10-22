// Runs after "npm install": copies KaTeX into www/vendor/katex so it is bundled inside the APK (works offline).
const fs = require('fs'), path = require('path');
try {
  const d = path.join(__dirname, '..', 'node_modules', 'katex', 'dist');
  const o = path.join(__dirname, '..', 'www', 'vendor', 'katex');
  fs.mkdirSync(o, { recursive: true });
  ['katex.min.js', 'katex.min.css'].forEach(f => fs.copyFileSync(path.join(d, f), path.join(o, f)));
  fs.cpSync(path.join(d, 'fonts'), path.join(o, 'fonts'), { recursive: true });
  console.log('KaTeX copied to www/vendor/katex');
} catch (e) { console.warn('KaTeX copy skipped:', e.message); }
