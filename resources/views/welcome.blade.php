<html5>
    <head>
        <link rel="stylesheet" href="{{ asset('./css/app.css') }}">
        <title>Pokedex</title>
    </head>


    <style>

        *{

            background-color: #DE3539;
        }


        .style{
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }

    </style>
    <body>
        <div class="d-flex justify-content-center style">
            <a class="btn btn-warning btn-lg pt-3 pb-3"href="{{ url('pokemon') }}">Abrir Pokedex</a>
        </div>
    </body>
</html5>
