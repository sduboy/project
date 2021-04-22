<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>

</head>
<body>
<div id="app">
    <div style="background-color: ; margin-top: 9px; width: 70px; position: fixed; margin-left: 50px; z-index: 1000;">
        <nav class="navbar-expand-lg navbar-dark bg-dark container">
            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav ml-auto">
                    @php $locale = session()->get('locale'); @endphp
                    <li class="nav-item dropdown">
                        <a style="color=#fff; display: flex;" id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            @switch($locale)
                                @case('en')
                                <img style="width: 20px; margin-right: 10px;" src="{{asset('img/gb.png')}}"> {{__("English")}}
                                @break
                                @case('ru')
                                <img style="width: 20px; margin-right: 10px;" src="{{asset('img/ru.png')}}"> {{__("Russian")}}
                                @break
                                @default
                                <img style="width: 20px; margin-right: 10px;" src="{{asset('img/gb.png')}}">
                            @endswitch
                            <span class="caret"></span>
                        </a>
                        <div style="color=#fff;" class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a style="display: flex;" class="dropdown-item" href="/en"><img style="width: 20px; margin-right: 10px;" src="{{asset('img/gb.png')}}"> {{__("English")}}</a>
                            <a style="display: flex;" class="dropdown-item" href="/ru"><img style="width: 20px; margin-right: 10px;" src="{{asset('img/ru.png')}}"> {{__("Russian")}}</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <main class="py-4">
        @yield('content')
    </main>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</div>  
</body>
</html>