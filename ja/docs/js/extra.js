/***
 * Credit to this discussion on th mkdocs repo: https://github.com/mkdocs/mkdocs/discussions/3177
 */
$(document).ready(function() {
  // https://clipboardjs.com/
  var selector_panel = document.querySelector('ul > li.toctree-l1:nth-child(2)');
  selector_panel.classList.add("current");
  var selectors = document.querySelectorAll('pre code');
  var copyButton = '<div class="clipboard"><span class="btn-neutral btn-clipboard" title="Copy to clipboard">⧉</span></div>';

  var lastDiv = document.querySelector('div[role="contentinfo"]');
  var lastDivChild1 = lastDiv.nextSibling;
  var lastDivChild2 = lastDivChild1.nextSibling;
  var lastDivChild3 = lastDivChild2.nextSibling;
  var lastDivChild4 = lastDivChild3.nextSibling;
  var lastDivChild5 = lastDivChild4.nextSibling;
  var lastDivChild6 = lastDivChild5.nextSibling;
  lastDivChild1.remove();
  lastDivChild2.remove();
  lastDivChild3.remove();
  lastDivChild4.remove();
  lastDivChild5.remove();
  lastDivChild6.remove();
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
        content: 'コピーしました。',
        showOnCreate: true,
        trigger: 'manual',
      },
    );
    setTimeout(function() { tippyInstance.hide(); }, 1000);
  });
});