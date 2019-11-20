// ==UserScript==
// @name     YoutubeTVRefuser
// @version  1
// @grant    none
// @include *.youtube.com*
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @require https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// ==/UserScript==

function foundYouTubeTVOffer(node){
  $(node).parent().parent().parent().remove();
  alert("killed youtube tv offer");
}
waitForKeyElements("h2:contains('YouTube TV')", foundYouTubeTVOffer);
