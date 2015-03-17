<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Peppes Pizza Party</title>

        <!-- Bootstrap -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="index.css" rel="stylesheet">
        <link href="forstaSidaFront.css" rel="stylesheet">
        <link href="forstaSidaBack.css" rel="stylesheet">
        <link href="andraSidaFront.css" rel="stylesheet">
        <link href="andraSidaBack.css" rel="stylesheet">
        <link href="sistaSidaFront.css" rel="stylesheet">
    </head>
    <body class="body-1">


        <div class="container">

            <!--meny-->

            <div class="row circle-row">
                <div class="col-lg-12 meny-div">
                    <section class="col-lg-6 col-lg-offset-3 container meny-container">                       

                        <div class="meny-framsida">
                            <figure class="meny-framsida-front"><h1>front Framsida</h1></figure>
                            <figure class="meny-framsida-back"></figure>
                        </div>
                        <div class="meny-forstasida">
                            <figure class="meny-forstasida-front"> <?php include 'forstaSidaFront.inc.php'; ?> </figure>
                            <figure class="meny-forstasida-back"> <?php include 'forstaSidaBack.inc.php'; ?> </figure>
                        </div>
                        <div class="meny-andrasida">
                            <figure class="meny-andrasida-front"> <?php include 'andraSidaFront.inc.php'; ?> </figure>
                            <figure class="meny-andrasida-back"> <?php include 'andraSidaBack.inc.php'; ?> </figure>
                        </div>
                        <div class="meny-sistasida">
                            <figure class="meny-sistasida-front"> <?php include 'sistaSidaFront.inc.php'; ?> </figure>
                            <figure class="meny-sistasida-back"><h1>back Sistasida</h1></figure>
                        </div>
                    </section>
                </div>

                <!--cirkel-->

                <div class="col-lg-12 flip-circle">                 
                    <section class="container circle">
                        <div id="card">
                            <figure class="front"></figure>
                            <figure class="back"></figure>
                        </div>
                    </section>
                </div>                         
            </div>   
        </div>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/egen.js"></script>
    </body>
</html>