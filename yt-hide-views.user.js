// ==UserScript==
// @name         Hide YouTube View Counts & Upload Age
// @namespace    https://github.com/MatRanc/yt-hide-views
// @version      1.0.0
// @description  Hides the "177K views • 11 hours ago" line under YouTube video titles.
// @author       MatRanc
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/MatRanc/yt-hide-views/main/yt-hide-views.user.js
// @updateURL    https://raw.githubusercontent.com/MatRanc/yt-hide-views/main/yt-hide-views.user.js
// ==/UserScript==

// ponytail: the views/age row is the only metadata row with a "•" delimiter, so :has() targets it and leaves the channel row alone.
GM_addStyle(`
  .ytContentMetadataViewModelMetadataRow:has(.ytContentMetadataViewModelDelimiter),
  ytd-video-meta-block #metadata-line {
    display: none !important;
  }
`);
