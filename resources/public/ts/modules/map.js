ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [50.58157430344493,36.56784507801819],
            zoom: 12,
            controls: ['zoomControl', 'searchControl', 'geolocationControl']
            // controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([50.59999957291402, 36.57653249999998], {
            hintContent: 'Группа АА "Первая"',
            balloonContent: 'Пушкина, 49а, 2 этаж'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'icons/logo.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -40],
            
            // hintLayout: HintLayout,
            // balloonLayout: MyBalloonLayout,
        }),

        myPlacemarkWithContent = new ymaps.Placemark([50.56074507295268,36.571053000000006], {
            hintContent: 'Группа АА "Шаг за шагом"',
            balloonContent: 'Конева, 2а, корпус 3, офис 7',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'icons/logo.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -40],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);

        myMap.behaviors
        // Отключаем часть включенных по умолчанию поведений:
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        // .disable(['drag', 'rightMouseButtonMagnifier'])
});
