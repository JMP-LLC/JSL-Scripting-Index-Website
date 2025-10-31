/***
 * Credit to this discussion on th mkdocs repo: https://github.com/mkdocs/mkdocs/discussions/3177
 */
$(document).ready(function () {
  // https://clipboardjs.com/
  var selector_panel = document.querySelector(
    "ul > li.toctree-l1:nth-child(3)"
  );
  selector_panel.classList.add("current");
  var selectors = document.querySelectorAll("pre code");
  var copyButton =
    '<div class="clipboard"><span class="btn-neutral btn-clipboard" title="Copy to clipboard">⧉</span></div>';


  Array.prototype.forEach.call(selectors, function (selector) {
    selector.insertAdjacentHTML("beforebegin", copyButton);
  });

  var clipboard = new ClipboardJS(".btn-clipboard", {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling;
    },
  });
  var clipboard2 = new ClipboardJS(".headerlink", {
    text: function (trigger) {
      return trigger.href;
    },
  });

  clipboard.on("success", function (e) {
    e.clearSelection();

    // https://atomiks.github.io/tippyjs/v6/all-props/
    var tippyInstance = tippy(e.trigger, {
      content: "Copied",
      showOnCreate: true,
      trigger: "manual",
    });
    setTimeout(function () {
      tippyInstance.hide();
    }, 1000);
  });
  clipboard2.on("success", function (e) {
    e.clearSelection();

    // https://atomiks.github.io/tippyjs/v6/all-props/
    var tippyInstance = tippy(e.trigger, {
      content: "Copied",
      showOnCreate: true,
      trigger: "manual",
    });
    setTimeout(function () {
      tippyInstance.hide();
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a.headerlink').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default scroll behavior
            });
        });
    });

