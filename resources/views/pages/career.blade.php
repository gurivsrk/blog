@extends('layouts.app', ['activePage' => 'career', 'titlePage' => __('Career')])


@section('content')

<div class="content">
  <div class="container-fluid">
    <div class="row">
      
      <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-info">
              <h4 class="card-title ">Career</h4>
              <p class="card-category"> Here you can manage Career page</p>
            </div>
            <div class="card-body">
              <div class="col-12 text-right ">
                      <a href="{{route('career.index')}}" class="btn btn-sm btn-warning" >Add/Edit Vacancies</a>
                  </div>
              <div id="career-section" class="page-field-section">
                  <div class="row">
                    <div class="col-md-12">
                      <h2 class="card-title mb-5">Page Content</h2>
                      <form method="post" action="{{route('staticPages.update','career')}}">
                        @csrf
                        @method('put')
                        <div class="form-group">
                          <label class="">{{ __('Page Heading') }}</label>
                          <input class="form-control{{ $errors->has('page_title') ? ' is-invalid' : '' }}" name="page_title" id="input-name" type="text" placeholder="{{ __('Page Title') }}" value="{{ old('page_title', @$data->page_title) }}" required="true" aria-required="true"/>
                          @if ($errors->has('page_title'))
                              <span id="page_title-error" class="error text-danger" for="input-page_title">{{ $errors->first('page_title') }}</span>
                          @endif
                        </div>
                        <div class="form-group">
                          <label class="position-relative">{{ __('Page Content') }}</label>
                          <textarea class="form-control{{ $errors->has('page_content') ? ' is-invalid' : '' }} ckeditor"  rows="5"  name="page_content" id="input-page_content" required="true" aria-required="true">{{old('page_content',@$data->page_content)}}</textarea>
                          @if ($errors->has('page_content'))
                              <span id="page_content-error" class="error text-danger" for="input-page_content">{{ $errors->first('page_content') }}</span>
                          @endif
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
