/**
 * RPM ドキュメントサイト — メインスクリプト V1.0
 */
(function () {
  'use strict';

  /* ==========================================================================
   * 1. モバイルサイドバー
   * ========================================================================== */
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const hamburger = document.querySelector('.hamburger');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // モバイルでリンク押したら閉じる
  document.querySelectorAll('.sidebar-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 1024) closeSidebar();
    });
  });

  /* ==========================================================================
   * 2. アコーディオン (FAQ)
   * ========================================================================== */
  document.querySelectorAll('.accordion-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.accordion-item');
      var wasOpen = item.classList.contains('open');

      // 他を閉じる（オプション: 同時に1つだけ開く場合はコメント解除）
      // item.parentElement.querySelectorAll('.accordion-item').forEach(function (i) {
      //   i.classList.remove('open');
      // });

      if (wasOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });

  /* ==========================================================================
   * 3. タブ
   * ========================================================================== */
  document.querySelectorAll('.tab-container').forEach(function (container) {
    var btns = container.querySelectorAll('.tab-btn');
    var panels = container.querySelectorAll('.tab-panel');

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = this.getAttribute('data-tab');

        btns.forEach(function (b) { b.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });

        this.classList.add('active');
        var targetPanel = container.querySelector('#' + target);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  });

  /* ==========================================================================
   * 4. テーブル検索（マッピング定義ページ用）
   * ========================================================================== */
  document.querySelectorAll('.search-input[data-search-target]').forEach(function (input) {
    input.addEventListener('input', function () {
      var query = this.value.toLowerCase();
      var targetId = this.getAttribute('data-search-target');
      var table = document.getElementById(targetId);
      if (!table) return;

      var rows = table.querySelectorAll('tbody tr');
      rows.forEach(function (row) {
        if (row.classList.contains('table-section-row')) {
          row.style.display = query ? 'none' : '';
          return;
        }
        var text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  });

  /* ==========================================================================
   * 5. スクロールリビール（フェードインアニメーション）
   * ========================================================================== */
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // IntersectionObserver 非対応時はすべて表示
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ==========================================================================
   * 6. アクティブナビゲーションのハイライト
   * ========================================================================== */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.sidebar-nav a');
  // 既存の active をすべてクリアしてから、正しいリンクに付与
  navLinks.forEach(function (link) { link.classList.remove('active'); });
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ==========================================================================
   * 7. 目次内スムーススクロール（ same-page anchors）
   * ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
