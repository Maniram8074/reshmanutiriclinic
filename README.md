# DietMed Clinical Academy Portal

A modular, high-conversion landing page for the **45-Day Clinical Dietitian Internship & Fellowship**, directed by **Dt. Sk. Reshma** (Senior Clinical Dietitian & HOD Department of Dietetics).

---

## 📁 Project Structure (Modular Chunks)

Instead of a monolithic file, the site is organized into independent modular chunks:

```text
reshmanutiriclinic/
│
├── assets/
│   └── reshma-profile.jpg         # High-resolution clinical portrait
│
├── css/
│   └── styles.css                 # Typography & smooth FAQ accordion styles
│
├── js/
│   └── main.js                    # Mobile menu toggle, FAQ accordion, form submission
│
├── sections/                      # Modular HTML Chunks (Edit each part here!)
│   ├── 1-header.html              # Top navigation bar, logo, and mobile drawer
│   ├── 2-hero.html                # Hero banner, cohort badge, CTAs, 4 trust pillars
│   ├── 3-matrix.html              # 45-Day Hospital Transition Matrix (Phases 1-3)
│   ├── 4-faculty.html             # Faculty & Leadership spotlight (Dt. Sk. Reshma)
│   ├── 5-ksheets.html             # Bedside patient K-Sheet blueprint & verification
│   ├── 6-apply.html               # 45-Day internship application form
│   ├── 7-faq.html                 # Interactive FAQ accordion
│   └── 8-footer.html              # Footer, accreditation badges, and admissions contact
│
├── build.py                       # Python assembler (Python 3)
├── build.js                       # Node.js assembler (Node.js)
├── build.bat                      # Windows one-click build launcher
└── index.html                     # Complete assembled production page
```

---

## 🛠️ How to Make Changes

1. Open any section file inside the [`sections/`](file:///c:/Users/ddiks/Documents/reshmanutriclinic/reshmanutiriclinic/sections) folder.
   - To edit the curriculum: edit [`sections/3-matrix.html`](file:///c:/Users/ddiks/Documents/reshmanutriclinic/reshmanutiriclinic/sections/3-matrix.html).
   - To edit Dt. Sk. Reshma's credentials/quote: edit [`sections/4-faculty.html`](file:///c:/Users/ddiks/Documents/reshmanutriclinic/reshmanutiriclinic/sections/4-faculty.html).
   - To edit the application form: edit [`sections/6-apply.html`](file:///c:/Users/ddiks/Documents/reshmanutriclinic/reshmanutiriclinic/sections/6-apply.html).
   - To edit the FAQs: edit [`sections/7-faq.html`](file:///c:/Users/ddiks/Documents/reshmanutriclinic/reshmanutiriclinic/sections/7-faq.html).
2. Save your file.
3. Run the assembler:
   - **Double-click `build.bat`** (or run `python build.py` / `node build.js` in terminal).
   - Your changes are instantly compiled into [`index.html`](file:///c:/Users/ddiks/Documents/reshmanutriclinic/reshmanutiriclinic/index.html).

---

## 🚀 Key Features

* **Internal Anchors with Offset**: Smooth scrolling to `#matrix`, `#faculty`, `#ksheets`, `#apply`, and `#faq` with `scroll-mt-24` ensuring the fixed navbar never obscures section headings.
* **Responsive Mobile Drawer**: Animated hamburger menu with auto-closing links on mobile screens.
* **Interactive Accordion**: Clickable FAQs with smooth expand/collapse and rotating chevron arrows.
* **In-Page Form Confirmation**: Replaces browser `alert()` with a clean confirmation banner and auto-reset.
