<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {!! SEO::generate() !!}
        <meta property="og:image" content={{ $ogImage }} />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />

        <link rel="canonical" href="{{ url()->current() }}" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        
        <!-- Styles -->
        <link href="./assets/css/style.css" rel="stylesheet">

        <!-- Styles -->
        @vite(['./resources/css/app.css', './resources/js/app.js'])

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JDYHWF1KQP"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JDYHWF1KQP');
        </script>
        
    </head>
    <body class="antialiased">
        
        @include('inc.navbar')

            <div class="min-h-screen bg-dots-darker bg-gray-100 selection:bg-yellow-500 selection:text-white">
                @yield('content')    
            </div>
            
        @include('inc.footer')

        <script src="./assets/js/index.js"></script>
    </body>

</html>
