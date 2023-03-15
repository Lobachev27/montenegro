/*Выпадающее меню*/

$(document).ready(function() {
  $('.header_burger').click(function(){
    $('.header-mobile').addClass('active');
  });

  $('.header_cross').click(function(){
    $('.header-mobile').removeClass('active');
  });
});

/*Главный слайдер*/

$(document).ready(function(){
  var slideName = $(".intro > .swiper-container .swiper-slide .intro_img_text");
  var swiper1 = new Swiper(".intro > .swiper-container", {
      loop: true,
      autoplay: {
          delay: 5000
      },
      slidesPerView: 1,
      grabCursor: "true",
      pagination: {
          el: '.intro .swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
              return '<div class="' + className + '"><div class="swiper_slide_name">' + $(slideName[index]).text() +'</div></div>';
          }
      }
  });
});

/*Слайдер с услугами*/

$(document).ready(function() {

    var screenWidth = $(window).width();
    if(screenWidth < 1620 && swiper2 == undefined) {
        var swiper2 = new Swiper('.service .swiper-container', {
            loop: true,
            slidesPerView: 5,
            initialSlide: 2,
            spaceBetween: 20,
            grabCursor: "true",
            freeMode: true,
            breakpoints: {
                1199: {
                    centeredSlides: 'true',
                    slidesPerView: 4
                },
                991: {
                    initialSlide: 0,
                    slidesPerView: 3
                },
                576: {
                    initialSlide: 0,
                    slidesPerView: 2
                }
            }
        });
    } else if (screenWidth > 1620 && swiper2 != undefined) {
        swiper2.destroy();
    }

    initSwiper();

    $(window).on('resize', function(){
        initSwiper();
    });

});

/*Слайдер Отдых в Черногории*/

$(document).ready(function() {
    var swiper3 = new Swiper(".info_slider .swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000
        },
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 50,
        grabCursor: "true",
        pagination: {
            el: ".info_slider .swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
        },
        breakpoints: {
            1199: {
                spaceBetween: 30
            },
            991: {
                spaceBetween: 30
            },
            767: {
                spaceBetween: 20
            },
            576: {
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1
            }
        }
    });
});

/*Слайдер Отели + Слайдер Статьи*/

$(document).ready(function() {
    var swiper4 = new Swiper(".hotel_slider .swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000
        },
        autoHeight: 'true',
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 45,
        grabCursor: "true",
        pagination: {
            el: ".hotel_slider .swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1
        },
        breakpoints: {
            1619: {
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
    });
});

/*Слайдер Аренда авто*/

$(document).ready(function() {

    var screenWidth = $(window).width();
    if(screenWidth < 1620 && swiper5 == undefined) {
        var swiper5 = new Swiper('.auto .swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            autoHeight: 'true',
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
            grabCursor: "true",
            pagination: {
                el: ".auto_slider .swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                400: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        });
    } else if (screenWidth > 1620 && swiper5 != undefined) {
        swiper5.destroy();
    }

    initSwiper();

    $(window).on('resize', function(){
        initSwiper();
    });

});

/*Слайдер Направления туров*/

$(document).ready(function() {
    var swiper6 = new Swiper(".directions_slider .swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000
        },
        autoHeight: 'true',
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 45,
        grabCursor: "true",
        breakpoints: {
            1619: {
                centeredSlides: 'true',
                slidesPerView: 5,
                spaceBetween: 30
            },
            1199: {
                centeredSlides: 'true',
                slidesPerView: 4,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
});

/*Слайдер Акции*/

$(document).ready(function() {
    var swiper7 = new Swiper(".stock_slider .swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000
        },
        autoHeight: 'true',
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 45,
        grabCursor: "true",
        breakpoints: {
            1619: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
});

/*Select*/

$(document).ready(function() {
    $('.filter_select_main').click(function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');}
        else {$(this).addClass('active');}
        if ($(this).next().hasClass('active')){
            $(this).next().removeClass('active');}
        else {$(this).next().addClass('active');}
    });
    $('.filter_select_item').click(function () {
        var text = $(this).text();
        $(this).parent('.filter_select_list').prev().text(text);
        $('.filter_select_list').removeClass('active');
        $('.filter_select_main').removeClass('active');
    });
    $(document).mouseup(function (e) {
        var container = $(".filter_select");
        if (container.has(this.target).length === 0){
            container.children().removeClass('active');
        }
    });
});

/*Инпут выбор даты*/

$(document).ready(function() {
    $( ".filter_calendar" ).datepicker({
            dateFormat: "d MM, yy",
            minDate: 0,
            showButtonPanel: true,
            changeMonth: false,
            changeYear: false
        }
    );
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        monthNamesShort: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        changeYear: true,
        changeMonth: true
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $(".filter_calendar").datepicker($.datepicker.regional["ru"]);
    return datepicker.regional['ru'];
});

$(document).ready(function() {
    if( document.querySelector('#datepicker2') ){
        document.querySelector('body').classList.add('order_hotel');
    }
});

/*Номера страниц*/

$(document).ready(function() {
    $(".page_nav_number").on("click", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
});

/*Google maps Montenegro-tours*/

var mapElement = document.getElementById('map');
if (mapElement) {
    google.maps.event.addDomListener(window, 'load', init);
}
function init() {
    var mapOptions = {
        zoom: 15,
        disableDefaultUI: true,
        center: new google.maps.LatLng(55.6345091, 37.4373893),
        styles: [
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
        ]
    };

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.6345091, 37.4373893),
        map: map,
        title: 'montenegro-tours',
        icon: {
            url: "/img/map-marker-big.png",
            scaledSize: new google.maps.Size(32, 48)
        }
    });
}

/*Google maps Hotel Monte Cristo */

var mapElement2 = document.getElementById('map_hmc');
if (mapElement2) {
    google.maps.event.addDomListener(window, 'load', init2);
}
function init2() {
    var mapOptions2 = {
        zoom: 15,
        disableDefaultUI: true,
        center: new google.maps.LatLng(42.4253269, 18.7695953),
        styles: [
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
        ]
    };

    var map2 = new google.maps.Map(mapElement2, mapOptions2);

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(42.4253269, 18.7695953),
        map: map,
        title: 'Hotel Monte Cristo',
        icon: {
            url: "/img/map-marker-big.png",
            scaledSize: new google.maps.Size(32, 48)
        }
    });
}

/*Google maps Apart Hotel Sea Fort */

var mapElement3 = document.getElementById('map_ahsf');
if (mapElement3) {
    google.maps.event.addDomListener(window, 'load', init3);
}
function init3() {
    var mapOptions3 = {
        zoom: 15,
        disableDefaultUI: true,
        center: new google.maps.LatLng(42.13642, 19.0547283),
        styles: [
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
        ]
    };

    var map3 = new google.maps.Map(mapElement3, mapOptions3);

    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(42.13642, 19.0547283),
        map: map,
        title: 'Apart Hotel Sea Fort',
        icon: {
            url: "/img/map-marker-big.png",
            scaledSize: new google.maps.Size(32, 48)
        }
    });
}
/*Модальные окна*/

$(document).ready(function() {
    $(".call_me").on("click", function() {
        $('#callMe').addClass("show");
        $('body').addClass('ov-hid');
    });
    $(".rent_auto").on("click", function() {
        $('#rentAuto').addClass("show");
        $('body').addClass('ov-hid');
    });
    $(".order_excursion").on("click", function() {
        $('#orderExcursion').addClass("show");
        $('body').addClass('ov-hid');
    });
    $('.close').click(function(){
        $('.modalDialog').removeClass('show');
        $('body').removeClass('ov-hid');
    });
});

