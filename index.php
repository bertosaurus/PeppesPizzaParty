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
        <link href="forstaSida.css" rel="stylesheet">
        <link href="andraSida.css" rel="stylesheet">
        <link href="sistaSida.css" rel="stylesheet">
        <link href="footer.css" rel="stylesheet">
    </head>
    <body>
        
        <div class="skyImg"></div>


        <div class="container">

            <!--meny-->

            <div class="row circle-row">
                <div class="col-lg-12 meny-div">
                    <section class="col-lg-6 col-lg-offset-3 container meny-container">                       

                        <div class="meny-framsida">
                            <figure class="meny-framsida-front"><h1>Peppes Pizza Party</h1></figure>
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
                            <figure class="meny-sistasida-back"> <?php include 'sistaSidaBack.inc.php'; ?> </figure>
                        </div>
                        <div class="meny-backsida">
                            <figure class="meny-backsida-front"></figure>
                            <figure class="meny-backsida-back"></figure>
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