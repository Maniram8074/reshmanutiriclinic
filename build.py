"""
Build Script for DietMed Clinical Academy
Assembles modular sections from sections/ into index.html
"""
import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SECTIONS_DIR = os.path.join(BASE_DIR, "sections")
OUTPUT_FILE = os.path.join(BASE_DIR, "index.html")

SECTION_FILES = [
    "1-header.html",
    "2-hero.html",
    "3-matrix.html",
    "4-faculty.html",
    "5-ksheets.html",
    "6-apply.html",
    "7-faq.html",
    "8-footer.html",
]

TEMPLATE_START = """<!DOCTYPE html>
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
"""

TEMPLATE_END = """
  <!-- Interactive Scripts -->
  <script src="js/main.js"></script>
</body>
</html>
"""

def build():
    chunks = []
    for filename in SECTION_FILES:
        filepath = os.path.join(SECTIONS_DIR, filename)
        if os.path.exists(filepath):
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read().strip()
                chunks.append(f"  <!-- [Chunk: sections/{filename}] -->\n{content}\n")
        else:
            print(f"Warning: {filename} not found!")

    # Separate header & footer from main content
    header = chunks[0] if len(chunks) > 0 else ""
    footer = chunks[-1] if len(chunks) > 1 else ""
    main_sections = chunks[1:-1] if len(chunks) > 2 else []

    output_content = (
        TEMPLATE_START
        + "\n"
        + header
        + "\n  <main>\n"
        + "\n".join(main_sections)
        + "\n  </main>\n\n"
        + footer
        + TEMPLATE_END
    )

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(output_content)

    print(f"Successfully assembled {len(chunks)} chunks into index.html ({len(output_content)} bytes)")

if __name__ == "__main__":
    build()
