# DietMed Clinical Academy – Refactored Website

This version separates the original single-file page into maintainable files and adds working navigation between pages.

## Structure

- `index.html` – home page
- `pages/internship.html` – 45-day internship
- `pages/curriculum.html` – curriculum and mentorship
- `pages/case-sheets.html` – clinical case-sheet content
- `pages/faculty.html` – Dt. Sk. Reshma / leadership
- `pages/certification.html` – certification flow
- `pages/apply.html` – application form
- `css/styles.css` – all shared styling
- `js/site.js` – easy-to-edit site name, owner details, navigation and contact details
- `js/app.js` – shared header/footer, mobile navigation and form demo behavior
- `assets/resha-profile.jpg` – portrait cropped from the supplied visiting-card image

## Where to make common edits

Open `js/site.js` to change:

1. Academy name/tagline
2. Dt. Sk. Reshma's title/credentials/expertise
3. Phone, WhatsApp and email
4. Header navigation and destination pages

Open the individual HTML file to edit the content of that page.

## Navigation

The old `data-path` links that pointed to `#` have been replaced with real page links. Header navigation is generated from `js/site.js`, so changing a destination in one place updates the desktop and mobile menus and footer links.

## Form

`pages/apply.html` is currently a front-end demo. The form prevents a real submission and shows a success message. Connect it to Formspree, Google Apps Script, your own PHP/Node backend, etc. when you are ready.

## Important content cleanup made

- Removed the previous faculty profile from the website.
- Kept the supplied professional profile separate from unrelated third-party branding/details.
- Removed the old fictional/placeholder contact details from the visible site and made contact details editable in `js/site.js`.
- Replaced unverified certification/recognition wording with neutral wording where exact proof/details were not supplied.

## Run locally

You can open `index.html` directly for a basic preview. For best results, use a local static server, for example VS Code Live Server.
