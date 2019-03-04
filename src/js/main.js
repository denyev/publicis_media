var mobileScreenWidth = window.matchMedia('(min-width: 320px)');
var phabletScreenWidth = window.matchMedia('(min-width: 768px)');

// Nav menu

var html = document.querySelector('html');
var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.toggler');

// Open/close menu use button

navToggle.addEventListener('click', function(event) {
    if (navMain.classList.contains('navigation--closed')) {
        navMain.classList.remove('navigation--closed');
        navMain.classList.add('navigation--opened');
        html.classList.add('page--overlay');
    } else {
        navMain.classList.add('navigation--closed');
        navMain.classList.remove('navigation--opened');
        html.classList.remove('page--overlay');
    }
});

// Close menu use overlay

document.addEventListener('click', function(event) {
    if (html.classList.contains('page--overlay')) {
        var overlay = document.querySelector('.page--overlay');

        if (event.target == overlay) {
            navMain.classList.add('navigation--closed');
            navMain.classList.remove('navigation--opened');
            html.classList.remove('page--overlay');
        }
    }
});

// Load more

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

var showItems = function(parent, items) {
    var parent = document.querySelector(parent);
    var items = parent.querySelectorAll(items);
    var hiddenClass = "visually-hidden";

    [].forEach.call(items, function (item, index) {
            item.classList.remove(hiddenClass);
    });
};

var toggleSlider = function() {
    if (phabletScreenWidth.matches) {
        showItems('.clients__list', '.clients__item');
        console.log("Screen width is at least 320px");
    } else {
        hideItems(
            '.clients__list',
            '.clients__item',
            '.more',
            6
        );
        console.log("Screen less than 320px");
    }
};

toggleSlider();

window.addEventListener('resize', function() {
    toggleSlider();
});

// Slider for section agencies

function agenciesSlider() {
    if (phabletScreenWidth.matches) {
        $('.agencies__list').owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            navContainerClass: 'agencies__controls',
            navClass: [
                'agencies__arrow agencies__arrow--left',
                'agencies__arrow agencies__arrow--right'
            ],
            dotsClass: 'agencies__pager',
            dotClass: 'agencies__pager-item',
            responsive: {
                1366: {
                    items: 4,
                }
            },
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

// Slider for section clients

function clientsSlider() {
    if (phabletScreenWidth.matches) {
        $('.clients__list').owlCarousel({
            items: 3,
            loop: true,
            margin: 18,
            dotsClass: false,
            nav: true,
            navContainerClass: 'clients__controls',
            navClass: [
                'clients__arrow clients__arrow--left',
                'clients__arrow clients__arrow--right'
            ],
            responsive: {
                768: {
                    items: 4,
                    margin: 35,
                },
                1366: {
                    items: 5,
                    margin: 21,
                },
                1920: {
                    margin: 101,
                    autoWidth: true,
                },
            },
        });
    }else{
        $('.owl-carousel').owlCarousel('destroy');
    }
}

$(document).ready(function(e) {
    clientsSlider();
});

$(window).resize(function() {
    clientsSlider();
});
