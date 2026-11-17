# Srinadh Challa — AI Engineer Portfolio

A responsive, dependency-free portfolio website built with HTML, CSS and vanilla JavaScript.

## Quick start
1. Extract this folder.
2. Open `index.html` in a browser.
3. Edit `content.js` to update your profile, experience, projects, skills, education and links.
4. Replace the PDF in `assets/` when your resume changes.

No Node.js, npm, build tools or framework installation is required.

## Updating content
All portfolio content is in `content.js`.
- Add a project by adding another object to `projects`.
- Add an experience entry to `experience`.
- Add/remove skill groups in `skills`.
- Add achievements to `achievements`.
- Add GitHub/demo URLs to a project using `repo` and `demo`. Leave them empty to hide the buttons.

Keep project descriptions accurate and avoid sharing confidential employer/client code, data, architecture or screenshots.

## Free hosting
### GitHub Pages
1. Create a public GitHub repository named `ChallaSrinadh1729.github.io`.
2. Upload the contents of this folder to the repository root (not the outer folder).
3. In GitHub, open Settings → Pages.
4. Choose Deploy from a branch → `main` → `/ (root)` → Save.
5. Your site will be available at `https://challasrinadh1729.github.io` (GitHub account casing is normalized in the URL).

### Cloudflare Pages
1. Push this folder to a GitHub repository.
2. In Cloudflare dashboard, go to Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository. Choose no framework / static HTML; leave the build command empty and output directory as `/`.
4. Deploy.

### Netlify
1. Sign in to Netlify.
2. Drag and drop the extracted project folder into the manual deploy area, or import the GitHub repository.
3. No build command is needed; publish directory is the project root.

## Before publishing
- Confirm LinkedIn and GitHub profile URLs.
- Add verified repository/demo links for each project.
- Check that the resume PDF is current.
- Review all content for employer confidentiality.
- Test on mobile and desktop.

## Structure
- `index.html` — page sections and layout
- `styles.css` — visual design and responsive styles
- `content.js` — all editable portfolio content
- `script.js` — renders content and navigation
- `assets/` — resume and favicon
