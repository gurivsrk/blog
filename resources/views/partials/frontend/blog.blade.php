
@foreach($all_blogs as $blog)
<div class="col-md-3">
    <div class="masonry-items" style="box-shadow:5px 5px {{!empty($blog->CatName->bgcolor)?$blog->CatName->bgcolor:'#dbf8ff'}}">
        <a href="{{route('frontend.blog',[$blog->id, $blog->slug])}}">
            <img class="main-masonry-img" src="{{asset($blog->blogImage)}}" alt="">
            <div class="items-content">
                <div class="feature-card feature-tab">
                    <div class="feature-card-img bg_{{$blog->catName->id}} position-relative-custom cursor-point display-inline ">
                    <img src="{{!empty($blog->catName->logo)? asset($blog->catName->logo) : asset('frontend/imgs/bank-1.png')}}" width="50" class="img-fluid position-relative-custom">
                    </div>
                    <div class="card-title">
                        {{$blog->catName->name}}
                    </div>
                    <h5>{{$blog->title}}</h5>
                </div> 
            </div>
            </a>
    </div>
</div>
@endforeach
