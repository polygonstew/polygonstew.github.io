 // ─── theme toggle ─────────────────────────────────────────────
  (function () {
    var KEY = 'polygonstew:theme';
    var html = document.documentElement;
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === 'amber' || saved === 'iron') {
      html.setAttribute('data-theme', saved);
    }
    function sync() {
      var t = html.getAttribute('data-theme');
      var btns = document.querySelectorAll('[data-theme-btn]');
      for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute('aria-pressed',
          btns[i].getAttribute('data-theme-btn') === t ? 'true' : 'false');
      }
    }
    sync();
    document.querySelectorAll('[data-theme-btn]').forEach(function (b) {
      b.addEventListener('click', function () {
        var t = b.getAttribute('data-theme-btn');
        html.setAttribute('data-theme', t);
        try { localStorage.setItem(KEY, t); } catch (e) {}
        sync();
      });
    });
  })();
