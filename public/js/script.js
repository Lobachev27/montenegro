$(document).ready(function(){$(".header_burger").click(function(){$(".header-mobile").addClass("active")}),$(".header_cross").click(function(){$(".header-mobile").removeClass("active")})}),$(document).ready(function(){var r=$(".intro > .swiper-container .swiper-slide .intro_img_text");new Swiper(".intro > .swiper-container",{loop:!0,autoplay:{delay:5e3},slidesPerView:1,grabCursor:"true",pagination:{el:".intro .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'+t+'"><div class="swiper_slide_name">'+$(r[e]).text()+"</div></div>"}}})}),$(document).ready(function(){var e,t=$(window).width();t<1620&&null==e?e=new Swiper(".service .swiper-container",{loop:!0,slidesPerView:5,initialSlide:2,spaceBetween:20,grabCursor:"true",freeMode:!0,breakpoints:{1199:{centeredSlides:"true",slidesPerView:4},991:{initialSlide:0,slidesPerView:3},576:{initialSlide:0,slidesPerView:2}}}):1620<t&&null!=e&&e.destroy(),initSwiper(),$(window).on("resize",function(){initSwiper()})}),$(document).ready(function(){new Swiper(".info_slider .swiper-container",{loop:!0,autoplay:{delay:3e3},slidesPerView:2,slidesPerGroup:1,spaceBetween:50,grabCursor:"true",pagination:{el:".info_slider .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},breakpoints:{1199:{spaceBetween:30},991:{spaceBetween:30},767:{spaceBetween:20},576:{spaceBetween:20},480:{slidesPerView:1}}})}),$(document).ready(function(){new Swiper(".hotel_slider .swiper-container",{loop:!0,autoplay:{delay:3e3},autoHeight:"true",slidesPerView:4,slidesPerGroup:1,spaceBetween:45,grabCursor:"true",pagination:{el:".hotel_slider .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},breakpoints:{1619:{spaceBetween:30},1199:{slidesPerView:3,spaceBetween:30},800:{slidesPerView:2,spaceBetween:30},400:{slidesPerView:1,spaceBetween:30}}})}),$(document).ready(function(){var e,t=$(window).width();t<1620&&null==e?e=new Swiper(".auto .swiper-container",{loop:!0,autoplay:{delay:3e3},autoHeight:"true",slidesPerView:4,slidesPerGroup:1,spaceBetween:30,grabCursor:"true",pagination:{el:".auto_slider .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1},breakpoints:{1199:{slidesPerView:3,spaceBetween:30},800:{slidesPerView:2,spaceBetween:30},400:{slidesPerView:1,spaceBetween:30}}}):1620<t&&null!=e&&e.destroy(),initSwiper(),$(window).on("resize",function(){initSwiper()})}),$(document).ready(function(){new Swiper(".directions_slider .swiper-container",{loop:!0,autoplay:{delay:3e3},autoHeight:"true",slidesPerView:5,slidesPerGroup:1,spaceBetween:45,grabCursor:"true",breakpoints:{1619:{centeredSlides:"true",slidesPerView:5,spaceBetween:30},1199:{centeredSlides:"true",slidesPerView:4,spaceBetween:20},991:{slidesPerView:3,spaceBetween:20},576:{slidesPerView:2,spaceBetween:20}}})}),$(document).ready(function(){new Swiper(".stock_slider .swiper-container",{loop:!0,autoplay:{delay:3e3},autoHeight:"true",slidesPerView:4,slidesPerGroup:1,spaceBetween:45,grabCursor:"true",breakpoints:{1619:{slidesPerView:4,spaceBetween:30},1199:{slidesPerView:3,spaceBetween:20},991:{slidesPerView:2,spaceBetween:20},576:{slidesPerView:2,spaceBetween:20}}})}),$(document).ready(function(){$(".filter_select_main").click(function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active"),$(this).next().hasClass("active")?$(this).next().removeClass("active"):$(this).next().addClass("active")}),$(".filter_select_item").click(function(){var e=$(this).text();$(this).parent(".filter_select_list").prev().text(e),$(".filter_select_list").removeClass("active"),$(".filter_select_main").removeClass("active")}),$(document).mouseup(function(e){var t=$(".filter_select");0===t.has(this.target).length&&t.children().removeClass("active")})}),$(document).ready(function(){return $(".filter_calendar").datepicker({dateFormat:"d MM, yy",minDate:0,showButtonPanel:!0,changeMonth:!1,changeYear:!1}),$.datepicker.regional.ru={closeText:"Закрыть",prevText:"&#x3c;Пред",nextText:"След&#x3e;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Нед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",changeYear:!0,changeMonth:!0},$.datepicker.setDefaults($.datepicker.regional.ru),$(".filter_calendar").datepicker($.datepicker.regional.ru),datepicker.regional.ru}),$(document).ready(function(){document.querySelector("#datepicker2")&&document.querySelector("body").classList.add("order_hotel")}),$(document).ready(function(){$(".page_nav_number").on("click",function(){$(this).addClass("active").siblings().removeClass("active")})});var mapElement=document.getElementById("map");function init(){var e={zoom:15,disableDefaultUI:!0,center:new google.maps.LatLng(55.6345091,37.4373893),styles:[{featureType:"landscape.man_made",elementType:"geometry",stylers:[{color:"#f7f1df"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#d0e3b4"}]},{featureType:"landscape.natural.terrain",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"geometry",stylers:[{color:"#fbd3da"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#bde6ab"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffe15f"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#efd151"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"black"}]},{featureType:"transit.station.airport",elementType:"geometry.fill",stylers:[{color:"#cfb2db"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#a2daf2"}]}]},e=new google.maps.Map(mapElement,e);new google.maps.Marker({position:new google.maps.LatLng(55.6345091,37.4373893),map:e,title:"montenegro-tours",icon:{url:"/img/map-marker-big.png",scaledSize:new google.maps.Size(32,48)}})}mapElement&&google.maps.event.addDomListener(window,"load",init);var mapElement2=document.getElementById("map_hmc");function init2(){var e={zoom:15,disableDefaultUI:!0,center:new google.maps.LatLng(42.4253269,18.7695953),styles:[{featureType:"landscape.man_made",elementType:"geometry",stylers:[{color:"#f7f1df"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#d0e3b4"}]},{featureType:"landscape.natural.terrain",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"geometry",stylers:[{color:"#fbd3da"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#bde6ab"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffe15f"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#efd151"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"black"}]},{featureType:"transit.station.airport",elementType:"geometry.fill",stylers:[{color:"#cfb2db"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#a2daf2"}]}]};new google.maps.Map(mapElement2,e),new google.maps.Marker({position:new google.maps.LatLng(42.4253269,18.7695953),map:map,title:"Hotel Monte Cristo",icon:{url:"/img/map-marker-big.png",scaledSize:new google.maps.Size(32,48)}})}mapElement2&&google.maps.event.addDomListener(window,"load",init2);var mapElement3=document.getElementById("map_ahsf");function init3(){var e={zoom:15,disableDefaultUI:!0,center:new google.maps.LatLng(42.13642,19.0547283),styles:[{featureType:"landscape.man_made",elementType:"geometry",stylers:[{color:"#f7f1df"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#d0e3b4"}]},{featureType:"landscape.natural.terrain",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"geometry",stylers:[{color:"#fbd3da"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#bde6ab"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffe15f"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#efd151"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"black"}]},{featureType:"transit.station.airport",elementType:"geometry.fill",stylers:[{color:"#cfb2db"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#a2daf2"}]}]};new google.maps.Map(mapElement3,e),new google.maps.Marker({position:new google.maps.LatLng(42.13642,19.0547283),map:map,title:"Apart Hotel Sea Fort",icon:{url:"/img/map-marker-big.png",scaledSize:new google.maps.Size(32,48)}})}mapElement3&&google.maps.event.addDomListener(window,"load",init3),$(document).ready(function(){$(".call_me").on("click",function(){$("#callMe").addClass("show"),$("body").addClass("ov-hid")}),$(".rent_auto").on("click",function(){$("#rentAuto").addClass("show"),$("body").addClass("ov-hid")}),$(".order_excursion").on("click",function(){$("#orderExcursion").addClass("show"),$("body").addClass("ov-hid")}),$(".close").click(function(){$(".modalDialog").removeClass("show"),$("body").removeClass("ov-hid")})});