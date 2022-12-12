<!DOCTYPE html>
<html class="loading" lang="{{ app()->getLocale() }}" data-textdirection="ltr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Создание сайтов. Разработка и внедрение CRM, ERP. Web-дизайн</title>
    <meta name="description" content="Создаем действительно работающие продукты для бизнеса. Сайты под ключ от логотипа до SEO-продвижения. IT компания Bitex 89507154922 89524365064">
    <link rel="icon" type="image/png" href="/icons/favicon.png">
    <link href="/css/main/app.css" rel="stylesheet">
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=d316255a-9a74-4e33-9562-f3f958125d8b" type="text/javascript"></script>
    <script src="/js/modules/map.js"></script>
    <script src="/js/main/app.js" defer></script>
</head>

<body>
    <!-- Header-->
    @include('template.header')

    <!-- Content -->
    @yield('content')

    <!-- Footer-->
    @include('template.footer')
    
    <!-- Service container -->
</body>
</html>
