<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

        <meta name="description" content="">
        <meta name="keywords" content="">
        <title></title>
        <link type="image/x-icon" rel="shortcut icon" href="_assets/images/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="_assets/css/styles.css" />

        <!-- 
            <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-XXXXXXX-XX', 'auto');
            ga('send', 'pageview');

            </script>
        -->

    </head>
    <body class="register">
        <!--[if lt IE 9]>
            <div class="ieblock">
            Your Browser is out of date! Please upgrade to the newest version of <a href="http://www.google.com/chrome/">Chrome</a>, <a href="https://www.apple.com/safari/">Safari</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>.
            </div>
        <![endif]-->
        <div class="wrapper">
            <?php include 'partials/header.php'; ?>
            <div class="body">
                <section class="main">
                    <div class="content">
                        <div class="row">
                            <div class="small-12 medium-push-1 medium-10 large-push-2 large-8  columns">
                                <div class="row">
                                    <div class="small-12 medium-6 columns">
                                        <h1>Are you a registered EMPOWER Developer?</h1>
                                        <p>Login to your Trimble account below.</p>
                                        <form>
                                            <div class="input-wrapper small">
                                                <label class="icon icon-user">User</label>
                                                <input type="text" placeholder="Username or Email">
                                            </div>

                                            <div class="input-wrapper small">
                                                <label class="icon icon-lock2">Lock</label>
                                                <input type="text" placeholder="Password">
                                            </div>

                                            <input type="checkbox"><label>Remember Me</label>


                                            <input type="submit" value="Login" class="button button-yellow button-large"/>
                                            <p class="text-center"><a href="#">I fogot my Password!</a></p>

                                        </form>
                                    </div>
                                    <div class="small-12 medium-6 columns">
                                        <h1>Want to become a developer?</h1>
                                        <p>Click the link below to register.</p>
                                        <p><a href="" class="button button-large button-outline">Register</a></p>
                                        <h3 class="h3-secondary">New to Trimble? </h3>
                                        <p>Visit our global site to learn more about our amazing products and services.<br />
                                        <a href="http://www.trimble.com">www.trimble.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <?php include 'partials/footer.php'; ?>
        </div>


         <script src="_assets/vendor/modernizr/modernizr.js"></script>
         <script src="_assets/vendor/jquery/dist/jquery.min.js"></script>
         <script src="_assets/vendor/jquery-migrate/jquery-migrate.min.js"></script>
         <script src="_assets/vendor/foundation/js/foundation.min.js"></script>
         <script src="_assets/vendor/jquery-placeholder/jquery.placeholder.js"></script>
         <script src="_assets/js/main.js"></script>

    </body>
</html>
