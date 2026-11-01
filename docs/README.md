# Orbix website

A standalone, responsive HTML, CSS, and JavaScript landing page for the Orbix
resident app. Open `index.html` in a browser or serve this folder with a static
web server. The Orbix brand mark is bundled in this folder.

## Preview with Live Server

Open this `orbix-website-and-feedback` folder in VS Code, then open `index.html`
and select **Go Live**. The project settings point Live Server to this folder
and open `index.html` by default.

## Google OAuth consent-screen links

The site includes a home page, privacy policy, and terms of service. When
published over HTTPS, use the public home page and the `privacy.html` and
`terms.html` page URLs in the Google Auth Platform consent-screen fields.
Review the privacy and terms text for your actual operator and practices before
publishing; these project templates are not legal advice.

## Set the download link

Edit `config/site-config.js` and set `appDownloadUrl` to the URL for the
published APK or app-store listing. Until a release URL is available, the
Download Orbix buttons explain that the download link is coming soon.

## Feedback storage

Feedback is saved in the visitor's browser using `localStorage`; it is not
uploaded to a server. Storage limits are in `config/feedback-config.js`.

Because this is a static site, feedback is not centrally collected. To receive
feedback from visitors on different devices, connect the form to a trusted
backend and configure appropriate privacy and access controls.

## Supabase configuration

Set the project URL and publishable key in `config/supabase-config.js` when
connecting the site to Supabase. These values are included in browser code, so
use only the Supabase publishable key and configure Row Level Security policies.
Never put a `service_role` key or other secret key in this file.

## GitHub Pages links

After GitHub Pages is enabled for the `main` branch using the `/docs` folder,
the project site URLs are:

- Home: `https://ken-rookie.github.io/orbix/`
- Privacy: `https://ken-rookie.github.io/orbix/privacy.html`
- Terms: `https://ken-rookie.github.io/orbix/terms.html`

These shared-host URLs are public. Google production OAuth verification may
also require an organization-owned, Search Console-verified domain; publishing
on `github.io` alone does not establish ownership of that domain.
