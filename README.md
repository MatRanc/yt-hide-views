# Hide YouTube Views

A tiny userscript that hides the **view count and upload age** ("177K views • 11 hours ago") under video titles on YouTube.

## Install

1. Install a userscript manager: [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge) or [Violentmonkey](https://violentmonkey.github.io/).
   - On Chrome, you also need to turn on **Allow User Scripts** in the extension's details page (`chrome://extensions` → Tampermonkey → Details).
2. **[Click here to install the script](https://raw.githubusercontent.com/MatRanc/yt-hide-views/main/yt-hide-views.user.js)** and accept the prompt.

Tampermonkey checks this repo for updates automatically.

## How it works

A single CSS rule, using `:has()`, hides the metadata row that contains the "•" separator. The channel name row is left alone.

## License

[MIT](LICENSE)
