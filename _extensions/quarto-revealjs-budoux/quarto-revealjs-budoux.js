window.RevealQuartoRevealjsBudoux = function () {
  return {
    id: "RevealQuartoRevealjsBudoux",
    init: function (deck) {
      // BudouXのJavaScriptライブラリを読み込む
      var script = document.createElement('script');
      script.src = 'https://unpkg.com/budoux/bundle/budoux-ja.min.js';
      script.onload = function () {
        var slides = deck.getSlides();
        slides.forEach(function(slide) {
          // 'no-budoux'クラスを持つスライドはスキップ
          if (!slide.classList.contains('no-budoux')) {
            // スライド内の<p>, <li>, <h1>, <h2>, ..., <h6>タグにbudoux-jaタグを追加
            var elements = slide.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6');
            elements.forEach(function(element) {
              var text = element.innerText;
              var budouxElement = document.createElement('budoux-ja');
              budouxElement.innerText = text;
              element.innerHTML = '';
              element.appendChild(budouxElement);
            });
          }
        });
      };
      document.head.appendChild(script);
    },
  };
};
