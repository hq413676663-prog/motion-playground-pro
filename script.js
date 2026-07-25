/* ===== Motion Playground Pro — Main ===== */
/* global MotionAnimations */

(function() {
  'use strict';

  // ---- globals ----
  const MotionAnimations = {};
  window.MotionAnimations = MotionAnimations;

  // ---- load animation modules ----
  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  var modules = [
    'animations/tab.js',
    'animations/text.js',
    'animations/button.js',
    'animations/card.js',
    'animations/list.js'
  ];

  Promise.all(modules.map(loadScript)).then(init);

  // ---- config ----
  var categoryMeta = {
    tab:   { title: 'Tab Animations', icon: 'fa-window-maximize' },
    text:  { title: 'Text Animations', icon: 'fa-font' },
    button:{ title: 'Button Animations', icon: 'fa-hand-pointer' },
    card:  { title: 'Card Animations', icon: 'fa-credit-card' },
    list:  { title: 'List Animations', icon: 'fa-list-ul' }
  };

  var currentCategory = 'tab';

  // ---- DOM refs ----
  var navItems, demoGrid, headerTitle, demoCounter;

  function init() {
    navItems = document.querySelectorAll('#navList li');
    demoGrid = document.getElementById('demoGrid');
    headerTitle = document.getElementById('headerTitle');
    demoCounter = document.getElementById('demoCounter');

    // nav clicks
    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var cat = this.dataset.category;
        if (cat && cat !== currentCategory) switchCategory(cat);
      });
    });

    // copy buttons
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.btn-copy');
      if (!btn) return;
      var original = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Copied';
      setTimeout(function() { btn.innerHTML = original; }, 1200);
    });

    render('tab');
  }

  // ---- render category ----
  function render(key) {
    var demos = MotionAnimations[key];
    if (!demos || !demos.length) return;

    var meta = categoryMeta[key];
    headerTitle.textContent = meta.title;
    demoCounter.textContent = demos.length + ' demos';
    demoGrid.innerHTML = '';

    demos.forEach(function(demo, idx) {
      var card = document.createElement('div');
      card.className = 'demo-card';
      card.dataset.demoIndex = idx;

      // preview
      var preview = document.createElement('div');
      preview.className = 'demo-preview';
      var badge = document.createElement('div');
      badge.className = 'demo-badge';
      badge.textContent = key;
      preview.appendChild(badge);

      var previewContent = document.createElement('div');
      previewContent.className = 'anim-target';
      preview.appendChild(previewContent);
      card.appendChild(preview);

      // info
      var info = document.createElement('div');
      info.className = 'demo-info';

      var nameRow = document.createElement('div');
      nameRow.className = 'demo-name';
      nameRow.innerHTML = '<span>' + demo.name + '</span>';
      info.appendChild(nameRow);

      var params = document.createElement('div');
      params.className = 'demo-params';
      params.innerHTML =
        '<span><i class="fas fa-clock"></i> ' + demo.duration + '</span>' +
        '<span><i class="fas fa-hourglass-start"></i> ' + (demo.delay || '0s') + '</span>' +
        '<span class="curve-badge"><i class="fas fa-chart-line"></i> ' + demo.curve + '</span>';
      info.appendChild(params);

      var actions = document.createElement('div');
      actions.className = 'demo-actions';

      var cssTag = document.createElement('span');
      cssTag.style.cssText = 'font-size:11px; color:#a29bfe; background:rgba(108,92,231,0.12); padding:2px 10px; border-radius:30px;';
      cssTag.textContent = 'CSS';
      actions.appendChild(cssTag);

      var copyBtn = document.createElement('button');
      copyBtn.className = 'btn-copy';
      copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy CSS';
      copyBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        copyToClipboard(demo.css);
      });
      actions.appendChild(copyBtn);

      info.appendChild(actions);
      card.appendChild(info);
      demoGrid.appendChild(card);

      // init preview
      if (typeof demo.preview === 'function') {
        demo.preview(previewContent);
      }
    });
  }

  // ---- switch ----
  function switchCategory(key) {
    currentCategory = key;
    navItems.forEach(function(item) {
      item.classList.toggle('active', item.dataset.category === key);
    });
    render(key);
  }

  // ---- clipboard ----
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function(){});
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch(e) {}
      document.body.removeChild(ta);
    }
  }

})();
