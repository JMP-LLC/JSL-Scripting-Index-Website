/***
 * Credit to this discussion on th mkdocs repo: https://github.com/mkdocs/mkdocs/discussions/3177
 */
$(document).ready(function() {
  // https://clipboardjs.com/
  var selector_panel = document.querySelector('ul > li.toctree-l1:nth-child(3)');
  selector_panel.classList.add("current");
  var selectors = document.querySelectorAll('pre code');
  var copyButton = '<div class="clipboard"><span class="btn-neutral btn-clipboard" title="Copy to clipboard">⧉</span></div>';
  Array.prototype.forEach.call(selectors, function(selector){
    selector.insertAdjacentHTML('beforebegin', copyButton);
  });
  var clipboard = new ClipboardJS('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling;
    }
  });

  clipboard.on('success', function (e) {
    e.clearSelection();

    // https://atomiks.github.io/tippyjs/v6/all-props/
    var tippyInstance = tippy(
      e.trigger,
      {
        content: 'Kopiert',
        showOnCreate: true,
        trigger: 'manual',
      },
    );
    setTimeout(function() { tippyInstance.hide(); }, 1000);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const checkSearch = setInterval(function () {
    const searchResults = document.getElementById("mkdocs-search-results");
    if (searchResults) {
      clearInterval(checkSearch);

      // Use MutationObserver to watch for search result changes
      const observer = new MutationObserver(function () {
        formatSearchResults();
      });

      observer.observe(searchResults, {
        childList: true,
        subtree: true,
      });

      formatSearchResults();
    }
  }, 100);
});
function formatSearchResults() {
  const articles = document.querySelectorAll("#mkdocs-search-results article");

  articles.forEach((article) => {
    const link = article.querySelector("h3 a[href]");
    if (link && !article.querySelector(".search-result-path")) {
      const url = link.getAttribute("href");
      const breadcrumb = formatUrlAsBreadcrumb(url);

      const pathDiv = document.createElement("div");
      pathDiv.className = "search-result-path";
      pathDiv.textContent = breadcrumb;

      // Insert after the h3 element
      const h3 = article.querySelector("h3");
      h3.insertAdjacentElement("afterend", pathDiv);
    }
  });
}

function formatUrlAsBreadcrumb(url) {
  // Decode URL encoding (handles %20, %2F, etc.)
  // Decode twice in case of double encoding
  url = decodeURIComponent(decodeURIComponent(url));

  // Alternatively, you can also manually replace %20 if needed
  url = url.replace(/%20/g, " ");

  // Split path and anchor
  const [pathPart, anchor] = url.split("#");

  // Remove leading slash, dot
  let path = pathPart.replace(/^[./]+/, "");

  // Remove .html extension
  path = path.replace(/\.html$/, "");

  // Remove index or trailing slash
  path = path.replace(/\/index$/, "").replace(/\/$/, "");

  if (!path && !anchor) return "Home";

  // Split by / and format with >
  const parts = path.split("/").filter((p) => p);

  let breadcrumb = "";

  // If only one part and it's a file, don't show breadcrumb
  if (parts.length === 1) {
    breadcrumb = parts[0]
      .replace(/\.html$/, "")
      .replace(/[-_]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else if (parts.length > 0) {
    breadcrumb = parts
      .map((part) => {
        return part
          .replace(/\.html$/, "")
          .replace(/[-_]/g, " ")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      })
      .join(" > ");
  }

  // Add anchor/section if it exists
  if (anchor) {
    const formattedAnchor = anchor
      .replace(/[-_]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    breadcrumb += (breadcrumb ? " > " : "") + "#" + formattedAnchor;
  }

  return breadcrumb || "Home";
}
