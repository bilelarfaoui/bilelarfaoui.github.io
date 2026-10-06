<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep this portfolio as a single TanStack index route with semantic theme tokens in `src/styles.css`, because its content is one coherent professional profile.
- Treat unverified résumé details as absent rather than inventing qualifications, employers, or contact information, because professional claims must be authentic.
- Open the uploaded resume PDF in a new browser tab from the Resume section rather than embedding a preview, because the user prefers the real file and embedded PDF viewers render blank in preview browsers; keep a separate download link for saving it.
- GitHub Pages builds set GITHUB_PAGES=true to prerender static HTML into dist/client; static files the site links to live in public/ so they work on any host.
