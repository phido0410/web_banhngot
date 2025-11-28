// ...existing code...
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname);
const FB_URL = 'https://www.facebook.com/profile.php?id=61583311258893';
const YT_URL = 'https://www.youtube.com/@sweetdreams.20';

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (name === 'node_modules') continue;
      walk(full, files);
    } else if (name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function updateAnchorTagHref(tag, newUrl) {
  if (/href\s*=\s*["']/.test(tag)) {
    return tag.replace(/href\s*=\s*(["'])(.*?)\1/i, `href="${newUrl}"`);
  }
  // inject href
  return tag.replace(/<a\b([^>]*)>/i, `<a$1 href="${newUrl}">`);
}

function replaceContent(content) {
  let out = content;

  // Anchors with aria-label="Facebook" or aria-label='Facebook' (case-insensitive)
  out = out.replace(/<a\b[^>]*\baria-label\s*=\s*["']\s*facebook\s*["'][^>]*>/gi, (tag) =>
    updateAnchorTagHref(tag, FB_URL)
  );

  // Anchors with aria-label="YouTube"
  out = out.replace(/<a\b[^>]*\baria-label\s*=\s*["']\s*youtube\s*["'][^>]*>/gi, (tag) =>
    updateAnchorTagHref(tag, YT_URL)
  );

  // Any href pointing to facebook (http(s)://...facebook...)
  out = out.replace(/href\s*=\s*(["'])(?:https?:\/\/)?(?:www\.)?facebook\.[^"']*\1/gi, `href="${FB_URL}"`);

  // Any href pointing to youtube.com or youtu.be
  out = out.replace(/href\s*=\s*(["'])(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)[^"']*\1/gi, `href="${YT_URL}"`);

  return out;
}

function backup(file) {
  const bak = file + '.bak';
  if (!fs.existsSync(bak)) fs.copyFileSync(file, bak);
}

function main() {
  const files = walk(ROOT);
  const modified = [];
  for (const file of files) {
    try {
      const txt = fs.readFileSync(file, 'utf8');
      const newTxt = replaceContent(txt);
      if (newTxt !== txt) {
        backup(file);
        fs.writeFileSync(file, newTxt, 'utf8');
        modified.push(path.relative(ROOT, file));
      }
    } catch (err) {
      console.error('Error:', file, err.message);
    }
  }
  console.log('Done. Files modified:', modified.length);
  modified.forEach(f => console.log(' -', f));
}

main();
// ...existing code...