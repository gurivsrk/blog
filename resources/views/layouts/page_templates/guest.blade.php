<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white">
  <div class="container">
    <div class="navbar-wrapper">
      <a class="navbar-brand" href="{{ route('frontend.index') }}">{{ @$gd->website_title }}</a>
    </div>
  </div>
</nav>
<!-- End Navbar -->
<div class="wrapper wrapper-full-page">
  <div class="page-header login-page header-filter" filter-color="black" style="background: linear-gradient(45deg, #3c91cd, #53bd8c);" data-color="purple">
  <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
    @yield('content')
    @include('layouts.footer')
  </div>
</div>
