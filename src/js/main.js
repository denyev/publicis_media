// Nav menu

var body = document.querySelector('body');
var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.toggler');

// Open/close menu use button

navToggle.addEventListener('click', function(event) {
    if (navMain.classList.contains('navigation--closed')) {
        navMain.classList.remove('navigation--closed');
        navMain.classList.add('navigation--opened');
        body.classList.add('page--overlay');
    } else {
        navMain.classList.add('navigation--closed');
        navMain.classList.remove('navigation--opened');
        body.classList.remove('page--overlay');
    }
});

// Close menu use overlay

document.addEventListener('click', function(event) {
    if (body.classList.contains('page--overlay')) {
        var overlay = document.querySelector('.page--overlay');

        if (event.target == overlay) {
            navMain.classList.add('navigation--closed');
            navMain.classList.remove('navigation--opened');
            body.classList.remove('page--overlay');
        }
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
    toggleSlider();
});

// Slider

var tabletScreenWidth = window.matchMedia('(min-width: 768px)');

function agenciesSlider() {
    if (tabletScreenWidth.matches) {
        $('.agencies__list').owlCarousel({
            items: 3,
            loop:true,
            nav:true,
            navContainerClass: 'agencies__controls',
            navClass: [
                'agencies__arrow agencies__arrow--left',
                'agencies__arrow agencies__arrow--right'
            ],
        });
    }else{
        $('.owl-carousel').owlCarousel('destroy');
    }
}

$(document).ready(function(e) {
    agenciesSlider();
});

$(window).resize(function() {
    agenciesSlider();
});
