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
    <body class="inner inner-aside">
        <!--[if lt IE 9]>
            <div class="ieblock">
            Your Browser is out of date! Please upgrade to the newest version of <a href="http://www.google.com/chrome/">Chrome</a>, <a href="https://www.apple.com/safari/">Safari</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>.
            </div>
        <![endif]-->
        <div class="wrapper">
            <?php include 'partials/header.php'; ?>
            <div class="body bg-pattern">
               

                <aside>
                    <div class="block-header">
                        <div class="icon icon-paper icon-png"></div>
                        <h1>Show us your EMPOWER project, we would love to see it!</h1>
                        <p class="larger">Please use the form to submit your project.</p>
                    </div>
                </aside>  
                <section class="main">
                    <div class="content">
                        <form>
                            <fieldset>
                                <div class="row">
                                    <div class="small-12 columns">
                                        <legend>1. Developer Information</legend>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="small-12 medium-6 columns">
                                        <div class="input-wrapper">
                                            <label>Name</label>
                                            <input type="text">
                                        </div>

                                        <div class="input-wrapper">
                                            <label>Email</label>
                                            <input type="text">
                                        </div>
                                        
                                    </div>


                                    <div class="small-12 medium-6 columns">
                                        <div class="input-wrapper large">
                                            <label>Company</label>
                                            <input type="text">
                                        </div>

                                        <div class="input-wrapper large">
                                            <label>Telephone</label>
                                            <input type="text">
                                        </div>
                                        
                                    </div>
                              </fieldset>



                              <fieldset>
                                <div class="row">
                                    <div class="small-12 columns">
                                        <legend>2. Project Information</legend>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="small-12 medium-6 columns">
                                        <div class="input-wrapper">
                                            <label>Title</label>
                                            <input type="text" placeholder="Trimble Module Project X">
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="small-12 columns">
                                        <div class="input-wrapper no-label">
                                            <textarea placeholder="Trimble Project Description"></textarea>
                                        </div>
                                        <input type="submit" value="Submit" class="button button-yellow button-large"/>
                                    </div>
                                </div>


                              </fieldset>

                        </form>
                    </div>
                </section>  


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
