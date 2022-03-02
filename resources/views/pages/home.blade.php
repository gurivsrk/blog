@extends('layouts.app', ['activePage' => 'home', 'titlePage' => __('Homepage')])


@section('content')

<div class="content">
  <div class="container-fluid">
    <div class="row">
      
      <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-info">
              <h4 class="card-title ">Home Page</h4>
              <p class="card-category"> Here you can Edit Homepage Content</p>
            </div>
            <div class="card-body">
              <div id="career-section" class="page-field-section">
                  <div class="row">
                    <div class="col-md-12">
                      <h2 class="card-title mb-5">Page Content</h2>
                      <form method="post" action="{{route('staticPages.update','home')}}">
                        @csrf
                        @method('put')
                         
                        <div class="seotype-section">
                          <h5 class="card-title mb-3">Testimonials:</h5>
                          <div class="form-group">
                              <label>{{__('FAQ Heading')}}</label>
                              <input type="text" class="form-control" name="faq_title" placeholder="FAQ Heading" value="{{old('faq_title',@$data->faq_title)}}" require aria-required="true"> 
                          </div>
                          <div class="form-group">
                              <label class="position-relative mb-1">{{__('Small Description')}}</label>
                              <textarea  class="form-control" name="faq_content" rows="3" placeholder="Faq Content"  require aria-required="true">{{old('faq_content',@$data->faq_content)}}</textarea>
                          </div>
                          <div class="row ">
                              <div class="col-md-12 mt-4">
                                  <label class="" style="color:#2d2d2d">{{ __('Add Testimonials') }}</label>
                                  <select name="faqs[]" class="vsrk-select form-control custom-select" multiple aria-required="true">
                                       @if(!empty($faqs))
                                         @foreach($faqs as $faq)
                                            <option value="{{$faq->id}}" {{in_array($faq->id,json_decode($data->faqs))?'selected':''}}>{{$faq->question}}</option>  
                                         @endforeach
                                       @endif
                                   </select>
                              </div>
                            </div>
                        </div>
                        @include('partials.seoFields',compact('data'))
                        <div class="form-group">
                            <input name="submit" type="submit" class="btn btn-success" value="SUBMIT">
                        </div>
                      </form>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  </div>
</div>

@endsection
