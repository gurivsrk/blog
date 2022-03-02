@extends('layouts.app', ['activePage' => 'blogs', 'titlePage' => __('All Blogs')])

@section('content')

@php
  $decoded_cat = json_decode(@$blogs->categories);
  $decoded_tag = json_decode(@$blogs->tags);
@endphp

  <div class="content">
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-info">
              <h4 class="card-title">All Blogs</h4>
              <p class="card-category">Here you can manage Blogs</p>
            </div>
            <div class="card-body table-responsive">
                <!--- Add Form --->
                <div class="row  justify-content-center">
                    <div id="addBlogSection" class="col-md-10 vsrkAddForms {{ $errors->any() ? 'd-block' : ((@$type =='edit-blog')?'d-block':'') }}">
                           @if(@$type =='edit-blog')
                                <a href="{{route('all-blogs.index')}}"><div class="close">X</div></a>
                            @else
                                <div class="close">X</div>
                            @endif      
                        <form method="post"  id="Add-Blog" action="{{(@$type != 'edit-blog')?route('all-blogs.store'):route('all-blogs.update',$blogs->id)}}" enctype="multipart/form-data">
                        @if(@$type =='edit-blog')
                                @method('put')
                            @endif
                        <h4 class="card-title mb-4">Add Blog</h4>
                            @csrf
                            <div class="col-md-4 p-0">
                                <label class="">{{ __('Blog Cover Image') }}</label>
                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-preview fileinput-exists thumbnail img-raised">
                                      @if(@$blogs->blogImage)
                                        <img src="{{asset(@$blogs->blogImage)}}">
                                      @endif
                                    </div>
                                        <a href="#pablo" class="fileinput-exists" data-dismiss="fileinput">
                                        <i class="fa fa-times"></i></a>
                                    <div id="vsrkInputImg"> 
                                        <span class="btn btn-raised btn-file">
                                        <input type="file" name="blogImage" />
                                        </span>
                                    </div>
                                </div>    
                                @if ($errors->has('blogImage'))
                                        <span id="blogImage-error" class="error text-danger" for="input-blogImage">{{ $errors->first('blogImage') }}</span>
                                    @endif
                            </div>
                              <div class="{{ $errors->has('title') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Title') }}</label>
                                    <input class="form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" name="title" id="input-title" type="text" placeholder="{{ __('title') }}" value="{{old('title',@$blogs->title)}}" required="true" aria-required="true"/>
                                    @if ($errors->has('title'))
                                        <span id="title-error" class="error text-danger" for="input-title">{{ $errors->first('title') }}</span>
                                    @endif
                              </div>
                              <div class="{{ $errors->has('sub_title') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Sub Title') }}</label>
                                    <input class="form-control{{ $errors->has('sub_title') ? ' is-invalid' : '' }}" name="sub_title" id="input-title" type="text" placeholder="{{ __('sub title (if any)') }}" value="{{old('sub_title',@$blogs->sub_title)}}"/>
                                    @if ($errors->has('sub_title'))
                                        <span id="sub_title-error" class="error text-danger" for="input-sub_title">{{ $errors->first('sub_title') }}</span>
                                    @endif
                              </div>
                            <div class="row">
                                <div class="col-md-6{{ $errors->has('categories') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Categories') }}</label>
                                   <select name="categories[]" class="vsrk-select form-control custom-select" multiple aria-required="true">
                                       @if(!empty($catetag))
                                        @foreach($catetag as $cat)
                                          @if($cat->type == "category")
                                            @if(!empty($decoded_cat))
                                              <option value="{{$cat->name}}" {{(in_array($cat->name,$decoded_cat)?'selected':'')}}>{{$cat->name}}</option>
                                            @else
                                              <option value="{{$cat->name}}">{{$cat->name}}</option>  
                                            @endif
                                          @endif
                                        @endforeach
                                       @endif
                                   </select>
                                    @if ($errors->has('categories'))
                                        <span id="categories-error" class="error text-danger" for="input-categories">{{ $errors->first('categories') }}</span>
                                    @endif
                                </div>
                                <div class="col-md-6{{ $errors->has('') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Tags') }}</label>
                                    <select name="tags[]" class="vsrk-select form-control custom-select" multiple aria-required="true">
                                    @if(!empty($catetag))
                                        @foreach($catetag as $tag)
                                          @if($tag->type == "tag")
                                          @if(!empty($decoded_tag))
                                              <option value="{{$tag->name}}" {{(in_array($tag->name,$decoded_tag)?'selected':'')}}>{{$tag->name}}</option>
                                            @else
                                              <option value="{{$tag->name}}">{{$tag->name}}</option>
                                            @endif
                                          @endif
                                        @endforeach
                                       @endif
                                   </select>
                                    @if ($errors->has('tags'))
                                        <span id="tags-error" class="error text-danger" for="input-tags">{{ $errors->first('tags') }}</span>
                                    @endif
                                </div>
                            </div>

                            <div class="{{ $errors->has('descritption') ? ' has-danger' : '' }}">
                                <label class="">{{ __('Descritption') }}</label>
                                <textarea class="form-control{{ $errors->has('descritption') ? ' is-invalid' : '' }} ckeditor"  rows="5"  name="descritption" id="input-descritption" placeholder="{{ __('descritption') }}" required="true" aria-required="true">{{old('descritption',@$blogs->descritption)}}</textarea>
                                @if ($errors->has('descritption'))
                                    <span id="name-descritption" class="error text-danger" for="input-descritption">{{ $errors->first('descritption') }}</span>
                                @endif
                            </div>
                            
                            <div class="{{ $errors->has('post_status') ? ' has-danger' : '' }}">
                                <label class="">{{ __('Post Status') }}</label>
                                <select class="form-control custom-select" name="post_status" required aria-required="true">
                                    <option hidden value="">Please Select Post Status</option>
                                    <option value="enabled" {{(@$blogs->post_status === "enabled" ? 'selected':'')}}>Enabled</option>
                                    <option value="disabled" {{(@$blogs->post_status === "disabled" ? 'selected':'')}}>Disabled</option>
                                </select>
                                @if ($errors->has('post_status'))
                                    <span id="post_status-status" class="error text-danger" for="input-post_status">{{ $errors->first('post_status') }}</span>
                                @endif
                            </div>
                            
                            <div class="form-group">
                            <input class="btn {{(@$type== 'edit-blog')?'btn-warning':'btn-success'}} " name="Submit" type="submit" value="{{(@$type== 'edit-blog')?'Update':'Submit'}}"/>
                            </div>
                        </form>
                    </div>
                    </div>
                <!---- End Add Form ---->
                <div class="row">
                  <div  class="col-12 text-right ">
                    <button  data-attr="addBlogSection" class="btn btn-sm btn-info addBtn">Add New Blog<div class="ripple-container"></div></button>
                  </div>
                    @include('partials.blogType',compact('item','type'))
                  
                </div>
                <div class="row">
                  <div class="col-md-3 pagination ml-3">
                        {{ $item->links() }}
                  </div>
                </div>
            </div>
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

@push('js')

@endpush