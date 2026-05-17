/* ── Modal/dialog accessibility helpers ──────────────────────────────
 * Adds focus management to every element with role="dialog":
 *  - When opened (gains .open class), move focus to the first focusable
 *    element inside, remembering the previously focused element.
 *  - When closed (.open removed), return focus to where it was.
 *  - While open, trap Tab / Shift+Tab inside the dialog.
 *
 * No per-modal wiring needed — works with the existing open/close
 * functions because they all toggle the .open class.
 */
(function () {
  var FOCUSABLE = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  // Per-dialog state: { prevFocus, keyHandler }
  var dialogState = new WeakMap();

  function isVisible(el) {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }

  function focusables(root) {
    var nodes = root.querySelectorAll(FOCUSABLE);
    var out = [];
    for (var i = 0; i < nodes.length; i++) {
      if (isVisible(nodes[i])) out.push(nodes[i]);
    }
    return out;
  }

  function onDialogOpened(dialog) {
    if (dialogState.has(dialog)) return;

    var prev = document.activeElement;
    var items = focusables(dialog);
    // Prefer the first focusable that isn't a "Close" button so users land
    // on meaningful content rather than the dismissal control.
    var target = items.find(function (n) {
      return !/close|dismiss/i.test(n.getAttribute('aria-label') || n.textContent || '');
    }) || items[0] || dialog;

    // Ensure the dialog itself can receive focus as a fallback.
    if (target === dialog && !dialog.hasAttribute('tabindex')) {
      dialog.setAttribute('tabindex', '-1');
    }

    // Defer one tick so display/visibility transitions don't swallow focus.
    setTimeout(function () { try { target.focus({ preventScroll: false }); } catch (_) {} }, 0);

    var keyHandler = function (e) {
      if (e.key !== 'Tab') return;
      var current = focusables(dialog);
      if (current.length === 0) { e.preventDefault(); dialog.focus(); return; }
      var first = current[0];
      var last = current[current.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    dialog.addEventListener('keydown', keyHandler);
    dialogState.set(dialog, { prevFocus: prev, keyHandler: keyHandler });
  }

  function onDialogClosed(dialog) {
    var state = dialogState.get(dialog);
    if (!state) return;
    dialog.removeEventListener('keydown', state.keyHandler);
    dialogState['delete'](dialog);
    var prev = state.prevFocus;
    if (prev && typeof prev.focus === 'function' && document.contains(prev)) {
      try { prev.focus({ preventScroll: false }); } catch (_) {}
    }
  }

  function isDialog(el) {
    return el && el.nodeType === 1 &&
      (el.getAttribute('role') === 'dialog' || el.getAttribute('aria-modal') === 'true');
  }

  function watchDialog(dialog) {
    if (dialog.dataset.a11yWired === '1') return;
    dialog.dataset.a11yWired = '1';
    if (dialog.classList.contains('open')) onDialogOpened(dialog);
    new MutationObserver(function () {
      if (dialog.classList.contains('open')) onDialogOpened(dialog);
      else onDialogClosed(dialog);
    }).observe(dialog, { attributes: true, attributeFilter: ['class'] });
  }

  function init() {
    var dialogs = document.querySelectorAll('[role="dialog"]');
    for (var i = 0; i < dialogs.length; i++) watchDialog(dialogs[i]);

    // Also watch for late-added dialogs.
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var added = records[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var n = added[j];
          if (isDialog(n)) watchDialog(n);
          if (n.querySelectorAll) {
            var inner = n.querySelectorAll('[role="dialog"]');
            for (var k = 0; k < inner.length; k++) watchDialog(inner[k]);
          }
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
