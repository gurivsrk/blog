<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Blog</title>
    <link rel="icon" href="#" type="image/png" sizes="16x16" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >
    <link rel="stylesheet/less" type="text/css" href="{{ asset('frontend/less/style.less') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('frontend/css/helper.css')}}" />
  </head>
  <body id="body">
    <!--preloader-->
    <section id="preloader">
      <div class="pre-box">
        <div class="pre-box-container">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
      </div>
    </section>
    <!--end preloader-->
    <!-- navbar -->
    <nav id="navbar-main" class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav  mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="{{route('frontend.index')}}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{route('frontend.all-blog')}}">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div id="header-search-bar" class="display-flex align-items-center overflow-hidden">
            <div class="toggle-child cursor-point d-block" data-id="search-bar">
              <i class="fa-solid fa-magnifying-glass font-large"></i>
            </div>
            <form id="search-bar" class="display-none">
              <input class="form-control me-2 display-inline inputProperty"  type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-primary display-inline inputProperty" type="submit">Search</button>
              <div class="close font-10 cursor-point text-white" data-id="search-bar">X</div>
            </form>
          </div>
        </div>
      </div>
    </nav>
        @yield('frontend_content')
        <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="row">          
              <div class="col-lg-4">
                <h1><a href="#">LOGO</a></h1>
                <img src="{{asset('frontend/imgs/svgexport-18.svg')}}">
              </div>
              <div id="social-section" class="col-lg-8 display-flex align-items-center">
                <ul id="social-link"  data-content="Follow Us">
                  <li><a href="#"> <i class="fa-brands fa-facebook-f"></i> </a></li>
                  <li><a href="#"> <i class="fa-brands fa-twitter"></i> </a></li>
                  <li><a href="#"> <i class="fa-brands fa-instagram"></i> </a></li>
                  <li><a href="#"> <i class="fa-brands fa-linkedin-in"></i> </a></li>
                  <li><a href="#"> <i class="fa-brands fa-youtube"></i> </a></li>
                  <li><a href="#"> <i class="fa-brands fa-pinterest-p"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row align-items-center" style="height: 100%">
              <div class="col-sm-6">
                <ul id="footer-menu-1" class="footer-menu">
                  <li><a href="#">Menu 1</a></li>
                  <li><a href="#">Menu 2</a></li>
                  <li><a href="#">Menu 3</a></li>
                  <li><a href="#">Menu 4</a></li>
                  <li><a href="#">Menu 5</a></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul id="footer-menu-2" class="footer-menu">
                  <li><a href="#">Menu 1</a></li>
                  <li><a href="#">Menu 2</a></li>
                  <li><a href="#">Menu 3</a></li>
                  <li><a href="#">Menu 4</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <section id="footer-bar" class="pt-4 pb-1">
      <div class="container">
        <div class="row">
          <p>All rights reserves to <a class="" href="#" target="_blank">VSRK CAPITAL</a></p>
        </div>
      </div>
    </section>

    <!--JAVA-SCRIPTS-->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js" integrity="sha256-hlKLmzaRlE8SCJC1Kw8zoUbU8BxA+8kR3gseuKfMjxA=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/bc847a5bc4.js" crossorigin="anonymous"></script>
    <script src="{{asset('frontend/js/less.min.js')}}" ></script>
    <script src="{{asset('frontend/js/main.js')}}" ></script>

  </body>
</html>