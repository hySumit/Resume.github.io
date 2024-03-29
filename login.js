<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Lumen5</title>
    <link rel="stylesheet" href="./style/login.css">
    <link rel="icon" type="image/x-icon" href="./images/fevicon.png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>

<body>
    <section id="section">
        <div class="column left">
            <div class="imgleft">
                <div class="img-logo"><img src="./images/L5-logo-white.png" alt="Lumen5 logo" class="logo"></div>

                <div class="h1">
                    <strong class=".strong1">
                        Grow your brand
                        <br>
                        and drive demand
                        <br>
                        with video at scale
                    </strong>
                    <p class="strong2">
                        Join over 1,000,000 
                        <br>
                        companies 
                        <br>
                        using Lumen5 to tell their
                        <br>
                         stories.
                    </p>
                </div>
                <div class="comps">
                    <div class="div2">
                        <img src="./images/logo-seimens-white.png" alt="seimens logo">

                        <img src="./images/logo-merck-white.png" alt="merck logo">

                        <img src="./images/logo-kpmg-white.png" alt="">
                    </div>
                    <div class="div3">
                        <img src="./images/logo-sf-white.png" alt="">

                        <img src="./images/logo-sap-white.png" alt="">

                        <img src="./images/logo-cisco-white.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="column right">
            
            
            <div class="form">
                <div class="st-log">
                    <strong>Welcome Back!</strong>
                </div>
                <form action="" id="form">
                    <label for="">WORK EMAIL</label>
                    <!-- <p>WORK EMAIL</p> -->
                    <input required type="email" name="" id="email">
                    <label for="">PASSWORD</label>
                    <!-- <p>PASSWORD</p> -->
                    <input required type="password" name="" id="psd">
                    <!-- <span class="material-symbols-outlined">
                        visibility
                        </span> -->
                    <input type="submit" value="Log in" id="submit">
                </form>

            </div>
            <div class="hrbox">
                <div class="bottom-sign">
                <hr class="hr1">
                <p>OR</p>
                <hr class="hr2">
            </div></div>

            
            <div class="signupbtns">
                <button class="btn1">Log in wirh Facebook</button>
                <button class="btn2" >Log in via SSO</button>
            </div>
            <div class="acc">
                <p>Need a Lumen5 account? <span>
                    <a href="./signUp.html"> Create an account</a>
                </span></p>
            </div>
            <footer>
                <p>© 2023 Lumen5</p>
            </footer>
        </div>
    </section>
</body>

</html> 
<script src="./js/login.js" ></script>