(function ($) {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });

  $('.menu__icon').on('click', function () {
    $(this).closest('.menu')
      .toggleClass('menu_state_open');
  });

  $('.menu__links-item').on('click', function () {
    // do something

    $(this).closest('.menu')
      .removeClass('menu_state_open');
  });


  if ($(".common-tabs").length) {
    $(".common-tabs").tabslet({
      controls: {
        prev: ".to-prev-tab",
        next: ".to-next-tab"
      }
    });
  }


  var collapsedTablesList = document.querySelectorAll(".price-table__wrapper");
  var COLLSPASED_CLASS_TBODY = "price-table__body--collapsed";

  collapsedTablesList.forEach(function (collapsedTable) {
    var collapsedTbody = collapsedTable.querySelector('[data-target="collapsed"]');
    var tbodyToggler = collapsedTable.querySelector('[data-target="tbody-toggler"]');

    collapsedTbody.classList.add(COLLSPASED_CLASS_TBODY);

    tbodyToggler.addEventListener("click", function (evt) {
      evt.preventDefault();

      var isCollapsedTbody = collapsedTbody.classList.contains(
        COLLSPASED_CLASS_TBODY
      );

      tbodyToggler.textContent = isCollapsedTbody ? "Скрыть" : "Показать еще";

      collapsedTbody.classList.toggle(COLLSPASED_CLASS_TBODY, !isCollapsedTbody);
      tbodyToggler.classList.toggle(
        "price-table__tbody-toggler--active",
        isCollapsedTbody
      );
    });
  });

})(jQuery);
