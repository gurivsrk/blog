@extends('layouts.frontend.frontend', ['activeClass' => 'single_blog','pageType'=>'single_blog'])
@section('frontend_content')
<section id="main-blog-section" class="mt-4">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div id="breadcrumbs">
                    <span><a href="{{route('frontend.index')}}">Home</a></span>
                    <span><a href="{{route('frontend.all-blog')}}">All Blogs</a></span>
                    <span><a href="{{route('frontend.all-blog.cate', $blog->cateSlug)}}">{{$blog->CatName->name}}</a></span>
                </div>
                <div id="main-content">
                    <h1 class="blog-title-with-border">{{$blog->title}}</h1>
                    {!! !empty($blog->sub_title)?'<h2>'.$blog->sub_title.'</h2>':'' !!}
                    <div class="publish-details">
                        <span>BY <strong>Admin</strong>  | Published {{$blog->BlogDate}}</span>
                    </div>
                    <div class="text-only">
                        {!! $blog->descritption !!} 
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="blog-section-img bg_{{$blog->CatName->id}} position-relative-custom">
                    <img src="{{ asset($blog->blogImage)}}" alt="{{$blog->title}}"  class="img-fluid">                
                </div>
                <div id="recent-post">
                    {{$latest}}
                  {{--  <a href="{{route('frontend.blog',[$fblog->id, $fblog->slug])}}">
                    <div class="feature-card-img secondary position-relative-custom cursor-point">
                        <img src="{{ asset($fblog->blogImage) }}" class="img-fluid" style=" width: 100%; height: 150px; object-fit: cover;">
                    </div>
                    <div class="feature-card secondary">
                        <div class="card-title">{{$fblog->CatName->name}}</div>
                        <h4>{{$fblog->title}}</h4>
                        <div class="card-by">
                            By <span>Admin</span>, Published {{$fblog->BlogDate}}
                        </div>
                    </div> 
                    </a> --}}
                </div>
                <div id="tag-cloud">

                </div>
            </div>
        </div>
    </div>
</section>

<section id="masonry-gallery" class="bg-light mt-5">
    <div class="container">
        <div class="row justify-content-center single-blog-masonary masonry-gallery">
            @include('partials.frontend.blog',compact(['all_blogs']))
        </div>
    </div>
</section>
@endsection