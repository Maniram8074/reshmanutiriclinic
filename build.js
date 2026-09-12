/**
 * Node.js Build Script for DietMed Clinical Academy
 * Assembles modular sections from sections/ into index.html
 */
const fs = require('fs');
const path = require('path');

const SECTIONS_DIR = path.join(__dirname, 'sections');
const OUTPUT_FILE = path.join(__dirname, 'index.html');

const SECTION_FILES = [
  '1-header.html',
  '2-hero.html',
  '3-matrix.html',
  '4-faculty.html',
  '5-ksheets.html',
  '6-apply.html',
  '7-faq.html',
  '8-footer.html',
];

const TEMPLATE_START = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DietMed Clinical Academy | 45-Day Hospital Dietitian Internship</title>
  <meta name="description" content="Launch your clinical dietitian career with real hospital experience. 45-day intensive 1-on-1 online internship with bedside K-Sheet cases led by Dt. Sk. Reshma." />

  <!-- Google Fonts: Inter & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />

  <!-- Font Awesome 6.5.1 Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
              950: '#022c22',
            }
          }
        }
      }
    };
  </script>

  <!-- Custom Styles -->
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body class="bg-slate-50 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
`;

const TEMPLATE_END = `
  <!-- Interactive Scripts -->
  <script src="js/main.js"></script>
</body>
</html>
`;

function build() {
  const chunks = [];
  for (const filename of SECTION_FILES) {
    const filepath = path.join(SECTIONS_DIR, filename);
    if (fs.existsSync(filepath)) {
      const content = fs.readFileSync(filepath, 'utf-8').trim();
      chunks.push(`  <!-- [Chunk: sections/${filename}] -->\n${content}\n`);
    } else {
      console.warn(`Warning: ${filename} not found!`);
    }
  }

  const header = chunks[0] || '';
  const footer = chunks[chunks.length - 1] || '';
  const mainSections = chunks.slice(1, -1);

  const outputContent =
    TEMPLATE_START +
    '\n' +
    header +
    '\n  <main>\n' +
    mainSections.join('\n') +
    '\n  </main>\n\n' +
    footer +
    TEMPLATE_END;

  fs.writeFileSync(OUTPUT_FILE, outputContent, 'utf-8');
  console.log(`Successfully assembled ${chunks.length} chunks into index.html (${outputContent.length} bytes)`);
}

build();
