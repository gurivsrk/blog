@extends('layouts.frontend.frontend', ['activeClass' => 'all_blog','pageType'=>'all_blog'])
@section('frontend_content')
<section id="main-blog-section" class="mt-4">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div id="breadcrumbs">
                    <span><a href="/">Home</a></span>
                    <span>All Blogs</span>
                </div>
                <div id="main-content">
                    <h1 class="blog-title-with-border">All Blogs</h1>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="masonry-gallery" class="bg-light mt-5">
    <div class="container">
        <div class="row justify-content-center masonry-gallery">
            @include('partials.frontend.blog',compact(['all_blogs']))
        </div>
    </div>
</section>

@endsection


