<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lumen5</title>
    <link rel="icon" type="image/x-icon" href="./images/fevicon.png">
    <link rel="stylesheet" href="./new.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</head>

<body>
    <div class="section1">
        <header>
            <div class="logo"><img src="./images/L5-logo-header.png" alt=""></div>
            <nav>
                <a href="#" class="wow">Pricing</a>
                <div class="dropdown">
                    <button onclick="toggle()" >Features
                        <div class="material-symbols-outlined" >expand_more</div>
                        
                    </button>
                    <div class="content c1" id="drop">
                        <a href="#">Turn Blogs to Videos</a>
                        <a href="#">Talking Head Videos</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button onclick="toggle()">Enterprise
                        <div class="material-symbols-outlined" >expand_more</div>
                    </button>
                    <div class="content c2">
                        <a href="#">Lumen5 for enterprise</a>
                        <a href="#">Case studies</a>
                        <a href="#">Request a demo</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button onclick="toggle()">Learn
                        <div class="material-symbols-outlined" >expand_more</div>
                    </button>
                    <div class="content c3">
                        <a href="#">Blog</a>
                        <a href="#">Podcast</a>
                        <a href="#">Resources</a>
                    </div>
                </div>

                
                
                <!-- <a href="#">Features</a>
                <a href="#">Enterprise</a>
                <a href="#">Learn</a> -->
                <a id="login" href="./login.html">Log in</a>
                <a id="Signup" href="./signUp.html">Sign up</a>
            </nav>
        </header>
    </div>
    <section class="section2">
        <div class="para">
            <h2>Grow your brand and drive <br> demand with video at scale</h2>
            <h5>Our online video creator makes it easy for anyone <br>
                on your team to create engaging video content</h5>
            <a href"#" type="button" class="lumenSign"><span>Sign up free</span></a>
        </div>
        <div class="vidcol1">
            <video src="./images/first_vid.mp4" class="wid1" autoplay loop muted></video>
        </div>
        <div class="reach">
            <p>Over 10 million videos created across every industry</p>
        </div>
        <div class="companies-logo">
            <img src="./images/logo-salesforce-color.png" alt="Salesforce-logo">
            <img src="./images/logo-pwc-color.png" alt="pwc-logo">
            <img src="./images/logo-kpmg-color.png" alt=".kpmg-logo">
            <img src="./images/logo-merk-color.png" alt="merck-logo">
            <img src="./images/logo-sap-color.png" alt="sap-logo">
            <img src="./images/logo-mitsubishi-color.png" alt="mitsubishi-logo">
            <img src="./images/logo-cisco-color.png" alt="cisco-logo">
        </div>
        <div class="cols2">
            <video src="./images/slidedeck_v4.webm" autoplay loop width="60%" height="400px" class="vidd"></video>
            <!-- <div class="vid2"></div> -->
            <div class="deck">
                <h3>Easier than building a slide <br> deck</h3>
                <h5>Creating with Lumen5 is just like making <br> a presentation. Point and click, drag and <br> drop,
                    done and done.</h5>
                <div class="atag"><a href="./signUp.html">Get started for free →</a></div>
                <hr class="hr1">
                <div class=" deck bottom">
                    <p>“One of our colleagues called Lumen5 the PowerPoint of video making. Everybody can use
                        PowerPoint; it’s easy.”</p>

                    <h4>Michelle Hsiao</h4>
                    <p>Visual Content Director</p>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png"
                        alt="">
                </div>
            </div>
        </div>
    </section>
    <section class="section3">
        <div class="sector3">
            <div class="row row1">
                <h2>AI built to repurpose marketing content</h2>
                <div class="h3">
                    <h3>Automatically turn blog posts into videos or transform zoom recordings into captivating clips.
                    </h3>
                </div>

                <div class="atag2"><a href="./signUp.html">Get started for free →</a></div>
                <hr class="hr2">
                <div class="row-bottom">
                    <p>“It's the best content creator I've ever used. It takes me 10-15 minutes to create a video.”</p>
                    <h4>Gareth Lloyd</h4>
                    <p>Social Media Marketing Manager</p>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png"
                        alt="">
                </div>

            </div>
            <div class="row row-video">
                <video src="./images/ai-repurpose-3.mov" autoplay loop></video>
            </div>
        </div>

    </section>
    <section class="section4">
        <div class="sector3">
            <div class="row">
                <video src="./images/choose-template.webm" autoplay loop></video>
            </div>
            <div class="row h2-black">
                <h2 class="h2-black">Templates designed to help you stay on brand, on budget, and on time</h2>
                <div class="h3 h3-black">
                    <h3>Tap into hundreds of customizable designs made to help you communicate effectively and
                        consistently.</h3>
                </div>
                <div class="atag2 blue">
                    <a href="./signUp.html">Get started for free →</a>
                </div>
                <hr class="hr2 hr-black">
                <div class="row-bottom row-black">
                    <p>"Lumen5 provides a great library of images, video footage, and music to deliver the energy and
                        traction you need for your social posts."</p>
                    <h4>Shirley Pang</h4>
                    <p>Global Social Media Manager</p>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png"
                        alt="">
                </div>
            </div>
        </div>
    </section>
    <section class="section5">
        <video src="./images/public-templates.webm" autoplay loop></video>
    </section>
    <section class="section6">
        <div class="shutter-vid">
            <video src="./images/media-search.webm" autoplay loop></video>
        </div>
        <div id="h1">
            <h1>Explore videos made with Lumen5</h1>
        </div>
    </section>
    <section class="section7">
        <div class="middle-nav">
            <button>Content Marketing</button>
            <button>Communications</button>
            <button>Promotional</button>
            <button>People & Culture</button>
            <button>Localization</button>
        </div>

        <div class="grid">
            <div class="shell">
                <video src=""></video>
            </div>
            <div class="shell"></div>
            <div class="shell"></div>
            <div class="shell"></div>
            <div class="shell"></div>
            <div class="shell"></div>
        </div>

        <div class="background-img">
            <div class="img0">
                <div class="h1sp">
                    <h1>Join over 1,000,000 companies using Lumen5 to tell their stories.</h1>
                    <p class="ptag00">Lumen5 helps marketers, publishers, and brands create video content in a breeze,
                        without any technical expertise.</p>
                    <p class="signup2">Sign up free</p>
                    <!-- <div class="ptag11"></div> -->

                </div>


            </div>
        </div>
    </section>
    <section class="section8">
        <div class="needMore">
            <h1>Need more convincing?</h1>
        </div>
        <div class="discover">
            <p>Discover how leading brands are getting results with Lumen5.</p>
        </div>

        <div id="slider">

            <img src="./images/slider/7.png" class="slides" alt="">
            <img src="./images/slider/1.png" class="slides" alt="">
            <img src="./images/slider/2.png" class="slides" alt="">
            <img src="./images/slider/3.png" class="slides" alt="">
            <img src="./images/slider/4.png" class="slides" alt="">
            <img src="./images/slider/5.png" class="slides" alt="">
            <img src="./images/slider/6.png" class="slides" alt="">


        </div>
        <div class="btns">
            <button onclick="prev()"><img src="./images/slider/arrow (1).png" alt=""></button>
            <button onclick="next()"><img src="./images/slider/arrow.png" alt=""></button>
        </div>

        <div class="comp">

            <button onclick="comp1()"><img src="https://storage.googleapis.com/lumen5-site-images/carousel-siemens.png"
                    alt=""></button>
            <button onclick="comp2()"><img src="https://storage.googleapis.com/lumen5-site-images/carousel-dnv.png"
                    alt=""></button>
            <button onclick="comp3()"><img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-mitsubishi.png" alt=""></button>
            <button onclick="comp4()"><img src="https://storage.googleapis.com/lumen5-site-images/carousel-ncstate.png"
                    alt=""></button>
            <button onclick="comp5()"><img src="https://storage.googleapis.com/lumen5-site-images/carousel-cms.png"
                    alt=""></button>
            <button onclick="comp6()"><img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-mondadori.png" alt=""></button>
            <button onclick="comp7()"><img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-berkshire.png" alt=""></button>
        </div>

    </section>

    <section class="section9">
        <div class="sector9">
            <div class="row para-9">
                <div class="row blackh29">
                    <h2>Learning resources for video marketing</h2>
                </div>
                <div class="ptag-blc">
                    <p>Our mission is to help you become your brand's best storyteller.</p>
                </div>
                <div class="atag2 blue">
                    <a href="./signUp.html">Get started for free →</a>
                </div>
            </div>
        </div>
        <div class="row learning-vid-9">
            <video src="./images/learning-resources.webm" autoplay loop></video>
        </div>
    </section>

    <footer>
        <div class="main-ft">
            <div class="footer-row">
                <div class="ft-row0">
                    <img src="./images/L5-logo-white.png" alt="">
                    <p>Lumen5 combines powerful AI with a simple drag-and-drop interface to help you create professional
                        video content in minutes.
                    </p>
                </div>
            </div>

            <div class="footer-row1">
                <div class="ft-row">
                    <h5>EXPLORE</h5>
                    <p>About</p>
                    <p>Careers</p>
                    <p>LinkedIn</p>
                    <p>Support</p>
                    <p>Product updates</p>
                </div>
                <div class="ft-row">
                    <h5>VIDEO TOOLS</h5>
                    <p>Add Text to Video</p>
                    <p>Cut Video</p>
                    <p>Merge Video</p>
                    <p>Compress Video</p>
                    <p>Resize Video</p>
                    <p>See all</p>
                </div>
                <div class="ft-row">
                    <h5>VIDEO CREATORS</h5>
                    <p>Video Editor</p>
                    <p>Photo Video Maker</p>
                    <p>Facebook Video Maker</p>
                    <p>YouTube Intro Maker</p>
                    <p>Instagram Video Maker</p>
                    <p>See all</p>
                </div>
            </div>
        </div>
        <div class="black-strip">
            <p>Copyright © 2023 Lumen5</p>
            <p>Terms of Use & Privacy Policy</p>
        </div>
    </footer>
</body>

</html>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script>
    $(document).ready(function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop()) {
                $("header").addClass('bgc');
            } else {
                $("header").removeClass('bgc');
            }
        });
    });
</script>
<script src="./js/slide.js"></script>
<script src="./js/index.js"></script>