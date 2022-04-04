<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>{{asset(@$gd->website_title)}}</title>
    <link rel="icon" href="{{asset(@$gd->favicon)}}" type="image/png" sizes="16x16" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >
    <link rel="stylesheet/less" type="text/css" href="{{ asset('frontend/less/style.less') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('frontend/css/helper.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/font-awesome.min.css')}}" />
    <style>
      @foreach($cate as $cateBg)
        @if(!empty($cateBg->bgcolor) && $cateBg->bgcolor != null)
        .feature-card.feature-tab .bg_{{$cateBg->id}}.feature-card-img::before{
              background:{{$cateBg->bgcolor}} !important;
            }
          #main-blog-section .bg_{{$cateBg->id}}.blog-section-img:before{
              background:{{$cateBg->bgcolor}} !important;
          }
        @endif
      @endforeach
    </style>
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
        <a class="navbar-brand" href="{{route('frontend.index')}}"><img src="{{asset(@$gd->website_logo)}}" class="img-fluid" alt="{{@$gd->website_title}} logo" width="200"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav  mb-2 mb-lg-0 "> 
          @if(!empty($menus))
            @foreach($menus as $menu) 
              @if(@$menu->name == 'primary_menu')
                @foreach(json_decode($menu->data) as $key => $link)
                  <li class="nav-item {{ (!empty($link->children)?'dropdown':'') }}">
                    <a class="nav-link {{ (!empty($link->children)?'dropdown-toggle':'') }}" id="{{ (!empty($link->children)?'navbarDropdown-'.++$key:'') }}" href="{{!empty($link->children)?'#':($link->href == '/'? $link->href : route('frontend.'.$link->href)) }}" {{ (!empty($link->children)?'role=button data-bs-toggle=dropdown aria-expanded=false':'') }}>{{$link->text}}</a>
                    @if(!empty($link->children))
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown-{{$key}}">
                      @foreach($link->children as $key => $clink)
                        <li><a class="dropdown-item" href="{{($clink->href == '/'? $clink->href : route('frontend.'.$clink->href))}}">{{$clink->text}}</a></li>
                      @endforeach
                    </ul>
                    @endif
                  </li>
                @endforeach
              @endif
            @endforeach  
          @endif
          </ul>
          <div id="header-search-bar" class="display-flex align-items-center overflow-hidden">
            <div class="toggle-child cursor-point d-block" data-id="search-bar">
              <i class="fa fa-search"></i>
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
                <h1><a href="{{route('frontend.index')}}"><img src="{{asset(@$gd->website_logo)}}" class="img-fluid" alt="{{@$gd->website_title}} logo" width="200"></a></h1>
                <img src="{{asset('frontend/imgs/svgexport-18.svg')}}">
              </div>
              <div id="social-section" class="col-lg-8 display-flex align-items-center ">
                <ul id="social-link" class="link-with-title"  data-content="Follow Us">
                  <li><a href="{{($gd->facebook_link == 'null' || $gd->facebook_link == null)?'#':$gd->facebook_link}}"> <i class="fa fa-facebook" aria-hidden="true"></i> </a></li>
                  <li><a href="{{($gd->twitter_link == 'null' || $gd->twitter_link == null)?'#':$gd->twitter_link}}"> <i class="fa fa-twitter" aria-hidden="true"></i> </a></li>
                  <li><a href="{{($gd->instagram_link == 'null' || $gd->instagram_link == null)?'#':$gd->instagram_link}}"> <i class="fa fa-instagram" aria-hidden="true"></i> </a></li>
                  <li><a href="{{($gd->linkedin_link == 'null' || $gd->linkedin_link == null)?'#':$gd->linkedin_link}}"> <i class="fa fa-linkedin" aria-hidden="true"></i> </a></li>
                  <li><a href="{{($gd->youtube_link == 'null' || $gd->youtube_link == null)?'#':$gd->youtube_link}}"> <i class="fa fa-youtube-play" aria-hidden="true"></i> </a></li>
                  <li><a href="{{($gd->pinterest_link == 'null' || $gd->pinterest_link == null)?'#':$gd->pinterest_link}}"> <i class="fa fa-pinterest-p" aria-hidden="true"></i> </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row align-items-center" style="height: 100%">
              <div class="col-sm-6">
                  <ul id="address-info" class="link-with-title footer-menu position-relative-custom" data-content="Contact Info">
                    <li>Email: <a href="mailto:{{$gd->website_email_primary}}">{{$gd->website_email_primary}}</a></li>
                    <li>Contact No.: <a href="tel:{{$gd->website_phone_primary}}">{{$gd->website_phone_primary}}</a></li>
                    <li>Address: {{$gd->office_location}}</li>
                  </ul>
              </div>
              <div class="col-sm-6">
                <ul id="footer-menu-1" class="footer-menu">
                    @if(!empty($menus))
                      @foreach($menus as $menu) 
                        @if(@$menu->name == 'footer_1' && !empty($menu->data))
                          @foreach(json_decode($menu->data) as $key => $link)
                            <li ><a  href="{{!empty($link->children)?'#':($link->href == '/'? $link->href : route('frontend.'.$link->href)) }}">{{$link->text}}</a> </li>
                          @endforeach
                        @endif
                      @endforeach  
                    @endif
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
    <script src="{{asset('frontend/js/less.min.js')}}" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    <script src="{{asset('frontend/js/main.js')}}" ></script>
    @stack('js')
  </body>
</html>