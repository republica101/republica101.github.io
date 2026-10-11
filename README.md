# tom-portfolio

Static portfolio site (HTML/CSS/JS), hosted on GitHub Pages.

## Structure

```
index.html      page markup
css/style.css   styles
js/main.js      scripts
assets/img/     images
.nojekyll       tells Pages to serve files as-is (no Jekyll processing)
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

then visit http://localhost:8000.

## Deploy

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
3. Site goes live at `https://<username>.github.io/<repo>/`
   (name the repo `<username>.github.io` to serve it at the root URL instead).
