ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [50.59008021107705, 36.60557470290482],
            zoom: 14,
            controls: ['zoomControl', 'searchControl', 'geolocationControl']
            // controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        HintLayout = ymaps.templateLayoutFactory.createClass(`
            <div class='ya-hint'>
                <i class='ya-hint__icon'>
                    <svg width="228" height="69" viewBox="0 0 228 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="icon__fill" d="M75.2129 11.0254V18.4358V19.5203H75.7268H92.1328V19.701V25.4401V28.8288V57.7476V59.0129H93.3927H101.313H102.573V57.7476V28.8288V26.5412V19.701V19.5203H119.493V11.0254V9.76013H118.233H88.1525H76.4729H75.2129V11.0254Z" fill="white"/>
                        <path class="icon__fill" d="M57.5723 11.0254V57.7476V59.0129H58.8323H66.7522H68.0122V57.7476V11.0254V9.76013H66.7522H58.8323H57.5723V11.0254Z" fill="white"/>
                        <path class="icon__fill" d="M168.213 0H181.394L201.531 25.9071L214.082 9.76017H227.263L208.122 34.3865L227.263 59.0129H217.195C215.164 59.0129 213.416 58.1565 212.167 56.5491L201.531 42.866L181.394 68.7731H168.213L194.94 34.3865L168.213 0V0Z" fill="white"/>
                        <path class="icon__fill" d="M0 43.7525V19.5203V9.76013H6.34205H10.3499H29.8533C39.0331 9.76013 45.3331 15.6343 45.3331 23.2256C45.3331 26.8924 43.6503 29.9155 40.6629 31.6875C40.2667 31.9225 39.8611 32.1155 39.4486 32.3182C44.8508 34.8066 48.5731 37.3088 48.5731 44.0111C48.5731 52.958 41.8219 59.0129 31.7432 59.0129H6.34205H1.26002H0V57.7476V46.3077V45.3879V43.7525V43.7525ZM10.3499 19.5203C10.3499 30.7758 10.3499 40.2402 10.3499 49.1623H31.4733C35.7032 49.1623 38.1332 47.0838 38.1332 43.9207C38.1332 40.3962 35.8831 38.6792 31.4733 38.6792H23.1111L15.5248 28.919H18.0654H23.7181H29.9432C32.8231 28.919 34.9832 27.0211 34.9832 24.2196C34.9832 21.3277 33.0933 19.5203 29.9432 19.5203H23.2238H10.3499V19.5203Z" fill="white"/>
                        <path class="icon__fill" d="M126.692 35.1431V38.4989V49.2532V52.609C126.692 56.1364 129.557 59.0134 133.07 59.0134H165.122H165.662V58.9296V57.1066V49.2465V49.1627H165.132H165.122H137.998H137.132V38.4989H161.072H165.662V32.2827V28.7388H161.072H155.803H137.132H133.07C129.557 28.7388 126.692 31.6157 126.692 35.1431V35.1431Z" fill="white"/>
                        <path class="icon__fill" d="M165.662 13.116V11.0254V9.76013H164.402H151.883H133.07C129.557 9.76013 126.692 12.6371 126.692 16.1644V19.5203H137.132H151.883H155.803H159.284H165.662V13.116Z" fill="white"/>
                    </svg>
                </i>
                <p class="ya-hint__text">
                    IT компания
                </p>
            </div>
        `,
        {
            // Определяем метод getShape, который
            // будет возвращать размеры макета хинта.
            // Это необходимо для того, чтобы хинт автоматически
            // сдвигал позицию при выходе за пределы карты.
            getShape: function () {
                var el = this.getElement(),
                    result = null;
                if (el) {
                    var firstChild = el.firstChild;
                    result = new ymaps.shape.Rectangle(
                        new ymaps.geometry.pixel.Rectangle([
                            [0, 0],
                            [firstChild.offsetWidth, firstChild.offsetHeight]
                        ])
                    );
                }
                return result;
            }
        });

        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(`
            <div class='ya-hint'>
                HI
            </div>
        `);

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            title: 'Bitex',
            subtitle: "IT компания полного цикла",
            address: "Bitex",
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: `
                <i class='ya-baloon__icon'>
                    <svg width="228" height="69" viewBox="0 0 228 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="icon__fill" d="M75.2129 11.0254V18.4358V19.5203H75.7268H92.1328V19.701V25.4401V28.8288V57.7476V59.0129H93.3927H101.313H102.573V57.7476V28.8288V26.5412V19.701V19.5203H119.493V11.0254V9.76013H118.233H88.1525H76.4729H75.2129V11.0254Z" fill="white"/>
                        <path class="icon__fill" d="M57.5723 11.0254V57.7476V59.0129H58.8323H66.7522H68.0122V57.7476V11.0254V9.76013H66.7522H58.8323H57.5723V11.0254Z" fill="white"/>
                        <path class="icon__fill" d="M168.213 0H181.394L201.531 25.9071L214.082 9.76017H227.263L208.122 34.3865L227.263 59.0129H217.195C215.164 59.0129 213.416 58.1565 212.167 56.5491L201.531 42.866L181.394 68.7731H168.213L194.94 34.3865L168.213 0V0Z" fill="white"/>
                        <path class="icon__fill" d="M0 43.7525V19.5203V9.76013H6.34205H10.3499H29.8533C39.0331 9.76013 45.3331 15.6343 45.3331 23.2256C45.3331 26.8924 43.6503 29.9155 40.6629 31.6875C40.2667 31.9225 39.8611 32.1155 39.4486 32.3182C44.8508 34.8066 48.5731 37.3088 48.5731 44.0111C48.5731 52.958 41.8219 59.0129 31.7432 59.0129H6.34205H1.26002H0V57.7476V46.3077V45.3879V43.7525V43.7525ZM10.3499 19.5203C10.3499 30.7758 10.3499 40.2402 10.3499 49.1623H31.4733C35.7032 49.1623 38.1332 47.0838 38.1332 43.9207C38.1332 40.3962 35.8831 38.6792 31.4733 38.6792H23.1111L15.5248 28.919H18.0654H23.7181H29.9432C32.8231 28.919 34.9832 27.0211 34.9832 24.2196C34.9832 21.3277 33.0933 19.5203 29.9432 19.5203H23.2238H10.3499V19.5203Z" fill="white"/>
                        <path class="icon__fill" d="M126.692 35.1431V38.4989V49.2532V52.609C126.692 56.1364 129.557 59.0134 133.07 59.0134H165.122H165.662V58.9296V57.1066V49.2465V49.1627H165.132H165.122H137.998H137.132V38.4989H161.072H165.662V32.2827V28.7388H161.072H155.803H137.132H133.07C129.557 28.7388 126.692 31.6157 126.692 35.1431V35.1431Z" fill="white"/>
                        <path class="icon__fill" d="M165.662 13.116V11.0254V9.76013H164.402H151.883H133.07C129.557 9.76013 126.692 12.6371 126.692 16.1644V19.5203H137.132H151.883H155.803H159.284H165.662V13.116Z" fill="white"/>
                    </svg>
                </i>
            `,

            balloonContentBody: `
                <div>
                    <p class="ya-baloon__contact">
                        <span>
                            Адрес:
                        </span>
                        <span>
                            г.Белгород, ул.Волчанская, д.1в, оф.1
                        </span>
                    </p>

                    <p class="ya-baloon__contact ya-baloon__contact--numbers">
                        <span>
                            Телефон:
                        </span>
                        <span>
                            +7 950 715 49 22
                        </span>
                    </p>
                </div>
            `,
            
            balloonContentFooter: `
                <p class="ya-baloon__footer">
                    До встречи!
                </p> 
            `,
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/map-target.svg',
            // Размеры метки.
            iconImageSize: [45, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -60],
            
            hintLayout: HintLayout,
            // balloonLayout: MyBalloonLayout,
        }),

        myPlacemarkWithContent = new ymaps.Placemark([50.59008021107705, 36.60557470290482], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/map-target.png',
            // Размеры метки.
            iconImageSize: [90, 120],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -50],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        // .add(myPlacemarkWithContent);

        myMap.behaviors
        // Отключаем часть включенных по умолчанию поведений:
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        .disable(['drag', 'rightMouseButtonMagnifier'])
});
