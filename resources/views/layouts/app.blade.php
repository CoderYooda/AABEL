<!DOCTYPE html>
<html class="loading" lang="{{ app()->getLocale() }}" data-textdirection="ltr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="css/main/app.css" rel="stylesheet">
    <script src="js/main/app.js" defer></script>
</head>

<body>
    <!-- Header-->
    <header class="main-header">
        <div class="container">
            <a
                href="/"
                class="main-header__logo"
            >
                <img
                    src="/icons/logo.png"
                    alt="Логотип"
                >
            </a>

            <ul class="main-header__contacts">
                <li class="main-heade__contact">
                    <a href="tel:+79876543210" class="main-header__phone">
                        +7(987)654-32-10
                    </a>
                </li>
                
                <li class="main-heade__contact">
                    <a href="tel:+79876543210" class="main-header__phone">
                        +7(987)654-32-10
                    </a>
                </li>

                <li class="main-heade__contact">
                    <a href="tel:+79876543210" class="main-header__phone">
                        +7(987)654-32-10
                    </a>
                </li>
            </ul>
        </div>
    </header>

    <!-- Content -->
    @yield('content')

    <!-- Footer-->
    <footer class="main-footer">
        <div class="container"></div>
    </footer>
    
    <!-- Service container -->
</body>
</html>
