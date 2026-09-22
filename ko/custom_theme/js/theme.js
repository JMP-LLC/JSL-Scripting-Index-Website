// overrides/js/theme.js
window.SphinxRtdTheme = window.SphinxRtdTheme || {
  StickyNav: { init: function () {} },
  Navigation: { enable: function () {} }
};

// ========================================================
// CONFIGURATION
// ========================================================
// 1. Put your direct GitHub repository URL here:
const GITHUB_REPO_URL = "https://github.com/JMP-LLC/JSL-Scripting-Index-Website";

// 2. Languages matching the two-column popup:
const SITE_LANGUAGES = [
  { code: "en",    name: "English",   prefix: "" },
  { code: "de",    name: "Deutsch",   prefix: "/de" },
  { code: "es",    name: "Español",   prefix: "/es" },
  { code: "fr",    name: "Français",  prefix: "/fr" },
  { code: "it",    name: "Italiano",  prefix: "/it" },
  { code: "ja",    name: "日本語",     prefix: "/ja" },
  { code: "ko",    name: "한국어",     prefix: "/ko" },
  { code: "zh-cn", name: "简体中文",   prefix: "/zh-cn" },
];

$(document).ready(function () {
  const $container = $("#dynamic-nav-container");

  // ========================================================
  // 1. NATIVE READTHEDOCS MOBILE & TABLES
  // ========================================================
  $(document).on("click", "[data-toggle='wy-nav-shift']", function () {
    $("[data-toggle='wy-nav-shift']").toggleClass("shift");
    $("[data-toggle='rst-versions']").toggleClass("shift");
  });

  $(document).on("click", ".wy-menu-vertical .current ul li a", function () {
    $("[data-toggle='wy-nav-shift']").removeClass("shift");
    $("[data-toggle='rst-versions']").removeClass("shift");
  });

  $("table.docutils:not(.heatmap)").wrap("<div class='wy-table-responsive'></div>");

 // ========================================================
  // 2. CLIPBOARD & UNICODE-SAFE HEADERLINK ANCHORS
  // ========================================================
  function copyTextToClipboard(text, triggerEl) {
    // 1. Try modern native clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showCopiedTooltip(triggerEl);
      }).catch(function () {
        fallbackCopy(text, triggerEl);
      });
    } else {
      fallbackCopy(text, triggerEl);
    }
  }

  function fallbackCopy(text, triggerEl) {
    if (typeof ClipboardJS !== "undefined") return; // Handled by ClipboardJS
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      showCopiedTooltip(triggerEl);
    } catch (e) {}
    document.body.removeChild(textArea);
  }

  function showCopiedTooltip(triggerEl) {
    if (typeof tippy !== "undefined") {
      var tippyInstance = tippy(triggerEl, {
        content: " 복사됨",
        showOnCreate: true,
        trigger: "manual",
      });
      setTimeout(function () {
        tippyInstance.hide();
      }, 1000);
    }
  }

  function setupClipboardAndCode() {
    // A. CODE BLOCK COPY BUTTONS
    var selectors = document.querySelectorAll("pre code");
    var copyButton = '<div class="clipboard"><span class="btn-neutral btn-clipboard" title="Copy to clipboard"><i class="fa fa-copy" aria-hidden="true"></i></span></div>';

    Array.prototype.forEach.call(selectors, function (selector) {
      if (!selector.parentElement.querySelector(".clipboard")) {
        selector.insertAdjacentHTML("beforebegin", copyButton);
      }
    });

    $(document).off("click", ".btn-clipboard").on("click", ".btn-clipboard", function (e) {
      var codeEl = this.parentNode.nextElementSibling;
      var textToCopy = codeEl ? codeEl.innerText : "";
      copyTextToClipboard(textToCopy, this);

      // Brief checkmark swap
      var $icon = $(this).find("i.fa");
      if ($icon.length) {
        $icon.removeClass("fa-copy").addClass("fa-check");
        setTimeout(function () {
          $icon.removeClass("fa-check").addClass("fa-copy");
        }, 1200);
      }
    });

    // B. UNICODE-SAFE HEADERLINK (ANCHOR) CLICK HANDLER
    $(document).off("click", "a.headerlink").on("click", "a.headerlink", function (e) {
      e.preventDefault();

      // Decode the URL so users copy clean Unicode (e.g. #über-uns instead of #%C3%BCber-uns)
      var cleanUrl = decodeURI(this.href);
      copyTextToClipboard(cleanUrl, this);

      // Update URL in browser address bar without jump
      if (history.pushState) {
        history.pushState(null, "", cleanUrl);
      }

      // Smooth scroll safely to Unicode heading ID (works for German, Chinese, Japanese, etc.)
      var rawHash = this.getAttribute("href") || "";
      var targetId = decodeURIComponent(rawHash.replace(/^#/, ""));
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  setupClipboardAndCode();

  // ========================================================
  // 3. SEARCH RESULTS BREADCRUMB FORMATTER (UNICODE-SAFE)
  // ========================================================
  const checkSearch = setInterval(function () {
    const searchResults = document.getElementById("mkdocs-search-results");
    if (searchResults) {
      clearInterval(checkSearch);

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

        const h3 = article.querySelector("h3");
        h3.insertAdjacentElement("afterend", pathDiv);
      }
    });
  }

  function formatUrlAsBreadcrumb(url) {
    // Safe decode: prevents "URI malformed" crash on double-encoded non-ASCII characters
    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    url = url.replace(/%20/g, " ");

    const [pathPart, anchor] = url.split("#");
    let path = pathPart.replace(/^[./]+/, "");
    path = path.replace(/\.html$/, "");
    path = path.replace(/\/index$/, "").replace(/\/$/, "");

    if (!path && !anchor) return "Home";

    const parts = path.split("/").filter((p) => p);
    let breadcrumb = "";

    if (parts.length === 1) {
      breadcrumb = parts[0]
        .replace(/\.html$/, "")
        .replace(/[-_]/g, " ");
    } else if (parts.length > 0) {
      breadcrumb = parts
        .map((part) => part.replace(/\.html$/, "").replace(/[-_]/g, " "))
        .join(" > ");
    }

    if (anchor) {
      let cleanAnchor = anchor.replace(/[-_]/g, " ");
      try {
        cleanAnchor = decodeURIComponent(cleanAnchor);
      } catch (e) {}
      breadcrumb += (breadcrumb ? " > " : "") + "#" + cleanAnchor;
    }

    return breadcrumb || "Home";
  }

  // ========================================================
  // 4. EXPAND BUTTON STYLING (15px)
  // ========================================================
  function injectNativeThemeStyles() {
    if (document.getElementById("nav-native-rtd-styles")) return;
    const style = document.createElement("style");
    style.id = "nav-native-rtd-styles";
    style.textContent = `
      .wy-menu-vertical li span.toctree-expand {
        display: inline-block !important;
        font-family: FontAwesome !important;
        font-style: normal !important;
        font-weight: normal !important;
        font-size: 15px !important;
        line-height: 1 !important;
        margin-right: 8px !important;
        margin-left: 0 !important;
        float: none !important;
        border: none !important;
        background: transparent !important;
        cursor: pointer !important;
        vertical-align: middle !important;
        position: relative !important;
        top: -1px !important;
        color: #777 !important;
        user-select: none !important;
        transition: color 0.15s ease;
      }
      .wy-menu-vertical li span.toctree-expand:hover {
        color: #333 !important;
      }
      .wy-menu-vertical li span.toctree-expand:before {
        content: "\\f196" !important;
        display: inline-block !important;
      }
      .wy-menu-vertical li.current > a > span.toctree-expand:before,
      .wy-menu-vertical li.current > span.toctree-expand:before {
        content: "\\f147" !important;
        display: inline-block !important;
      }
      .wy-menu-vertical li span.toctree-expand:after {
        display: none !important;
        content: "" !important;
      }
    `;
    document.head.appendChild(style);
  }

  if (!$container.length) return;

  const basePrefix = $container.attr("data-base-prefix") || "/";
  const version = $container.attr("data-nav-v") || "1";
  const NAV_URL = `${basePrefix}nav-content.html?v=${version}`.replace(/\/+/g, "/");
  const CACHE_NAME = "mkdocs-nav-cache";

  // ========================================================
  // 5. ACCORDION & EXPAND BUTTONS
  // ========================================================
  function setupExpanders() {
    $(".wy-menu-vertical li").each(function () {
      var $li = $(this);
      if ($li.children("ul").length) {
        var $link = $li.children("a");
        if (!$link.children(".toctree-expand").length) {
          $link.prepend('<span class="toctree-expand"></span>');
        }
      }
    });

    $(document)
      .off("click", ".wy-menu-vertical .toctree-expand, .wy-menu-vertical li:has(ul) > a")
      .on("click", ".wy-menu-vertical .toctree-expand, .wy-menu-vertical li:has(ul) > a", function (e) {
        var $link = $(this).closest("a");
        var href = $link.attr("href");

        var clickedButton = $(e.target).hasClass("toctree-expand") || $(e.target).closest(".toctree-expand").length;
        var isDeadLink = !href || href === "#" || href === "javascript:void(0)";

        if (clickedButton || isDeadLink) {
          e.preventDefault();
          e.stopPropagation();

          var $li = $(this).closest("li");
          var $ul = $li.children("ul");
          if (!$ul.length) return;

          if ($li.hasClass("current")) {
            $li.removeClass("current");
            $ul.slideUp(180);
          } else {
            $li.siblings("li.current").removeClass("current").children("ul").slideUp(180);
            $li.addClass("current");
            $ul.slideDown(180);
          }
        }
      });
  }

  // ========================================================
  // 6. ACTIVE LINK HIGHLIGHTING
  // ========================================================
  function highlightActivePage() {
    var currentPath = window.location.pathname.replace(/\/$/, "");

    $(".wy-menu-vertical li.current").removeClass("current");
    $(".wy-menu-vertical a.current").removeClass("current");
    $(".wy-menu-vertical li > ul").hide();

    var matched = false;

    $(".wy-menu-vertical a").each(function () {
      var href = $(this).attr("href");
      if (!href || href === "#") return;

      var cleanHref = href.replace(/\/$/, "");
      var isMatch = false;

      if (cleanHref === "" || cleanHref === "/index.html") {
        isMatch = (currentPath === "" || currentPath === "/index.html");
      } else {
        isMatch = (currentPath === cleanHref || currentPath.endsWith(cleanHref));
      }

      if (isMatch) {
        $(this).addClass("current");
        var $parents = $(this).parents("li");
        $parents.addClass("current");
        $parents.children("ul").show();
        matched = true;
        return false;
      }
    });

    // If on the Home / Welcome page, open Objects (the 3rd category) AND reveal its sub-items:
    if (!matched) {
      var selector_panel = document.querySelector("ul > li.toctree-l1:nth-child(2)");
      if (selector_panel) {
        selector_panel.classList.add("current");
        $(selector_panel).children("ul").show(); // <-- Reveals the sub-items under Objects
      }
    }
  }

  // ========================================================
  // 7. GITHUB REPO BUTTON & POPOVER LANGUAGE DROPDOWN
  // ========================================================
  function injectHeaderElements() {
    const $aside = $(".wy-breadcrumbs-aside");
    if (!$aside.length || $("#custom-header-actions").length) return;

    // Remove the default MkDocs "Edit on GitHub" link
    $aside.find("a[href*='edit']").remove();

    const currentPath = window.location.pathname;
    let currentLangCode = "en";

    for (const lang of SITE_LANGUAGES) {
      if (lang.prefix && (currentPath.startsWith(lang.prefix + "/") || currentPath === lang.prefix)) {
        currentLangCode = lang.code;
        break;
      }
    }

    // Build the language grid items
    let langGridHtml = "";
    SITE_LANGUAGES.forEach((lang) => {
      const isCurrent = lang.code === currentLangCode;
      const activeStyle = isCurrent ? "font-weight: bold; color: #2980b9;" : "color: #333;";
      const targetUrl = (lang.prefix + "/index.html").replace(/\/+/g, "/");

      langGridHtml += `
        <a href="${targetUrl}" class="lang-option" style="
          display: block;
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          padding: 3px 0;
          cursor: pointer;
          ${activeStyle}
        ">${lang.name}</a>
      `;
    });

    const headerActionsHtml = `
      <li id="custom-header-actions" style="display:inline-flex; align-items:center; list-style:none; margin-left:15px; position:relative;">
        
        <!-- 1. GITHUB REPOSITORY LINK -->
        <a href="${GITHUB_REPO_URL}" target="_blank" rel="noopener" title="View GitHub Repository" style="color:#404040; margin-right:16px; text-decoration:none;">
          <i class="fa fa-github" style="font-size: 19px; vertical-align: middle;"></i>
        </a>

        <!-- 2. LOCALIZATION GLOBE & POPOVER -->
        <div id="lang-dropdown-wrapper" style="position:relative; display:inline-block;">
          <span id="lang-menu-btn" title="Change language" style="cursor:pointer; color:#404040;">
            <i class="fa fa-globe" style="font-size: 18px; vertical-align: middle;"></i>
          </span>

          <!-- Floating Popover Card -->
          <div id="lang-popover" style="
            display: none;
            position: absolute;
            top: 100%;
            right: -6px;
            margin-top: 10px;
            background: #ffffff;
            border-radius: 4px;
            box-shadow: 0 4px 18px rgba(0,0,0,0.18);
            padding: 16px 22px;
            min-width: 240px;
            z-index: 9999;
          ">
            <!-- Triangle Pointer -->
            <div style="
              position: absolute;
              top: -8px;
              right: 9px;
              width: 0;
              height: 0;
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-bottom: 8px solid #ffffff;
            "></div>

            <!-- Two-Column Grid -->
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              column-gap: 28px;
              row-gap: 12px;
            ">
              ${langGridHtml}
            </div>
          </div>
        </div>
      </li>
    `;

    $aside.prepend(headerActionsHtml);

    // Toggle popover visibility
    $("#lang-menu-btn").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $("#lang-popover").fadeToggle(140);
    });

    // Close when clicking anywhere outside
    $(document).on("click", function (e) {
      if (!$(e.target).closest("#lang-dropdown-wrapper").length) {
        $("#lang-popover").fadeOut(100);
      }
    });
  }

  // ========================================================
  // 8. CACHED INITIAL NAVIGATION LOAD (CACHE BUSTING)
  // ========================================================
  function renderNav(html) {
    $container.html(html);
    injectNativeThemeStyles();
    setupExpanders();
    highlightActivePage();
    injectHeaderElements();
  }

  async function initNav() {
    var cache = null;
    var cachedRes = null;

    if ("caches" in window) {
      try {
        cache = await caches.open(CACHE_NAME);
        cachedRes = await cache.match(NAV_URL);
      } catch (e) {}
    }

    if (cachedRes) {
      var html = await cachedRes.text();
      renderNav(html);
      return;
    }

    try {
      var res = await fetch(NAV_URL);
      if (!res.ok) throw new Error("HTTP " + res.status);
      var freshHtml = await res.text();
      renderNav(freshHtml);

      if (cache) {
        try {
          await cache.put(NAV_URL, new Response(freshHtml, {
            headers: { "Content-Type": "text/html" }
          }));

          const keys = await cache.keys();
          for (const request of keys) {
            if (request.url.includes("/nav-content.html") && !request.url.endsWith(NAV_URL)) {
              await cache.delete(request);
            }
          }
        } catch (e) {}
      }
    } catch (err) {
      console.error(err);
      $container.html('<div style="padding:1rem; color:#c00;">Failed to load navigation.</div>');
    }
  }

  initNav();
});