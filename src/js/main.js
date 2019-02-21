// Nav menu

var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__toggle');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('navigation--closed')) {
        navMain.classList.remove('navigation--closed');
        navMain.classList.add('navigation--opened');
    } else {
        navMain.classList.add('navigation--closed');
        navMain.classList.remove('navigation--opened');
    }
});

// Load more

var mobileScreenWidth = window.matchMedia('(min-width: 320px)');

var hideItems = function(parent, items, loadMoreBtn, maxItems) {
    var parent = document.querySelector(parent);
    var items = parent.querySelectorAll(items);
    var loadMoreBtn = document.querySelector(loadMoreBtn);
    var hiddenClass = "visually-hidden";

    [].forEach.call(items, function (item, index) {
        if (index > maxItems - 1) {
            item.classList.add(hiddenClass);
        }
    });

    loadMoreBtn.addEventListener('click', function () {
        [].forEach.call(document.querySelectorAll('.' + hiddenClass), function (item, index) {
            console.log(item);
            if (index < maxItems - 1) {
                item.classList.remove(hiddenClass);
            }

            // if (document.querySelectorAll('.' + hiddenClass).length === 0) {
            //     loadMoreBtn.style.display = 'none';
            // }
        });
    });
};

var showItems = function(parent, items, maxItems) {
    var parent = document.querySelector(parent);
    var items = parent.querySelectorAll(items);
    var hiddenClass = "visually-hidden";

    [].forEach.call(items, function (item, index) {
            item.classList.remove(hiddenClass);
    });
};

var toggleSlider = function() {
    if (mobileScreenWidth.matches) {
        showItems('.clients__list', '.clients__item');
        console.log("Screen width is at least 320px");
    } else {
        hideItems(
            '.clients__list',
            '.clients__item',
            '.clients__more',
            6
        );
        console.log("Screen less than 320px");
    }
};

toggleSlider();

window.addEventListener('resize', function() {
    // if (mobileScreenWidth.matches) {
    //     showItems('.clients__list', '.clients__item');
    //     console.log("Screen width is at least 320px");
    // } else {
    //     hideItems(
    //         '.clients__list',
    //         '.clients__item',
    //         '.clients__more',
    //         6
    //     );
    //     console.log("Screen less than 320px");
    // }
    toggleSlider();
});
