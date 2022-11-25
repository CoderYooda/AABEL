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
        <div class="container"></div>
    </header>

    <!-- Content -->
    <main>
        @yield('content')
    </main>

    <!-- Footer-->
    <footer class="main-footer">
        <div class="container"></div>
    </footer>
    
    <!-- Service container -->
</body>
</html>
