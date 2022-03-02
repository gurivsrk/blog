@extends('layouts.app', ['activePage' => 'faqs', 'titlePage' => __('Add/Edit Faqs')])

@section('content')
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-info">
            <h4 class="card-title ">FAQ's</h4>
            <p class="card-category">Add/Edit FAQ's' here</p>
          </div>
          <div class="card-body">
             <!--- Add Form --->
             <div class="row  justify-content-center">
                    <div id="addFaqSection" class="col-md-10 vsrkAddForms {{ $errors->any() ? 'd-block' : ((@$type =='edit-faqs')?'d-block':'') }}">
                           @if(@$type =='edit-faqs')
                                <a href="{{route('forms.index')}}"><div class="close">X</div></a>
                            @else
                                <div class="close">X</div>
                            @endif      
                        <form method="post"  id="add-form" action="{{(@$type != 'edit-faqs')?route('faqs.store'):route('faqs.update',$faqs->id)}}" enctype="multipart/form-data">
                        @if(@$type =='edit-faqs')
                                @method('put')
                            @endif
                        <h4 class="card-title mb-4">Add FAQ's</h4>
                            @csrf
                            <div class="row">
                                <div class="col-md-12{{ $errors->has('categories') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Category') }}</label>
                                   <select name="category_id" class="vsrk-select form-control custom-select dynamic-content" aria-required="true">
                                       @if(!empty($category))
                                        <option value="">Please Select One</option>
                                            @foreach($category as $cat)
                                              <option value="{{$cat->id}}" {{($cat->id == @$faqs->category_id)?"selected":""}} > {{$cat->name}}</option>  
                                            @endforeach
                                       @endif
                                   </select>
                                    @if ($errors->has('category'))
                                        <span id="category-error" class="error text-danger" for="input-category">{{ $errors->first('category') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="{{ $errors->has('question') ? ' has-danger' : '' }}  mt-4">
                                    <label class="">{{ __('Question') }}</label>
                                    <input class="form-control{{ $errors->has('question') ? ' is-invalid' : '' }}"  name="question" id="input-faqs_name" type="text" placeholder="{{ __('faqs Name') }}" value="{{old('question',@$faqs->question)}}" required="true" aria-required="true"/>
                                    @if ($errors->has('faqs_name'))
                                        <span id="question-error" class="error text-danger" for="input-question">{{ $errors->first('question') }}</span>
                                    @endif
                            </div>
                          

                            <div class="{{ $errors->has('answer') ? ' has-danger' : '' }} mt-4">
                                <label class="">{{ __('Answer') }}</label>
                                <textarea class="form-control{{ $errors->has('answer') ? ' is-invalid' : '' }} ckeditor"  rows="5"  name="answer" id="input-answer" placeholder="{{ __('answer') }}" required="true" aria-required="true">{{old('answer',@$faqs->answer)}}</textarea>
                                @if ($errors->has('answer'))
                                    <span id="name-answer" class="error text-danger" for="input-answer">{{ $errors->first('answer') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <input class="btn {{(!empty(@$type))?'btn-warning':'btn-success'}} " name="Submit" type="submit" value="{{(!empty(@$type))?'Update':'Submit'}}"/>
                            </div>
                        </form>
                    </div>
                    </div>
                <!---- End Add Form ---->
          <div class="col-12 text-right">
                  <a href="{{(!empty(@$type))?route('forms.index'):'#'}}" class="btn btn-sm btn-info {{(!empty(@$type))?'':'addBtn'}}" data-attr="addFaqSection">Add New FAQ<div class="ripple-container"></div><div class="ripple-container"></div></a>
                </div>
            <div class="table-responsive">
              <table class="table table-sort">
                <thead class=" text-primary">
                  <th> Sno.</th>
                  <th> Question</th>
                  <th> Answer</th>
                  <th> Category </th>
                  <th class="text-center"> Actions </th>
                </thead>
                <tbody>
                  @foreach($item as $key=>$faq)
                    <tr class="text-capitalize">
                      <td>{{++$key}}</td>
                      <td> {{@$faq->question}}</td>
                      <td> {!! Str::limit(@$faq->answer,80) !!}</td>
                      <td> {{(@$faq->category->name)}} </td>
                      <td class="td-actions text-center">
                          <a rel="tooltip" class="btn btn-success btn-link" href="{{route('faqs.edit',$faq->id)}}"> <i class="material-icons">edit</i> </a>
                          <form action="{{route('faqs.destroy',$faq->id)}}" method="POST" onsubmit="return confirm('Are you sure ?');" style="display: inline-block;">
                              @method('delete') 
                              @csrf
                              <button class="btn btn-danger btn-link"> <i class="material-icons">delete</i> </button>
                          </form>
                          </td>
                    </tr>
                  @endforeach
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection